import posts from "@/mocks/posts.js";

export class PostList extends HTMLElement {
  constructor() {
    super();
    this.posts = posts.all;
    this.activeTab = "all";
  }

  connectedCallback() {
    this.render();
    window.requestAnimationFrame(() => {
      this.setupTabsListeners();
    });
  }

  render() {
    this.renderTabs();
    this.renderPosts();
  }

  renderTabs() {
    this.innerHTML = "";
    const tabsView = document.createElement("tabs-view");
    this.appendChild(tabsView);
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
    postItem.setAttribute("publishedTime", post.publishedTime);
    postItem.setAttribute("editorName", post.editorName);
    postItem.setAttribute("thumbnailUrl", post.thumbnailUrl);
  }

  setupTabsListeners() {
    const tabsView = this.querySelector("tabs-view");
    tabsView.addEventListener("click", (event) => this.handleTabClick(event));
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
}
