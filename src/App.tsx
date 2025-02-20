import React from 'react'; // Import React and useContext
import { ThemeProvider } from './Theme/Theme';
import ThemedComponent from './Component/ThemedComponent';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
};

export default App;