import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'babel-core/register';
import 'babel-polyfill';

import App from 'App';
import GlobalStateProvider from 'globalState/GlobalStateProvider';
import CustomApolloProvider from 'graphql/CustomApolloProvider';

import { ThemeProvider } from 'styled-components';
import Theme from 'GlobalTheme';
import ModalProvider from 'components/container/modal/ModalProvider';
import 'utils/i18n';

import { AuthProvider } from 'auth/basicAuth';
import { AuthProceduresProvider } from 'auth/authProcedures';

import 'index.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-phone-input-2/lib/style.css';
import 'react-toastify/dist/ReactToastify.css';
import { BasisTheoryProvider, TextElement, useBasisTheory } from '@basis-theory/basis-theory-react';

type MainComponentPropsType = {};

declare global {
  interface Window {
    analytics: any;
  }
}

const MainComponent = ({}: MainComponentPropsType) => {
  const { bt } = useBasisTheory('key_Qg5gWeFHEPCdbKZu2e3sz2', { elements: true });

  // window.analytics.load(process.env.segment_wk);

  return (
    <BrowserRouter>
      <AuthProvider>
        <AuthProceduresProvider>
          <ModalProvider>
            <ThemeProvider theme={Theme}>
              <CustomApolloProvider>
                <BasisTheoryProvider bt={bt}>
                  <App />
                </BasisTheoryProvider>
              </CustomApolloProvider>
            </ThemeProvider>
          </ModalProvider>
        </AuthProceduresProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

const main = () => {
  const wrapper = document.getElementById('root');
  wrapper ? ReactDOM.render(<MainComponent />, wrapper) : false;
};

main();
