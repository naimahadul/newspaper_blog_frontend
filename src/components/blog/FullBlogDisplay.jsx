import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Header from "../homepage/Header";
import Footer from "../homepage/Footer";
import { useAuth } from "../../context/AuthContext";
import "./blogDisplay.css";
import {
  getBlog,
  deleteBlog,
  updateBlog,
} from "../../services/blogServices.js";

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
      const updatedBlog = await updateBlog(
        id,
        {
          title: updatedTitle,
          description: updatedDescription,
        },
        token
      );
      setBlog(updatedBlog);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete the Blog?"
    );
    if (confirmed) {
      try {
        await deleteBlog(id, token);
        window.location.href = "/";
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    }
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const fetchedBlog = await getBlog(id);
        setBlog(fetchedBlog);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };
    fetchBlog();
  }, [id]);

  return (
    <div className="h-screen flex flex-col ">
      <Header />
      <div className="home-bg-img relative flex-1 bg-gray-900">
        <div className="blog-display-main bg-gray-700 bg-opacity-75">
          <h1 className="blog-editing">
            {isEditing ? (
              <input
                type="text"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
                className="w-full bg-gray-900 p-2 rounded mb-2"
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
                className="w-full bg-gray-900 p-2 rounded"
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
