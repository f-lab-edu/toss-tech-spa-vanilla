import api from "@/api/fetchApi";

const fetchPosts = async (category) => {
  try {
    const url =
      category === "all"
        ? "http://localhost:3000/posts"
        : `http://localhost:3000/posts?category=${category}`;

    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

const fetchPostById = async (postId) => {
  try {
    const response = await api.get(`http://localhost:3000/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching post with ID ${postId}:`, error);
    throw error;
  }
};

export default {
  fetchPosts,
  fetchPostById,
};
