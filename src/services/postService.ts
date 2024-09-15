import api from "@/api/fetchAPI";
import { ApiResponse } from "@/models/ApiTypes";
import { Post } from "@/models/Posts";

async function fetchPosts(category: string = "all"): Promise<Post[] | null> {
  const url =
    category === "all"
      ? "http://localhost:3000/posts"
      : `http://localhost:3000/posts?category=${category}`;

  const response: ApiResponse<Post> = await api.fetchData(url);
  return response.data;
}

async function fetchPostById(postId: string): Promise<Post[] | null> {
  const response: ApiResponse<Post> = await api.fetchData(
    `http://localhost:3000/posts?id=${postId}`
  );

  return response.data;
}

export default {
  fetchPosts,
  fetchPostById,
};
