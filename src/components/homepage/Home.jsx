import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
import { Header } from "../homepage/Header";
import Footer from "../homepage/Footer";
import BG from "../../assets/Images/bg.jpg";

const Home = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmNjQyNWQzZS0zZmIwLTQzOGYtODkwNy02MWM4NzQ5ZTlmMGQiLCJpYXQiOjE2OTc1MzI1MTYsImV4cCI6MTY5NzUzNjExNn0.7hv5q0C1t0vq8-5UlVM09KzCmYVD6mWv-IohqlM4ENc"
  );

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
        const createdBlog = response.data;
        setBlogs([createdBlog, ...blogs]);
        setBlogTitle("");
        setBlogDescription("");
      } catch (error) {
        console.error("Error creating blog:", error);
      }
    }
  };

  const handleDeleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const updatedBlogs = blogs.filter((blog) => blog.id !== id);
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
        setBlogs(response.data.data.rows);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
    fetchBlogs();
  }, [token]);
  const reversedBlogs = [...blogs].reverse();
  return (
    <div className="home-bg-img" style={{ backgroundImage: `url(${BG})` }}>
      <Header />
      <div className="home-screen">
        <div className="max-w-screen-md w-full ">
          <h1 className="text-4xl font-bold mb-8 text-center text-black">
            Welcome to Blogger
          </h1>
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
          <div>
            {reversedBlogs.map((blog) => (
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
