<<<<<<< HEAD
/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
const searchBarInput = document.querySelector("#settings-search-bar");
searchBarInput.suggestions = function () {
  return Array.from(document.querySelectorAll(".jenkins-section__item")).map(item => ({
    url: item.querySelector("a").href,
    icon: item.querySelector(".jenkins-section__item__icon svg, .jenkins-section__item__icon img").outerHTML,
    label: item.querySelector("dt").textContent
  })).filter(item => !item.url.endsWith("#"));
};
/******/ })()
;
//# sourceMappingURL=manage-jenkins.js.map
=======
version https://git-lfs.github.com/spec/v1
oid sha256:fc3b786ca7fbd9b1f524ea16ea667df869341059327c87901e6fcdc98d5b1d5c
size 580
>>>>>>> 01a95f3 (jenkins pipelines A-B)
