import createPages from "@/createPages";
import registerCustomElements from "@/registerElement";
import createRouter from "@/router";
import CustomError from "./utils/CustomError";

const container = document.getElementById("app");
if (!container) {
  throw new CustomError("App 컨테이너를 찾을 수 없습니다");
}
const pages = createPages(container);
const router = createRouter();

registerCustomElements();

router
  .addRoute("/", pages.home)
  .addRoute("/article/:id", pages.article)
  .setNotFound(pages.notFound)
  .start();
