import BlogCard from "./BlogCard";
import { Header } from "../homepage/Header"
import Footer from "../homepage/Footer";
const blogData = [
  {
    id: 1,
    title: "Blog Title 1",
    content: "Description of blog 1...",
  },
  {
    id: 2,
    title: "Blog Title 2",
    content: "Description of blog 2...",
  },
  {
    id: 3,
    title: "Blog Title 3",
    content: "Description of blog 3...",
  },
  {
    id: 4,
    title: "Blog Title 4",
    content: "Description of blog 4...",
  },
  // Add more blog data as needed
];

const Home = () => {
  return (
    <div>
    <Header />
    <div className="container mx-auto p-6 flex justify-center items-center min-h-screen">
      <div className="max-w-screen-md w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Blogger</h1>
        {blogData.map((blog) => (
          <BlogCard key={blog.id} title={blog.title} content={blog.content} />
        ))}
      </div>
    </div>
    <Footer />
  </div>
  );
};

export default Home;
