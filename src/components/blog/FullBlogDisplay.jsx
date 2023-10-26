import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BG from "../../assets/Images/bg.jpg";
import Header from "../homepage/Header";
import Footer from "../homepage/Footer";
import { useAuth } from "../../context/AuthContext";
import "./blogDisplay.css";

function FullBlogDisplay() {
  const { id } = useParams();
  const { token, authorId } = useAuth();
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    createdAt: "",
    updatedAt: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");

  const handleEdit = () => {
    setUpdatedTitle(blog.title);
    setUpdatedDescription(blog.description);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/blogs/${id}`,
        {
          title: updatedTitle,
          description: updatedDescription,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const updatedBlog = response.data.data;
      setBlog(updatedBlog);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      window.alert("Are you sure You want to delete the Blog?");
      window.location.href = "/";
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/blogs/${id}`);
        const fetchedBlog = response.data.data;
        setBlog(fetchedBlog);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };
    fetchBlog();
  }, [id]);

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div
        className="home-bg-img relative flex-1"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div className="blog-display-main">
          <h1 className="blog-editing">
            {isEditing ? (
              <input
                type="text"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
                className="w-full bg-gray-700 p-2 rounded mb-2"
              />
            ) : (
              blog.title
            )}
          </h1>
          <p className="text-lg text-gray-200">
            {isEditing ? (
              <textarea
                value={updatedDescription}
                onChange={(e) => setUpdatedDescription(e.target.value)}
                className="w-full bg-gray-700 p-2 rounded"
                rows="10"
                cols="100"
              />
            ) : (
              blog.description
            )}
          </p>
          <div className="mt-8">
            <div className="text-gray-300">
              Created: {new Date(blog.createdAt).toLocaleString()}
            </div>
            {blog.createdAt !== blog.updatedAt && (
              <div className="text-gray-300 mt-1">
                Last Updated: {new Date(blog.updatedAt).toLocaleString()}
              </div>
            )}
          </div>

          <div className="flex justify-center mt-4">
            {authorId === blog.authorId && (
              <>
                {isEditing ? (
                  <>
                    <button onClick={handleCancel} className="btn-cancel">
                      Cancel
                    </button>
                    <button onClick={handleUpdate} className="btn-update">
                      Update
                    </button>
                  </>
                ) : (
                  <button onClick={handleEdit} className="btn-update">
                    Edit
                  </button>
                )}
                <button onClick={handleDelete} className="btn-dlt">
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FullBlogDisplay;
