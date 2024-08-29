import posts from "@/mocks/posts.js";

export class PostList extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render(posts.all);
  }

  render(posts) {
    window.requestAnimationFrame(() => {
      this.innerHTML = `
        <tabs-view></tabs-view>
        ${posts.map(post => `
          <post-item
            href="/article/${post.id}"
            title="${post.title}"
            subtitle="${post.subtitle}"
            publishedTime="${post.publishedTime}"
            editorName="${post.editorName}"
            thumbnailUrl="${post.thumbnailUrl}"
          ></post-item>
        `).join('')}
        `;    
    });
  }
}