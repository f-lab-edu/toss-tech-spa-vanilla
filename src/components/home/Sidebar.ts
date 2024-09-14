import BaseComponent from "@/components/BaseComponent/component";

export class Sidebar extends BaseComponent {
  render() {
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
