<<<<<<< HEAD
/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
const imageWidth = document.getElementById("main-panel").offsetWidth - 30;
const imageHeight = 500;
const graphHost = document.querySelector("#graph-host");
const timespanSelect = document.querySelector("#timespan-select");

// Set the aspect ratio of the graph host so it doesn't resize when new graphs load
graphHost.style.aspectRatio = `${imageWidth} / ${imageHeight}`;

// On select change load a new graph
timespanSelect.addEventListener("change", () => {
  const rootURL = document.head.dataset.rooturl;
  const type = timespanSelect.value;
  graphHost.innerHTML = `<img src="${rootURL}/extensionList/hudson.diagnosis.MemoryUsageMonitor/0/heap/graph?type=${type}&width=${imageWidth}&height=${imageHeight}" srcset="${rootURL}/extensionList/hudson.diagnosis.MemoryUsageMonitor/0/heap/graph?type=${type}&width=${imageWidth}&height=${imageHeight}&scale=2 2x" loading="lazy" style="width: 100%" alt="Memory usage graph"/>`;
});

// Dispatch a change event to insert a graph on page load
timespanSelect.dispatchEvent(new Event("change"));
/******/ })()
;
//# sourceMappingURL=system-information.js.map
=======
version https://git-lfs.github.com/spec/v1
oid sha256:539667f65e699d2dbd99143677f9ea4bae51f7e6e7d7a8a20375ce9577d19432
size 1174
>>>>>>> 01a95f3 (jenkins pipelines A-B)
