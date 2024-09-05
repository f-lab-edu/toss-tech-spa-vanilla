import posts from "@/mocks/posts.js";
import { formatDate } from "@/utils/dateUtils.js";

export class PostList extends HTMLElement {
  constructor() {
    super();
    this.posts = posts.all;
    this.activeTab = "all";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.replaceContent(this.createTabs());
    this.renderPosts();
  }

  createTabs() {
    const tabsView = document.createElement("tabs-view");

    window.requestAnimationFrame(() => {
      tabsView.addEventListener("click", (event) => this.handleTabClick(event));
    });

    return tabsView;
  }

  renderPosts() {
    this.posts.forEach((post) => {
      this.createPostItem(post);
    });
  }

  createPostItem(post) {
    const postItem = document.createElement("post-item");
    this.setPostAttributes(postItem, post);
    this.appendChild(postItem);
  }

  setPostAttributes(postItem, post) {
    postItem.setAttribute("href", `/article/${post.id}`);
    postItem.setAttribute("title", post.title);
    postItem.setAttribute("subtitle", post.subtitle);
    postItem.setAttribute("publishedTime", formatDate(post.publishedTime));
    postItem.setAttribute("editorName", post.editorName);
    postItem.setAttribute("thumbnailUrl", post.thumbnailUrl);
  }

  handleTabClick(event) {
    const category = event.target.dataset.category;
    const isDifferentCategory = category && category !== this.activeTab;
    if (isDifferentCategory) {
      this.activeTab = category;
      this.filterPostsByCategory(category);
      const tabsView = this.querySelector("tabs-view");
      tabsView.updateActiveTab(category);
    }
  }

  filterPostsByCategory(category) {
    this.posts = posts[category];
    this.updatePosts();
  }

  updatePosts() {
    this.clearPosts();
    this.renderPosts();
  }

  clearPosts() {
    const postItems = this.querySelectorAll("post-item");
    postItems.forEach((post) => post.remove());
  }

  replaceContent(newElement) {
    this.innerHTML = "";
    this.appendChild(newElement);
  }
}
