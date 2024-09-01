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
      this.updateActiveTab(
        this.querySelector(`[data-category="${this.activeTab}"]`)
      );
    });
  }

  render() {
    this.innerHTML = "";
    const tabsView = document.createElement("tabs-view");
    this.appendChild(tabsView);

    this.posts.forEach((post) => {
      this.createPostItem(post);
    });
  }

  createPostItem(post) {
    const postItem = document.createElement("post-item");
    postItem.setAttribute("href", `/article/${post.id}`);
    postItem.setAttribute("title", post.title);
    postItem.setAttribute("subtitle", post.subtitle);
    postItem.setAttribute("publishedTime", post.publishedTime);
    postItem.setAttribute("editorName", post.editorName);
    postItem.setAttribute("thumbnailUrl", post.thumbnailUrl);
    this.appendChild(postItem);
  }

  setupTabsListeners() {
    const tabs = this.querySelector("tabs-view");
    tabs.addEventListener("click", (event) => {
      const category = event.target.dataset.category;
      if (category) {
        this.filterPostsByCategory(category);
        this.activeTab = category;
      }
    });
  }

  filterPostsByCategory(category) {
    this.posts = posts[category];
    this.updatePostList();
    window.requestAnimationFrame(() => {
      this.updateActiveTab(this.querySelector(`[data-category="${category}"]`));
    });
  }

  updatePostList() {
    const postList = this.querySelectorAll("post-item");
    postList.forEach((post) => post.remove());
    this.posts.forEach((post) => {
      this.createPostItem(post);
    });
  }

  updateActiveTab(selectedTab) {
    const tabs = this.querySelectorAll(".tabs__item");
    tabs.forEach((tab) => tab.classList.remove("tabs__item--active"));
    selectedTab.classList.add("tabs__item--active");
  }
}
