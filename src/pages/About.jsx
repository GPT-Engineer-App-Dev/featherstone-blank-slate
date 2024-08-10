import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Sparkles, Users, Zap, Heart } from 'lucide-react';

const About = () => {
  const features = [
    { icon: <Sparkles />, title: "Innovative Design", description: "Cutting-edge UI/UX that sets new standards" },
    { icon: <Users />, title: "User-Centric", description: "Built with the user's needs at the forefront" },
    { icon: <Zap />, title: "Lightning Fast", description: "Optimized for speed and performance" },
    { icon: <Heart />, title: "Made with Love", description: "Crafted with passion and attention to detail" },
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          About Your Fancy App
        </motion.h1>
        <motion.div 
          className="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl overflow-hidden mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="p-8">
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Your Fancy App is a cutting-edge solution designed to revolutionize the way you interact with technology. Our mission is to provide an unparalleled user experience through innovative features and sleek design.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Founded by a team of passionate developers and designers, we strive to push the boundaries of what's possible in web applications. Our commitment to excellence and user-centric design sets us apart in the digital landscape.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 text-purple-600 dark:text-purple-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{feature.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Layout>
  );
};

export default About;
