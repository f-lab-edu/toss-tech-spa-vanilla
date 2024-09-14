import api from "@/api/fetchApi";
import { ApiResponse } from "@/models/ApiResponse";
import { Post } from "@/models/Posts";

async function fetchPosts(category: string = "all"): Promise<Post[]> {
  const url =
    category === "all"
      ? "http://localhost:3000/posts"
      : `http://localhost:3000/posts?category=${category}`;

  const response: ApiResponse<Post> = await api.fetchData(url);
  return response.data;
}

async function fetchPostById(postId: string): Promise<Post[]> {
  const response: ApiResponse<Post> = await api.fetchData(
    `http://localhost:3000/posts?id=${postId}`
  );

  return response.data;
}

export default {
  fetchPosts,
  fetchPostById,
};
