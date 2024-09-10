import BaseComponent from "@/components/BaseComponent/component";

export class PageFooter extends BaseComponent {
  render() {
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
