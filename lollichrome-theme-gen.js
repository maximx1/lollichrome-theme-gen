var defaultPlugin = require("./src/plugins/defaultMonthlyPlugin.js");

module.exports = function(plugin) {
    return (function() {
        var meta = document.createElement('meta');
        meta.name = "theme-color";
        meta.content = typeof plugin !== 'undefined' ? plugin.createColor() : (new defaultPlugin().createColor());
        document.getElementsByTagName('head')[0].appendChild(meta);
    })();
};