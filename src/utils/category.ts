import { Category } from "@/models/Posts";

export function isCategory(maybeCategory: unknown): maybeCategory is Category {
  return (
    maybeCategory === "all" ||
    maybeCategory === "tech" ||
    maybeCategory === "design"
  );
}
