import React from 'react';
import Button from './components/Button.jsx';
import card from './components/card.jsx';
import footer from './components/footer.jsx';
import navbar from './components/navbar.jsx';
import TaskManager from './components/TaskManager.jsx';

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200 flex flex-col">
        <navbar />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Main content goes here */}
        </main>
        <footer />
      </div>
    </ThemeProvider>
  );
};

export default App;