import React, { useEffect } from 'react';
import Details from './components/Details';
import Activities from './components/Activities';
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme';
import '@ui5/webcomponents-react/dist/Assets';
import { ThemeProvider } from '@ui5/webcomponents-react';

function App() {
  useEffect(() => {
    setTheme("sap_horizon");
  });
  
  return (
    <ThemeProvider>
      <Details />
      <Activities />
    </ThemeProvider>
  );
}

export default App;