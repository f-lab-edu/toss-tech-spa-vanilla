export default (container) => {
    const home = () => {
      const homeElement = document.createElement("blog-home");
      container.appendChild(homeElement);
    };
  
    const article = (params) => {
      const { id } = params;
      const articleElement = document.createElement("blog-article");
      container.appendChild(articleElement);
    };
  
    const notFound = () => {
        container.textContent = 'Page Not Found!';
      };

    return {
      home,
      article,
      notFound
    };
  };
  