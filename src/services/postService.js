import api from "@/api/fetchApi";

async function fetchPosts(category = "all") {
  const url =
    category === "all"
      ? "http://localhost:3000/posts"
      : `http://localhost:3000/posts?category=${category}`;

  const response = await api.get(url);
  return response.data;
}

async function fetchPostById(postId) {
  const response = await api.get(`http://localhost:3000/posts?id=${postId}`);
  return response.data;
}

export default {
  fetchPosts,
  fetchPostById,
};
