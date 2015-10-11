var proxyquire = require('proxyquire');

describe("DefaultMonthlyPlugin", function() {
    describe("#createColor()", function() {
        it("should return a color code for January", function() {
            var plugin = new (createMockedPlugin("01"))();
            expect(plugin.createColor()).to.equal("#FFD700");
        });
        it("should return a color code for February", function() {
            var plugin = new (createMockedPlugin("02"))();
            expect(plugin.createColor()).to.equal("#5E2D79");
        });
        it("should return a color code for March", function() {
            var plugin = new (createMockedPlugin("03"))();
            expect(plugin.createColor()).to.equal("#B22222");
        });
        it("should return a color code for April", function() {
            var plugin = new (createMockedPlugin("04"))();
            expect(plugin.createColor()).to.equal("#FFBBFF");
        });
        it("should return a color code for May", function() {
            var plugin = new (createMockedPlugin("05"))();
            expect(plugin.createColor()).to.equal("#278524");
        });
        it("should return a color code for June", function() {
            var plugin = new (createMockedPlugin("06"))();
            expect(plugin.createColor()).to.equal("#80461B");
        });
        it("should return a color code for July", function() {
            var plugin = new (createMockedPlugin("07"))();
            expect(plugin.createColor()).to.equal("#C87533");
        });
        it("should return a color code for August", function() {
            var plugin = new (createMockedPlugin("08"))();
            expect(plugin.createColor()).to.equal("#C0C0C0");
        });
        it("should return a color code for September", function() {
            var plugin = new (createMockedPlugin("09"))();
            expect(plugin.createColor()).to.equal("#FFFF00");
        });
        it("should return a color code for October", function() {
            var plugin = new (createMockedPlugin("10"))();
            expect(plugin.createColor()).to.equal("#FF7518");
        });
        it("should return a color code for November", function() {
            var plugin = new (createMockedPlugin("11"))();
            expect(plugin.createColor()).to.equal("#FFFFFF");
        });
        it("should return a color code for December", function() {
            var plugin = new (createMockedPlugin("12"))();
            expect(plugin.createColor()).to.equal("#0EBFE9");
        });
    });
});
    
var createMockedPlugin = function(response) {
    var moment = function() {
        return { format: function(fmtStr) { return response } };
    }
    return proxyquire('../../src/plugins/defaultMonthlyPlugin.js', { "moment": moment });
};