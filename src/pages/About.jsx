import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">About Your App</h1>
        <p className="text-lg text-gray-600 mb-4">This is the About page of your application.</p>
        <p className="text-lg text-gray-600">You can add more information about your app or your team here.</p>
      </div>
    </Layout>
  );
};

export default About;
