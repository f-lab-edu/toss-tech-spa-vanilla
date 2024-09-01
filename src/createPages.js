export default (container) => {
  const clearContainer = () => {
    container.innerHTML = "";
  };

  const home = () => {
    clearContainer();
    const homeElement = document.createElement("blog-home");
    container.appendChild(homeElement);
  };

  const article = (params) => {
    clearContainer();
    const { id } = params;
    const articleElement = document.createElement("blog-article");
    articleElement.setAttribute("id", id);
    container.appendChild(articleElement);
  };

  const notFound = () => {
    clearContainer();
    container.textContent = "Page Not Found!";
  };

  return {
    home,
    article,
    notFound,
  };
};
