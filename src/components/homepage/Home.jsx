import React, { useState } from "react";
import BlogCard from "./BlogCard";
import { Header } from "../homepage/Header";
import Footer from "../homepage/Footer";
import BG from "../../assets/Images/bg.jpg";

const Home = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [nextId, setNextId] = useState(1); 

  const handleBlogTitleChange = (event) => {
    setBlogTitle(event.target.value);
  };

  const handleBlogDescriptionChange = (event) => {
    setBlogDescription(event.target.value);
  };

  const handleCreateBlog = (event) => {
    event.preventDefault();

    if (blogTitle.trim() !== "" && blogDescription.trim() !== "") {
      const newBlog = {
        id: nextId, 
        title: blogTitle,
        description: blogDescription,
      };

      setBlogs([...blogs, newBlog]);
      setNextId(nextId + 1); 
      setBlogTitle("");
      setBlogDescription("");
      console.log(nextId);
      
    }
  };

  const handleDeleteBlog = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
  };

  return (
    <div className="flex flex-col min-h-screen bg-cover bg-no-repeat bg-fixed bg-opacity-75" style={{ backgroundImage: `url(${BG})` }}>
      <Header />
      <div className="container mx-auto p-6 flex justify-center items-center min-h-screen">
        <div className="max-w-screen-md w-full">
          <h1 className="text-4xl font-bold mb-8 text-center text-black">
            Welcome to Blogger
          </h1>
          <div className="bg-gray-700 bg-opacity-75 text-white rounded-lg shadow-lg p-6 mb-6">
            <form onSubmit={handleCreateBlog}>
              <div className="mb-6">
                <label htmlFor="blogTitle" className="block mb-2 text-sm font-medium text-white">
                  Blog Title
                </label>
                <input
                  type="text"
                  id="blogTitle"
                  value={blogTitle}
                  onChange={handleBlogTitleChange}
                  className="home-title"
                  placeholder="Enter the title"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="blogDescription" className="block mb-2 text-sm font-medium text-white">
                  Blog Description
                </label>
                <textarea
                  id="blogDescription"
                  value={blogDescription}
                  onChange={handleBlogDescriptionChange}
                  className="home-btn2"
                  rows="5"
                  placeholder="Enter the description"
                  required
                ></textarea>
              </div>
              <button type="submit" className="home-btn1 bg-blue-700">
                Create Blog
              </button>
            </form>
          </div>
          <div>
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id} 
                id={blog.id} 
                title={blog.title}
                content={blog.description}
                onDelete={handleDeleteBlog}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
