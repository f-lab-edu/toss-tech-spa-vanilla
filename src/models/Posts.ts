export type Post = {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  publishedTime: string;
  editorName: string;
  thumbnailUrl: string;
};

export type Category = "all" | "tech" | "design";
