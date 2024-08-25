import posts from "../mocks/posts";

export class PostView extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render(posts.all);
  }

  render(posts) {
    window.requestAnimationFrame(() => {
      this.innerHTML = `
        <section class="main__posts" >
          <ul class="tabs">
              <li class="tabs__item tabs__item--active" data-category="all">전체</li>
              <li class="tabs__item" data-category="tech">개발</li>
              <li class="tabs__item" data-category="design">디자인</li>
          </ul>
          ${posts
            .map(
              (post) => `
              <a href="/" class="post-link">
                  <article class="post">
                      <div class="post__content">
                          <h2 class="post__title">${post.title}</h2>
                          <p class="post__description">${post.subtitle}</p>
                          <p class="post__info">${post.publishedTime} · ${post.editorName}</p>
                      </div>
                      <div class="post__img-wrapper">
                          <img src="${post.thumbnailUrl}" alt="${post.title}" class="post__img" />
                      </div>
                  </article>
              </a>
          `
            )
            .join("")}
        </section>
      `;
    });
  }
}
