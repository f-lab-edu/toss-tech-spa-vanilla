import posts from "@/mocks/posts.js";

export function findPostById(id) {
  return posts.all.find((post) => post.id === id);
}
