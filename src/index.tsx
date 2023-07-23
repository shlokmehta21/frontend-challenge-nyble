import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'babel-core/register';
import 'babel-polyfill';

import App from 'App';
import CustomApolloProvider from 'graphql/CustomApolloProvider';

import { ThemeProvider } from 'styled-components';
import Theme from 'GlobalTheme';

import 'index.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-phone-input-2/lib/style.css';
import 'react-toastify/dist/ReactToastify.css';

type MainComponentPropsType = {};

declare global {
  interface Window {
    analytics: any;
  }
}

const MainComponent = ({}: MainComponentPropsType) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <CustomApolloProvider>
          <App />
        </CustomApolloProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

const main = () => {
  const wrapper = document.getElementById('root');
  wrapper ? ReactDOM.render(<MainComponent />, wrapper) : false;
};

main();
