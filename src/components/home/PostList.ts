import postService from "@/services/postService";
import { formatDate } from "@/utils/dateUtils";
import BaseComponent from "@/components/BaseComponent/component";
import { Category, Post } from "@/models/Posts";

export class PostList extends BaseComponent {
  posts: Post[];
  activeTab: Category;

  constructor() {
    super();
    this.posts = [];
    this.activeTab = "all";
  }

  async loadData() {
    const posts = await postService.fetchPosts(this.activeTab);
    if (posts !== null) {
      this.posts = posts;
    } else {
      this.posts = []; // null일 경우 빈 배열 할당
    }
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

  createPostItem(post: Post) {
    const postItem = document.createElement("post-item");
    this.setPostAttributes(postItem, post);
    return postItem;
  }

  setPostAttributes(postItem: HTMLElement, post: Post) {
    postItem.setAttribute("href", `/article/${post.id}`);
    postItem.setAttribute("title", post.title);
    postItem.setAttribute("subtitle", post.subtitle);
    postItem.setAttribute("publishedTime", formatDate(post.publishedTime));
    postItem.setAttribute("editorName", post.editorName);
    postItem.setAttribute("thumbnailUrl", post.thumbnailUrl);
  }

  async handleTabClick(event: Event) {
    const target = event.target as HTMLElement;
    if (target instanceof HTMLElement) {
      const category = target.dataset.category as Category;
      const isDifferentCategory = category && category !== this.activeTab;

      if (isDifferentCategory) {
        this.activeTab = category;
        await this.loadData();
        this.renderPosts();
      }
    }
  }
}
