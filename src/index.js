import "./components/Footer.js";
import "./components/Header.js";
import "./view/Article.js";
import "./view/Home.js";

import createPages from "./pages.js";
import createRouter from "./router.js";

const container = document.getElementById("app");
const pages = createPages(container);
const router = createRouter();

router
  .addRoute("/", pages.home)
  .addRoute("/article/:id", pages.article)
  .setNotFound(pages.notFound)
  .start();