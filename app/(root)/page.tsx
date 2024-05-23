import React from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';
import { UserButton } from '@clerk/nextjs';

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
          <UserButton afterSignOutUrl='/' />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;