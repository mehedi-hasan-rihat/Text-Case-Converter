import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import TextCaseConverter from './components/TextCaseConverter';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize GA
    ReactGA.initialize('G-1SW9LKSYJ9');
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
  }, []);

  return <TextCaseConverter />;
};

export default App;
