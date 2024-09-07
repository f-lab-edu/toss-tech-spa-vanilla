import postService from "@/services/postService";
import { formatDate } from "@/utils/dateUtils.js";

export class PostList extends HTMLElement {
  constructor() {
    super();
    this.posts = [];
    this.activeTab = "all";
  }

  async connectedCallback() {
    await this.fetchPosts();
    this.render();
  }

  async fetchPosts() {
    this.posts = await postService.fetchPosts(this.activeTab);
  }

  render() {
    const tabsView = this.createTabs();
    this.replaceContent(tabsView);
    this.renderPosts();
  }

  createTabs() {
    const tabsView = document.createElement("tabs-view");

    tabsView.addEventListener("click", (event) => this.handleTabClick(event));

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

  async handleTabClick(event) {
    const category = event.target.dataset.category;
    const isDifferentCategory = category && category !== this.activeTab;

    if (isDifferentCategory) {
      this.activeTab = category;
      await this.fetchPosts();
      this.render();

      const tabsView = this.querySelector("tabs-view");
      if (tabsView) {
        tabsView.updateActiveTab(category);
      }
    }
  }
  replaceContent(newElement) {
    this.innerHTML = "";
    this.appendChild(newElement);
  }
}
