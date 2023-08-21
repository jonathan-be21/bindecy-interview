<<<<<<< HEAD
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/main/js/util/dom.js
function createElementFromHtml(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}
function toId(string) {
  return string.trim().replace(/[\W_]+/g, "-").toLowerCase();
}
;// CONCATENATED MODULE: ./src/main/js/pages/dashboard/index.js

document.querySelector("#button-icon-legend").addEventListener("click", () => {
  const template = document.querySelector("#template-icon-legend");
  const title = template.getAttribute("data-title");
  const content = createElementFromHtml("<div>" + template.innerHTML + "</div>");
  dialog.modal(content, {
    maxWidth: "550px",
    title: title
  });
});
/******/ })()
;
//# sourceMappingURL=dashboard.js.map
=======
version https://git-lfs.github.com/spec/v1
oid sha256:f58adfad7f2b6b19ed0699b491ef19de135755dfc9a3253633ebeebdeba36a66
size 891
>>>>>>> 01a95f3 (jenkins pipelines A-B)
