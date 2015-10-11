var moment = require("moment");

module.exports = function() {
    this.monthColor = [ "#FFD700", "#5E2D79", "#B22222", "#FFBBFF", "#278524", "#80461B", "#C87533", "#C0C0C0", "#FFFF00", "#FF7518", "#FFFFFF", "#0EBFE9"];
    this.createColor = function() {
        return this.monthColor[moment().format("MM") - 1];
    };
};