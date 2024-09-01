export class Tabs extends HTMLElement {
  connectedCallback() {
    this.render();
    this.setupListener();
  }

  render() {
    this.innerHTML = `
      <ul class="tabs">
        <li class="tabs__item tabs__item--active" data-category="all">전체</li>
        <li class="tabs__item" data-category="tech">개발</li>
        <li class="tabs__item" data-category="design">디자인</li>
      </ul>
    `;
  }

  setupListener() {
    this.addEventListener("click", (event) => {
      const category = event.target.dataset.category;
      if (category) {
        this.updateActiveTab(category);
      }
    });
  }

  updateActiveTab(category) {
    const selectedTab = this.querySelector(`[data-category="${category}"]`);
    const tabs = this.querySelectorAll(".tabs__item");
    tabs.forEach((tab) => tab.classList.remove("tabs__item--active"));
    if (selectedTab) {
      selectedTab.classList.add("tabs__item--active");
    }
  }
}
