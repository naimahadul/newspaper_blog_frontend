// eslint-disable-next-line react/prop-types
const BlogCard = ({ title, content }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p>{content}</p>
        <a href="#" className="text-blue-500 mt-2 inline-block">
          Read more
        </a>
      </div>
    );
  };
  
  export default BlogCard;
