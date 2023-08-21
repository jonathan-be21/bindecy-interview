<<<<<<< HEAD
/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
// Converts a page's section headings into clickable tabs, see 'About Jenkins' page for example
const tabPanes = document.querySelectorAll(".jenkins-tab-pane");
const content = document.querySelector("#main-panel");

// Hide tab panes
tabPanes.forEach(tabPane => {
  tabPane.style.display = "none";
});

// Show the first
tabPanes[0].style.display = "block";
const tabBar = document.createElement("div");
tabBar.className = "tabBar";

// Add tabs for each tab pane
tabPanes.forEach((tabPane, index) => {
  const tabPaneTitle = tabPane.querySelector(".jenkins-tab-pane__title");
  tabPaneTitle.style.display = "none";
  const tab = document.createElement("div");
  tab.className = "tab";
  if (index === 0) {
    tab.classList.add("active");
  }
  tab.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelectorAll(".tab").forEach(tab => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    tabPanes.forEach(tabPane => {
      tabPane.style.display = "none";
    });
    tabPanes[index].style.display = "block";
  });
  const tabLink = document.createElement("a");
  tabLink.setAttribute("href", "#");
  tabLink.innerText = tabPaneTitle.textContent;
  tab.append(tabLink);
  tabBar.append(tab);
});
content.insertBefore(tabBar, tabPanes[0]);
/******/ })()
;
//# sourceMappingURL=section-to-tabs.js.map
=======
version https://git-lfs.github.com/spec/v1
oid sha256:11f4083d8a3b577bd389957ad932dfd82c62f10f69ee2e8e58980d9efef1f45b
size 1437
>>>>>>> 01a95f3 (jenkins pipelines A-B)
