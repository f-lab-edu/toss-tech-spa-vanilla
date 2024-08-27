export class PageFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <div class="footer__links">
          <a href="#" class="footer__link">홈페이지</a>
          <a href="#" class="footer__link">회사소개</a>
          <a href="#" class="footer__link">채용</a>
          <a href="#" class="footer__link">고객센터</a>
        </div>
      </footer>
    `;
  }
}

customElements.define("page-footer", PageFooter);
