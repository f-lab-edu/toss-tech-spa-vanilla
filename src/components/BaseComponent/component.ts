import CustomError from "@/utils/CustomError";

class BaseComponent extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    await this.loadData();
    this.render();
    this.setupListener();
  }

  async loadData() {}

  // 필수 구현
  render() {
    throw new CustomError("render() must be implemented by subclass");
  }

  setupListener() {}

  getDataId() {
    return this.getAttribute("id");
  }
}

export default BaseComponent;
