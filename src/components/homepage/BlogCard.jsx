import React, { useState } from "react";
import "../homepage/homepage.css";

const BlogCard = ({
  id,
  title: initialTitle,
  content: initialContent,
  onDelete,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [isEditing, setIsEditing] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (confirmDelete) {
      onDelete(id);
    }
    console.log(id);
  };

  const handleUpdate = () => {
    setIsEditing(false);
  };

  const toggleFullContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className="blogcard-main">
      <div className="flex mb-4">
        <div className="w-1/3 mr-4">
          <img
            src={`https://picsum.photos/id/${Math.ceil(
              Math.random() * 100
            )}/200`}
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
              <p
                className={`text-lg font-semibold ${
                  showFullContent ? "" : "truncate"
                }`}
              >
                {content}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-auto">
        {!isEditing && (
          <button onClick={toggleFullContent} className="text-blue-500">
            {showFullContent ? "Read Less" : "Read More"}
          </button>
        )}
        <div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="blogcard-edit-btn "
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
    </div>
  );
};

export default BlogCard;
