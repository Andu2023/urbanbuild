const About = () => {
  return (
    <section id="about" className="py-16 xl:py-32 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col  gap-12 xl:gap-0 xl:flex-row xl:items-center">
          {/* Left Side - Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-gray-600 text-lg mb-6">
              We are dedicated to providing high-quality solutions that help businesses 
              and individuals achieve their goals. Our team is passionate, innovative, and 
              committed to excellence.
            </p>
            <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <img
              src="/assets/about/about-image.jpg"
              alt="About Us"
              className="w-full max-w-md rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

