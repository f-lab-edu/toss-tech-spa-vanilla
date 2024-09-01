export class BlogArticle extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    window.requestAnimationFrame(() => {
      this.innerHTML = `
      <page-header></page-header>
      <main class="detail-main-content">
        <article class="detail-post">
          <div class="detail-post__cover">
            <img
              src="https://static.toss.im/career-resource/0813_%ED%85%8C%ED%81%AC%EB%B8%94%EB%A1%9C%EA%B7%B8_%EC%8D%B8%EB%84%A4%EC%9D%BC2.png"
              alt="Cover Image"
              class="detail-post__img"
            />
          </div>
          <h1 class="detail-post__title">
            다이내믹 스크래핑과 전월세대출 이동제의 실행
          </h1>
          <div class="detail-post__tags">
            <span class="detail-post__tag">#Server</span>
            <span class="detail-post__tag">#Tech.nic</span>
          </div>
          <div class="detail-post__info">
            <span class="detail-post__author">조민국</span>
            <span class="detail-post__date">2024년 8월 21일</span>
          </div>
          <div class="detail-post__content">
            <p>
              토스뱅크는 기술로 은행산업의 변화를 만들어 내기 위해 끊임없는
              도전을 이어왔어요. 출범 단 2년 반 만에 1,000만 은행이 될 수 있었던
              것은 이러한 기술혁신을 위한 시도가 있었기 때문인데요. 지난 8월 9일
              토스뱅크의 첫번째 테크 밋업 Tech.nic에서 토스뱅크가 다른 은행과는
              다른 기술 환경을 갖추기까지의 과정, 마주한 문제를 임팩트 있게
              해결해 나간 노하우를 소개했습니다. 토스뱅크만의 일하는 방식과 성공
              방정식, 그리고 앞으로의 도전 방향성까지 "은행을 바꾸는 은행"이
              되기 위한 토스뱅크만의 과정이 궁금하시다면 앞으로 Tech.nic에서
              소개드릴 이야기에 집중해주세요! 토스뱅크 전월세대출과 이동제를
              개발하면서 마주했던 어려움과 해결방법, 그리고 토스뱅크만의 새로운
              운영툴을 소개드릴게요. 우선 시작하기에 앞서, 전월세대출을 간단히
              설명드릴게요. 전월세대출은 한국주택금융공사(HF), 서울보증보험(SGI)
            </p>
          </div>
        </article>
      </main>
      <page-footer></page-footer>
    `;
    });
  }
}
