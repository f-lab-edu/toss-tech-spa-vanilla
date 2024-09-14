import createPages from "@/createPages";
import createRouter from "@/router";
import registerCustomElements from "@/registerElement";

const container = document.getElementById("app") as HTMLElement;
const pages = createPages(container);
const router = createRouter();

registerCustomElements();

router
  .addRoute("/", pages.home)
  .addRoute("/article/:id", pages.article)
  .setNotFound(pages.notFound)
  .start();
