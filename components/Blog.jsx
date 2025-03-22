const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to My Blog</h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Explore insightful articles, tutorials, and ideas on web development, design trends, and more.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Blog;

