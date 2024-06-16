const BlogPost = ({ post }: any) => {
  return (
    <div className="w-full flex justify-center">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-100 mt-4">
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
            <p className="text-gray-600">{post.excerpt}</p>
            <a href="#" className="block mt-4 text-indigo-600 font-semibold hover:text-indigo-700">Read more</a>
        </div>
    </div>
</div>
  );
};

export default BlogPost;
