import createPages from "@/createPages.js";
import createRouter from "@/router.js";
import registerCustomElements from "@/registerElement.js";

const container = document.getElementById("app");
const pages = createPages(container);
const router = createRouter();

registerCustomElements();

router
  .addRoute("/", pages.home)
  .addRoute("/article/:id", pages.article)
  .setNotFound(pages.notFound)
  .start();
