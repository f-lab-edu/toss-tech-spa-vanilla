export class BlogHome extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
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
