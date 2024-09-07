export default (container) => {
  const replaceContainerContent = (element) => {
    container.innerHTML = "";
    container.appendChild(element);
  };

  const home = () => {
    const homeElement = document.createElement("blog-home");

    replaceContainerContent(homeElement);
  };

  const article = (params) => {
    const { id } = params;

    const articleElementNode = document.createElement("blog-article");
    articleElementNode.setAttribute("id", id);

    replaceContainerContent(articleElementNode);
  };

  const notFound = () => {
    const notFoundElement = document.createElement("div");
    notFoundElement.innerHTML = "Page Not Found!";

    replaceContainerContent(notFoundElement);
  };

  return {
    home,
    article,
    notFound,
  };
};
