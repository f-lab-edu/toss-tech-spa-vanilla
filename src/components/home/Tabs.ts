import BaseComponent from "@/components/BaseComponent/component";
import { Category } from "@/models/Posts";

export class Tabs extends BaseComponent {
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
      const target = event.target as HTMLElement;
      const category = target.dataset.category as Category;
      if (category) {
        this.updateActiveTab(category);
      }
    });
  }

  updateActiveTab(category: Category) {
    const selectedTab = this.querySelector(`[data-category="${category}"]`);
    const tabs = this.querySelectorAll(".tabs__item");
    tabs.forEach((tab) => tab.classList.remove("tabs__item--active"));
    if (selectedTab) {
      selectedTab.classList.add("tabs__item--active");
    }
  }
}
