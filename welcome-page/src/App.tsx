import { useEffect } from 'react';

import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme';
import { ThemeProvider } from '@ui5/webcomponents-react';
import WelcomeCard from './components/WelcomeCard';


function App() {
  useEffect(() => {
    setTheme("sap_horizon");
  });

  return (
    <ThemeProvider>
      <WelcomeCard />
    </ThemeProvider>
  );
}

export default App;