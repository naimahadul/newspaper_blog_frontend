import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
import { Header } from "../homepage/Header";
import Footer from "../homepage/Footer";
import BG from "../../assets/Images/bg.jpg";
import { useAuth } from "../../context/AuthContext";

const Home = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [blogs, setBlogs] = useState([]);
  const { token, authorId } = useAuth();

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
        const response = await axios.post(
          "http://localhost:3000/blogs",
          newBlog,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const createdBlog = response.data.data;
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
      const response = await axios.put(
        `http://localhost:3000/blogs/${id}`,
        {
          title: updatedTitle,
          description: updatedContent,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const updatedBlog = response.data.data;
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
      await axios.delete(`http://localhost:3000/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const updatedBlogs = blogs.filter((blog) => blog.blogId !== id);
      setBlogs(updatedBlogs);
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

useEffect(() => {
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/blogs?page=0&size=13"
      );
      const fetchedBlogs = response.data.data.rows;
      fetchedBlogs.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
      setBlogs(fetchedBlogs);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };
  fetchBlogs();
}, []);

  return (
    <div className="home-bg-img" style={{ backgroundImage: `url(${BG})` }}>
      <Header />
      <div className="home-screen">
        <div className="max-w-screen-md w-full ">
          <h1 className="text-4xl font-bold mb-8 text-center text-black">
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
            {blogs.map((blog) => (
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
