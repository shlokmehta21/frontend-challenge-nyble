import React, { useEffect, useMemo } from 'react';

import { History, Location } from 'history';
import Modal from 'react-modal';

import { ToastContainer } from 'react-toastify';

import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import {
  HOME_PAGE_ROUTE,
} from './Routes';

import { useTheme } from 'styled-components';
import { useWindowSize } from 'utils/windowSize/useWindowSize';
import  HomePage from 'pages/homePage/HomePage';

Modal.setAppElement('#root');

const App = () => {
  const history = useHistory();
  const theme = useTheme();
  const [width, height] = useWindowSize();
  const location = useLocation();

  const appStyleProps = useMemo(() => ({ height: height, width: '100%' }), [height]);

  return (
    <div style={appStyleProps}>
      <Switch>
        <Route exact path={HOME_PAGE_ROUTE}>
          <HomePage />
        </Route>
      </Switch>
      <ToastContainer
        position="bottom-left"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </div>
  );
};

export default App;
