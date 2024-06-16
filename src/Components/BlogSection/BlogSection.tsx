const BlogSection = () => {
  // Sample data for demonstration
  const blogs = [
    { id: 1, title: 'First Blog Post', content: 'Content of the first blog post...' },
    { id: 2, title: 'Second Blog Post', content: 'Content of the second blog post...' },
    { id: 3, title: 'Second Blog Post', content: 'Content of the second blog post...' },
    { id: 4, title: 'First Blog Post', content: 'Content of the first blog post...' },
    { id: 5, title: 'Second Blog Post', content: 'Content of the second blog post...' },
    { id: 6, title: 'Second Blog Post', content: 'Content of the second blog post...' },
    // Add more blog objects as needed
  ];

  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      {/* Centered heading */}
      <h1 className="text-2xl text-center  mb-8">Latest Blog Posts</h1>
  
      <div className="flex flex-wrap -m-4">
        {blogs.map(blog => (
          <div key={blog.id} className="lg:w-1/3 md:w-1/2 p-4">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              {/* Image */}
              <img
                className="object-cover object-center rounded-lg mb-4"
                src={""}  // Replace with your blog post image URL
                alt={blog.title}     // Use a meaningful alt text
                style={{ height: '200px' }}  // Adjust height as needed
              />
              
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{blog.title}</h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{blog.title}</h1>
              <p className="leading-relaxed mb-3">{blog.content}</p>
              <a href="#" className="text-indigo-500 inline-flex items-center">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  

  );
};

export default BlogSection;
