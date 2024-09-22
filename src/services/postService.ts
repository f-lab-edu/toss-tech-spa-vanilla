import api from "@/api/fetchAPI";
import { ApiResponse } from "@/models/ApiTypes";
import { Category, Post } from "@/models/Posts";

async function fetchPosts(category: Category = "all") {
  const url =
    category === "all"
      ? "http://localhost:3000/posts"
      : `http://localhost:3000/posts?category=${category}`;

  const response = await api.fetchData<Post>(url);
  return response.data;
}

async function fetchPostById(postId: string) {
  const response = await api.fetchData<Post>(
    `http://localhost:3000/posts?id=${postId}`
  );
  return response.data;
}

export default {
  fetchPosts,
  fetchPostById,
};
