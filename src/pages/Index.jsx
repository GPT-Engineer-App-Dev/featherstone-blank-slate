import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1 
          className="text-4xl font-extrabold text-gray-900 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Welcome to Your Fancy App
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-700 mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          This is a sophisticated, modern application designed to impress and inspire. Customize it to create your perfect digital experience.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="#" className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            Get Started
          </a>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Index;
