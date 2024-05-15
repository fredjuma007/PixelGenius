import React from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';

const Home = () => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div>
        <ModeToggle />
        <div>
          <p>Home</p>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
