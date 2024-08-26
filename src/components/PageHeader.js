export class PageHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    window.requestAnimationFrame(() => {
      this.innerHTML = `
        <header class="header">
          <a href="/" class="header__logo-link">
            <img src="/logo.svg" alt="Logo" class="header__logo" />
          </a>
          <ul class="header__nav">
            <li class="header__item">
              <a class="header__link" href="SLASH">SLASH</a>
            </li>
            <li class="header__item">
              <a class="header__link" href="simplicity">SIMPLICITY</a>
            </li>
            <li class="header__item">
              <button class="header__button header__button--subscribe">
                구독하기
              </button>
            </li>
            <li class="header__item">
              <button class="header__button header__button--hire">
                채용 바로가기
              </button>
            </li>
          </ul>
        </header>
      `;
    });
  }
}
customElements.define("page-header", PageHeader);
