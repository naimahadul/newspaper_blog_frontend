import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../homepage/homepage.css";
import { useAuth } from "../../context/AuthContext";
import { getUsername } from "../../services/blogServices";

const truncateContent = (content, limit) => {
  if (content.length <= limit) {
    return content;
  }
  return content.slice(0, limit) + " ...";
};

const BlogCard = ({
  id,
  title: initialTitle,
  content: initialContent,
  blogAuthorId,
  onDelete,
  onUpdate,
}) => {
  const { authorId } = useAuth();
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState("");
  const contentLimit = 200;

  const handleCancel = () => {
    setTitle(initialTitle);
    setContent(initialContent);
    setIsEditing(false);
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (confirmDelete && blogAuthorId === authorId) {
      onDelete(id);
    }
  };

  const handleUpdate = () => {
    setIsEditing(false);
    if (blogAuthorId === authorId) {
      onUpdate(id, title, content);
    }
  };

  useEffect(() => {
    const getByUsername = async () => {
      try {
        const response = await getUsername(blogAuthorId);
        setUsername(response);
      } catch (error) {
        console.error("Error fetching username:", error);
      }
    };
    getByUsername();
  }, []);

  return (
    <div>
      <div className="blogcard-main">
        <div className="flex mb-4">
          <div className="w-1/3 mr-4">
            <img
              src={`https://picsum.photos/id/${Math.ceil(
                Math.random() * 200
              )}/200/250`}
              alt="Random Image"
              className="rounded-lg"
            />
          </div>
          <div className="w-2/3">
            <div className="mb-2 text-center">
              {isEditing ? (
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="blogcard-text-edit2"
                />
              ) : (
                <h2 className="text-2xl font-bold">{title}</h2>
              )}
            </div>
            <div className="mb-2">
              {isEditing ? (
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="blogcard-text-edit"
                  rows="5"
                />
              ) : (
                <p className="text-lg font-semibold">
                  {truncateContent(content, contentLimit)}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="text-blue-300 font-semibold">
          {username && <p className="text-lg mb-2">Author: {username}</p>}
        </div>
        <div className="flex justify-between mt-auto">
          <Link to={`/${id}`}>Read More</Link>
          <div>
            {blogAuthorId === authorId && (
              <div>
                <button
                  onClick={() => {
                    if (isEditing) {
                      handleCancel();
                    } else {
                      setIsEditing(!isEditing);
                    }
                  }}
                  className="blogcard-edit-btn "
                >
                  {isEditing ? "Cancel" : "Edit"}
                </button>
                {isEditing && (
                  <button
                    onClick={handleUpdate}
                    className="blogcard-update-btn"
                  >
                    Update
                  </button>
                )}
                <button onClick={handleDelete} className="blogcard-delete-btn">
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
