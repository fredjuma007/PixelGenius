import React from 'react';
import { ThemeProvider } from '@/components/theme-provider';

const Home = () => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div>
        <div>
          <p>Home</p>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;