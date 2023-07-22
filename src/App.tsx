import React, { useEffect, useMemo } from 'react';

import { History, Location } from 'history';
import Modal from 'react-modal';
import ModalMount from 'components/container/modal/ModalMount';
import { ToastContainer } from 'react-toastify';

import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import {
  HOME_PAGE_ROUTE,
} from './Routes';
import Navbar from 'components/widget/navbar/Navbar';

import HomePage from 'pages/homePage/HomePage';
import { useTheme } from 'styled-components';


import NetworkStatus from 'components/widget/networkStatus/NetworkStatus';
import { useWindowSize } from 'utils/windowSize/useWindowSize';


Modal.setAppElement('#root');


const App = () => {
  const history = useHistory();
  const theme = useTheme();
  const [width, height] = useWindowSize();
  const location = useLocation();




  const appStyleProps = useMemo(() => ({ height: height, width: '100%' }), [height]);


  return (
    <div style={appStyleProps}>
      <>
      
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
      <NetworkStatus />
      <ModalMount />
      </>
    </div>
  );
};

export default App;
