import posts from "@/mocks/posts.js";

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
    window.requestAnimationFrame(() => {
      this.innerHTML = `
        <tabs-view></tabs-view>
        ${this.posts
          .map(
            (post) => `
          <post-item
            href="/article/${post.id}"
            title="${post.title}"
            subtitle="${post.subtitle}"
            publishedTime="${post.publishedTime}"
            editorName="${post.editorName}"
            thumbnailUrl="${post.thumbnailUrl}"
          ></post-item>
        `
          )
          .join("")}
        `;

      this.setupTabsListeners();
      this.updateActiveTab(
        this.querySelector(`[data-category="${this.activeTab}"]`)
      );
    });
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
    this.render();
  }

  updateActiveTab(selectedTab) {
    const tabs = this.querySelectorAll(".tabs__item");
    tabs.forEach((tab) => tab.classList.remove("tabs__item--active"));
    selectedTab.classList.add("tabs__item--active");
  }
}
