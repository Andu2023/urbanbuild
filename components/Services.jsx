import { FaCog, FaUsers, FaRocket } from 'react-icons/fa';

const Services = () => {
  return (
    <div id="services" className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Our Services</h2>
        <p className="text-lg text-gray-600 mb-12">Explore the range of services we offer to help your business succeed.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaCog className="text-4xl text-green-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Service 1: Business Solutions</h3>
            <p className="text-gray-600">We provide customized business solutions to streamline your operations and improve efficiency.</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaUsers className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Service 2: Consulting</h3>
            <p className="text-gray-600">Our consulting services help you make informed decisions and build a strategy for growth and success.</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaRocket className="text-4xl text-red-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Service 3: Digital Transformation</h3>
            <p className="text-gray-600">We guide you through digital transformation, helping you adopt the latest technologies for better business outcomes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
