import { useState } from "react";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setErrorMessage(""); // Clear error message when typing in title
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    setErrorMessage(""); // Clear error message when typing in description
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty title or description
    if (!title.trim() || !description.trim()) {
      setErrorMessage("Please fill in both title and description.");
      setSuccessMessage("");
      return;
    }

    // If both title and description are provided, display success message
    setSuccessMessage("Blog created successfully!");
    setErrorMessage("");
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-opacity-80 rounded-lg shadow p-6 max-w-md dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-4 text-center">
          Create a Blog
        </h1>
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {successMessage}
          </div>
        )}
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Blog Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={handleTitleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Blog Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              rows="5"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Create Blog
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateBlog;
