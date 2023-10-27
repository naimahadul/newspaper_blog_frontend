import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import { Header } from "../homepage/Header";
import Footer from "../homepage/Footer";
import { useAuth } from "../../context/AuthContext";
import { createBlog, getAllBlogs } from "../../services/homeServices.js";
import { updateBlog, deleteBlog } from "../../services/blogServices";

const Home = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [blogs, setBlogs] = useState([]);
  const { token, authorId } = useAuth();
  const [currentPage, setCurrentPage] = useState(1); 
  const blogsPerPage = 2; 

  const handleBlogTitleChange = (event) => {
    setBlogTitle(event.target.value);
  };

  const handleBlogDescriptionChange = (event) => {
    setBlogDescription(event.target.value);
  };

  const handleCreateBlog = async (event) => {
    event.preventDefault();
    if (blogTitle.trim() !== "" && blogDescription.trim() !== "") {
      const newBlog = {
        title: blogTitle,
        description: blogDescription,
        authorId: authorId,
      };

      try {
        const createdBlog = await createBlog(newBlog, token);
        setBlogs([createdBlog, ...blogs]);
        setBlogTitle("");
        setBlogDescription("");
      } catch (error) {
        console.error("Error creating blog:", error);
      }
    }
  };

  const handleUpdateBlog = async (id, updatedTitle, updatedContent) => {
    try {
      const updatedBlog = await updateBlog(
        id,
        {
          title: updatedTitle,
          description: updatedContent,
        },
        token
      );
      setBlogs((prevBlogs) => {
        return prevBlogs.map((blog) =>
          blog.blogId === id ? updatedBlog : blog
        );
      });
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  const handleDeleteBlog = async (id) => {
    try {
      await deleteBlog(id, token);
      const updatedBlogs = blogs.filter((blog) => blog.blogId !== id);
      setBlogs(updatedBlogs);
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getAllBlogs(currentPage, blogsPerPage);
        setBlogs(response);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
    fetchBlogs();
  }, [currentPage]);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <div className="home-bg-img bg-gray-900">
      <Header />
      <div className="home-screen">
        <div className="max-w-screen-md w-full ">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-100">
            Welcome to Blogger
          </h1>
          {token && authorId && (
            <div className="home-form">
              <form onSubmit={handleCreateBlog}>
                <div className="mb-6">
                  <label htmlFor="blogTitle" className="home-text">
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
                  <label htmlFor="blogDescription" className="home-text">
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
          )}
          <div>
            {blogs
              .slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage)
              .map((blog) => (
                <BlogCard
                  key={blog.blogId}
                  id={blog.blogId}
                  title={blog.title}
                  content={blog.description}
                  blogAuthorId={blog.authorId}
                  onDelete={handleDeleteBlog}
                  onUpdate={handleUpdateBlog}
                />
              ))}
          </div>
          {totalPages > 1 && (
            <div className="pagination text-gray-200">
              {currentPage > 1 && (
                <button onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
              )}
              {currentPage < totalPages && (
                <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
