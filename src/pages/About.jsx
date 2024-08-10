import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">About Your App</h1>
        <p className="text-lg text-gray-700 mb-4">This is the About page of your application. It's designed to provide information about your app or team.</p>
        <p className="text-lg text-gray-700">Feel free to customize this page with your app's unique story, mission, or team details.</p>
      </div>
    </Layout>
  );
};

export default About;
