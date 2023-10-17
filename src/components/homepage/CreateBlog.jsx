// CreateBlog.jsx
import React, { useState } from "react";
import axios from "axios";

const CreateBlog = ({ token, setBlogs }) => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");

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
        setBlogs((prevBlogs) => [createdBlog, ...prevBlogs]);
        clearInputFields();
      } catch (error) {
        console.error("Error creating blog:", error);
      }
    }
  };

  const clearInputFields = () => {
    setBlogTitle("");
    setBlogDescription("");
  };

  return (
    <div className="home-form">
      <form onSubmit={handleCreateBlog}>{/* Rest of your form code */}</form>
    </div>
  );
};

export default CreateBlog;
