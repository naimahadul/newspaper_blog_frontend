import React, { useState } from "react";
import "../homepage/homepage.css";

const BlogCard = ({
  title: initialTitle,
  content: initialContent,
  onDelete,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (confirmDelete) {
      onDelete();
    }
  };

  const handleUpdate = () => {
    setIsEditing(false);
  };

  return (
    <div className="blogcard-main">
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
          <p className="text-lg font-semibold">{content}</p>
        )}
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="blogcard-edit-btn"
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
        {isEditing && (
          <button onClick={handleUpdate} className="blogcard-update-btn">
            Update
          </button>
        )}
        <button onClick={handleDelete} className="blogcard-delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
