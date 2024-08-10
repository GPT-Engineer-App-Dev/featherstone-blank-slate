import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const Layout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-purple-50 via-white to-pink-50'}`}>
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-lg backdrop-blur-sm bg-opacity-70 dark:bg-opacity-70">
        <motion.div
          className="absolute top-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"
          style={{ width: `${scrollProgress * 100}%` }}
        />
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Your Fancy App
            </motion.h1>
            <nav className="flex items-center space-x-8">
              <ul className="flex space-x-8">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
              </ul>
              <motion.button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isDarkMode ? 'moon' : 'sun'}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="bg-gradient-to-r from-purple-600 to-pink-600 shadow-inner">
        <div className="container mx-auto px-6 py-8 text-center text-white">
          <p className="text-sm font-medium">© 2024 Your Fancy App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const NavLink = ({ to, children }) => (
  <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
    <Link 
      to={to} 
      className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors font-medium"
    >
      {children}
    </Link>
  </motion.li>
);

export default Layout;
