import api from "@/api/fetchApi";

async function fetchPosts(category = "all") {
  try {
    const url =
      category === "all"
        ? "http://localhost:3000/posts"
        : `http://localhost:3000/posts?category=${category}`;

    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error("Error", error.message || error);
    throw new Error(error);
  }
}

async function fetchPostById(postId) {
  try {
    const response = await api.get(`http://localhost:3000/posts?id=${postId}`);
    return response.data;
  } catch (error) {
    console.error("Error", error.message || error);
    throw new Error(error);
  }
}

export default {
  fetchPosts,
  fetchPostById,
};
