import React, { createContext, useState} from 'react'

// Step 1: Theme Type and Theme Object

type ThemeType = {
    primary: string;
    secondary: string;
    success: string;
    info: string;
    warning: string;
    danger: string;
    light: string;
    dark: string;
};

const lightTheme: ThemeType = {
    primary: '#0d6efd',
    secondary: '#6c757d',
    success: '#198754',
    info: '#0dcaf0',
    warning: '#ffc107',
    danger: '#dc3545',
    light: '#f8f9fa',
    dark: 'white',
  };
  
  const darkTheme: ThemeType = {
    primary: '#4a76a8',
    secondary: '#495057',
    success: '#155724',
    info: '#0c5460',
    warning: '#856404',
    danger: '#721c24',
    light: '#343a40',
    dark: 'black',
  };
// Step 2: Create a Theme Context
export const ThemeContext = createContext({
    theme: lightTheme, // Default to light theme
    toggleTheme: () => {},
});

// Step 3: Create a Theme Provider Component

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
    const [isLightMode, setIsLightMode] = useState(true);
    const toggleTheme = () => setIsLightMode(!isLightMode);
  
    return (
      <ThemeContext.Provider value={{ theme: isLightMode ? lightTheme : darkTheme, toggleTheme ,isLightMode}}>
        {children}
      </ThemeContext.Provider>
    );
  };

// Step 3: Create a Theme Provider Component
// interface ThemeProviderProps {
//     children: React.ReactNode;
// }

// export const ThemeProvider:React.FC<ThemeProviderProps> = ({children}) => {
//   return (
//         <ThemeContext.Provider value={theme}>
//             {children}
//         </ThemeContext.Provider>
//   )
// }

// Step 4: Custom Hook to Use Theme
// export const useTheme = () => useContext(ThemeContext);

// Example of using the theme in a component
// const ThemedComponent: React.FC = () => {
//     const theme = useTheme();
//     return (
//         <div style={{ color: theme.primary }}>This is a themed component.</div>
//     );
// };