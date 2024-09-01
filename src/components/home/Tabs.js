export class Tabs extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render(){
      this.innerHTML = `
      <ul class="tabs">
        <li class="tabs__item tabs__item--active" data-category="all">전체</li>
        <li class="tabs__item" data-category="tech">개발</li>
        <li class="tabs__item" data-category="design">디자인</li>
      </ul>
    `;
    }
  }
