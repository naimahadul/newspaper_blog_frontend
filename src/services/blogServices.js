import axios from "axios";
const BASE_URL = "http://localhost:3000";

const getBlog = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/blogs/${id}`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

const updateBlog = async (id, updatedData, token) => {
  try {
    const response = await axios.put(`${BASE_URL}/blogs/${id}`, updatedData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

const deleteBlog = async (id, token) => {
  try {
    await axios.delete(`${BASE_URL}/blogs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    throw error;
  }
};

const getBlogTableSize = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/blogs/size`);
    const size = response.data.count;
    return size;
  } catch (error) {
    throw error;
  }
};

const getUsername = async (blogAuthorId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/blogs/username/${blogAuthorId}`
    );
    const username = response.data.username;
    return username;
  } catch (error) {
    throw error;
  }
};

export { getBlog, updateBlog, deleteBlog, getBlogTableSize, getUsername };
