import React, { useEffect, useState, useRef } from 'react';
import debounce from 'lodash/debounce';

import useNetworkStatus from 'utils/widgets/useNetworkStatus';

import { useToast } from 'components/widget/toast/Toast';

const DEBOUNCE_TIME_IN_MS = 6000;
const DEBOUNCE_OPTIONS = {
  leading: true,
  trailing: true,
};

const NetworkStatus = () => {
  const online = useNetworkStatus();
  const [openSuccessToast, openErrorToast] = useToast();

  const [previousOnline, previousOnlineState] = useState(online);

  const notifyThatNetworkIsOffline = () => {
    openErrorToast(`Unable to connect to the internet`);
  };

  const notifyThatNetworkIsOnline = () => {
    openSuccessToast(`Reconnected to the internet!`);
  };

  const debounceCall = useRef(
    debounce(
      (current, previous) => {
        if (current == false) {
          notifyThatNetworkIsOffline();
        } else {
          if (previous == false) notifyThatNetworkIsOnline();
        }
        previousOnlineState(current);
      },
      DEBOUNCE_TIME_IN_MS,
      DEBOUNCE_OPTIONS
    )
  );

  useEffect(() => {
    debounceCall.current(online, previousOnline);
  }, [online]);
  return <></>;
};

export default NetworkStatus;
