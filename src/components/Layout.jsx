import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              className="text-2xl font-bold text-gray-800"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Your Fancy App
            </motion.h1>
            <nav>
              <ul className="flex space-x-8">
                <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Home</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">About</Link>
                </motion.li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>
      <footer className="bg-gradient-to-r from-red-500 to-red-600 shadow-inner">
        <div className="container mx-auto px-6 py-8 text-center text-white">
          <p className="text-sm font-medium">© 2024 Your Fancy App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
