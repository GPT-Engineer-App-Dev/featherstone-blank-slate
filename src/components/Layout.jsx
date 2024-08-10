import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-800">Your App</h1>
            <nav>
              <ul className="flex space-x-6">
                <li><Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600 text-sm">
          © 2024 Your App. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
