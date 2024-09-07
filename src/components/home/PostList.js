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
    this.renderTabs();
    this.renderPosts();
  }

  renderTabs() {
    const newTabsView = this.createTabs();
    const existingTabsView = this.querySelector("tabs-view");

    if (existingTabsView) {
      this.replaceChild(newTabsView, existingTabsView);
    } else {
      this.appendChild(newTabsView);
    }
  }

  createTabs() {
    const tabsView = document.createElement("tabs-view");
    tabsView.addEventListener("click", (event) => this.handleTabClick(event)); // 탭 클릭 이벤트 등록
    return tabsView;
  }

  renderPosts() {
    const newPostList = document.createElement("div");

    this.posts.forEach((post) => {
      const postItem = this.createPostItem(post);
      newPostList.appendChild(postItem);
    });

    const existingPostList = this.querySelector(".post-list");

    // 기존 post-list가 있으면 교체, 없으면 추가
    if (existingPostList) {
      this.replaceChild(newPostList, existingPostList);
    } else {
      this.appendChild(newPostList);
    }

    newPostList.classList.add("post-list");
  }

  createPostItem(post) {
    const postItem = document.createElement("post-item");
    this.setPostAttributes(postItem, post);
    return postItem;
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
      this.renderPosts();

      const tabsView = this.querySelector("tabs-view");
      if (tabsView) {
        tabsView.updateActiveTab(category);
      }
    }
  }
}
