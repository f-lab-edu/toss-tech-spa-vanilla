import posts from "../mocks/posts";

export class BlogHome extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <page-header></page-header>
      <main class="main">
        <div class="main__banner">
          <img src="/toss-tech-banner2_.webp" alt="main__banner" class="main__banner__img">
        </div>
        <div class="main__contents">
          <post-list class="main__posts"></post-list>
          <side-bar class="main__sidebar"></side-bar>
        </div>
      </main>
      <page-footer></page-footer>
    `;
  }
}

class PostList extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render(posts.all);
  }

  render(posts) {
    window.requestAnimationFrame(() => {
      this.innerHTML = `
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
      `;
    });
  }
}

class Sidebar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    window.requestAnimationFrame(() => {
      this.innerHTML = `
        <div class="sidebar__section sidebar__popular-posts">
          <h3 class="sidebar__title">인기있는 글</h3>
          <ul class="sidebar__list">
            <li class="sidebar__item">
              <a href="#">
                <span class="sidebar__item-title">Node.js 라이브러리 배포 파이프라인에 플러그인 시스템 도입기</span>
                <p class="sidebar__author">장지훈</p>
              </a>
            </li>
            <li class="sidebar__item">
              <a href="#">
                <span class="sidebar__item-title">레거시 제품을 버리고 CS 효율 높이기</span>
                <p class="sidebar__author">박성경</p>
              </a>
            </li>
            <li class="sidebar__item">
              <a href="#">
                <span class="sidebar__item-title">토스가 꿈꾸는 React Native 기술의 미래</span>
                <p class="sidebar__author">박서진</p>
              </a>
            </li>
          </ul>
        </div>

        <div class="sidebar__section sidebar__tags">
          <h3 class="sidebar__title">태그</h3>
          <ul class="sidebar__tags-list">
            <li class="sidebar__tag-item"><a href="#">Frontend</a></li>
            <li class="sidebar__tag-item"><a href="#">Server</a></li>
            <li class="sidebar__tag-item"><a href="#">Product Design</a></li>
          </ul>
        </div>
      `;
    });
  }
}

customElements.define("post-list", PostList);
customElements.define("side-bar", Sidebar);
customElements.define("blog-home", BlogHome);

