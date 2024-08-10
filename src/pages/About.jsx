import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <motion.h1 
          className="text-4xl font-extrabold text-gray-900 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          About Your Fancy App
        </motion.h1>
        <motion.div 
          className="bg-white shadow-xl rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="p-8">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Your Fancy App is a cutting-edge solution designed to revolutionize the way you interact with technology. Our mission is to provide an unparalleled user experience through innovative features and sleek design.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Founded by a team of passionate developers and designers, we strive to push the boundaries of what's possible in web applications. Our commitment to excellence and user-centric design sets us apart in the digital landscape.
            </p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default About;
