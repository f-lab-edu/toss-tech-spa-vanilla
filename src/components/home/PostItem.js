export class PostItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="${this.getAttribute('href')}" class="post-link">
        <article class="post">
          <div class="post__content">
            <h2 class="post__title">${this.getAttribute('title')}</h2>
            <p class="post__description">${this.getAttribute('subtitle')}</p>
            <p class="post__info">${this.getAttribute('publishedTime')} · ${this.getAttribute('editorName')}</p>
          </div>
          <div class="post__img-wrapper">
            <img src="${this.getAttribute('thumbnailUrl')}" alt="${this.getAttribute('title')}" class="post__img" />
          </div>
        </article>
      </a>
    `;
  }
}

