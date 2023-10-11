import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../homepage/homepage.css"
const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      setErrorMessage("Please fill in both title and description.");
      setSuccessMessage("");
      return;
    }

    setSuccessMessage("Blog created successfully!");
    setErrorMessage("");
  };

  return (
    <div>
      <Header />
      <section className="create-blog-size1">
        <div className="create-blog-size2">
          <h1 className="create-blog-heading">
            Create a Blog
          </h1>
          {errorMessage && (
            <div className="create-emsg">
              {errorMessage}
            </div>
          )}
          {successMessage && (
            <div className="create-smsg">
              {successMessage}
            </div>
          )}
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="create-blog-label"
              >
                Blog Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={handleTitleChange}
                className="create-blog-title"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="create-blog-label"
              >
                Blog Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={handleDescriptionChange}
                rows="5"
                className="create-blog-desc"
              ></textarea>
            </div>
            <button
              type="submit"
              className="create-blog-button bg-sky-800"
            >
              Create Blog
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CreateBlog;
