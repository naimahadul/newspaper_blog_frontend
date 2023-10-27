import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const createBlog = async (newBlog, token) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/blogs`,
      newBlog,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

const getAllBlogs = async (page, size) => {
  try {
    const response = await axios.get(`${BASE_URL}/blogs?page=${page}&size=${size}`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export { createBlog, getAllBlogs };
