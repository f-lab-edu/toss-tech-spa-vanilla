import { PostList, Sidebar, PostItem, Tabs } from "@/components/home";
import { PageFooter, PageHeader } from "@/components/common";
import { BlogHome, BlogArticle } from "@/view";

export default function registerCustomElements() {
  customElements.define("page-header", PageHeader);
  customElements.define("page-footer", PageFooter);
  customElements.define("side-bar", Sidebar);
  customElements.define("post-list", PostList);
  customElements.define("blog-home", BlogHome);
  customElements.define("blog-article", BlogArticle);
  customElements.define("post-item", PostItem);
  customElements.define("tabs-view", Tabs);
}
