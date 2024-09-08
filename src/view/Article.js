import { formatDate } from "@/utils/dateUtils";
import postService from "@/services/postService";
import BaseComponent from "@/components/BaseComponent/component";
export class BlogArticle extends BaseComponent {
  constructor() {
    super();
    this.post = null;
  }

  async loadData() {
    const postId = this.getDataId();
    const result = await postService.fetchPostById(postId);
    this.post = result[0];
  }

  getPostId() {
    return this.getAttribute("id");
  }

  render() {
    window.requestAnimationFrame(() => {
      this.innerHTML = `
        <page-header></page-header>
        <main class="detail-main-content">
          ${this.renderArticle(this.post)}
        </main>
        <page-footer></page-footer>
      `;
    });
  }

  renderArticle(post) {
    return `
      <article class="detail-post">
      <div class="detail-post__cover">
        <img src="${
          post.thumbnailUrl
        }" alt="Cover Image" class="detail-post__img" />
      </div>
      <h1 class="detail-post__title">${post.title}</h1>
      <div class="detail-post__tags">
        <span class="detail-post__tag">#Server</span>
        <span class="detail-post__tag">#Tech.nic</span>
      </div>
      <div class="detail-post__info">
        <span class="detail-post__author">${post.editorName}</span>
        <span class="detail-post__date">${formatDate(post.publishedTime)}</span>
      </div>
      <div class="detail-post__content"><p>${post.subtitle}</p></div>
      </article>
    `;
  }
}
