const ROUTE_PARAMETER_REGEXP = /:(\w+)/g;
const URL_FRAGMENT_REGEXP = "([^\\/]+)";
const NAV_A_SELECTOR = "a[data-navigation]";

export default function createRouter() {
  const routes = [];
  let notFoundHandler = () => {};

  const router = {
    addRoute(path, callback) {
      const { testRegExp, params } = createRegExpFromPath(path);
      routes.push({ testRegExp, callback, params });
      return this;
    },

    setNotFound(callback) {
      notFoundHandler = callback;
      return this;
    },

    navigate(path) {
      window.history.pushState(null, null, path);
      this.checkRoutes();
    },

    start() {
      this.checkRoutes();

      document.body.addEventListener("click", (event) => {
        const targetLink = event.target.closest(NAV_A_SELECTOR);
        if (targetLink) {
          event.preventDefault();
          this.navigate(targetLink.href);
        }
      });

      window.addEventListener("popstate", () => {
        this.checkRoutes();
      });
    },

    checkRoutes() {
      const currentPathname = window.location.pathname;

      const matchingRoute = routes.find((route) =>
        route.testRegExp.test(currentPathname)
      );

      if (matchingRoute) {
        const urlParams = extractUrlParams(matchingRoute, currentPathname);
        matchingRoute.callback(urlParams);
      } else {
        notFoundHandler();
      }
    },
  };

  return router;
}

function createRegExpFromPath(path) {
  const params = [];
  const regexPattern = path
    .replace(/\//g, "\\/")
    .replace(ROUTE_PARAMETER_REGEXP, (_, paramName) => {
      params.push(paramName);
      return URL_FRAGMENT_REGEXP;
    });
  return {
    testRegExp: new RegExp(`^${regexPattern}$`),
    params,
  };
}

function extractUrlParams(route, pathname) {
  const params = {};
  const matches = pathname.match(route.testRegExp);

  if (matches) {
    matches.slice(1).forEach((value, index) => {
      params[route.params[index]] = value;
    });
  }

  return params;
}
