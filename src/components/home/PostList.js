import postService from "@/services/postService";
import { formatDate } from "@/utils/dateUtils";
import BaseComponent from "@/components/BaseComponent/component";

export class PostList extends BaseComponent {
  constructor() {
    super();
    this.posts = [];
    this.activeTab = "all";
  }

  async loadData() {
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
    tabsView.addEventListener("click", (event) => this.handleTabClick(event));
    return tabsView;
  }

  renderPosts() {
    const newPostList = document.createElement("div");

    this.posts.forEach((post) => {
      const postItem = this.createPostItem(post);
      newPostList.appendChild(postItem);
    });

    const existingPostList = this.querySelector(".post-list");

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
      await this.loadData();
      this.renderPosts();
    }
  }
}
