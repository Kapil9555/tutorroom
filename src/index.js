import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AdelContextWrapper from './store/Context';
import { ThemeProvider } from '@mui/material';
import { createGlobalStyle } from "styled-components";
import { theme } from './theme';
import { MAIN_COLOR, SECONDARY_COLOR } from './constant';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
const GlobalStyles = createGlobalStyle`
  html {
    --color: ${MAIN_COLOR};
    --color2: ${SECONDARY_COLOR};
  }
`;
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <AdelContextWrapper>

        <App />

      </AdelContextWrapper>
    </ThemeProvider>
  </React.StrictMode>
);
