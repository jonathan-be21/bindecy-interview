<<<<<<< HEAD
/* global Prototype, jQuery3 */
if (typeof Prototype === 'object' && Prototype.BrowserFeatures.ElementExtensions) {
    const disablePrototypeJS = function (method, pluginsToDisable) {
        const handler = function (event) {
            event.target[method] = undefined;
            setTimeout(function () {
                delete event.target[method];
            }, 0);
        };
        pluginsToDisable.each(function (plugin) {
            jQuery3(window).on(method + '.bs.' + plugin, handler);
        });
    };
    const pluginsToDisable = ['collapse', 'dropdown', 'modal', 'tooltip', 'popover', 'tab'];
    disablePrototypeJS('show', pluginsToDisable);
    disablePrototypeJS('hide', pluginsToDisable);
}
=======
version https://git-lfs.github.com/spec/v1
oid sha256:2590e0cc457bf51f74f0ddf76172ad69132d294fe5b51d40d9a3d36bec23d68d
size 717
>>>>>>> 01a95f3 (jenkins pipelines A-B)
