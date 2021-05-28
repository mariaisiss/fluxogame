// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
            active: false
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.colector = this;
        this.node.on('touchstart', function () {
            this.opacity = 255;
        }, this.node)

        this.node.on('touchend', function () {
            this.opacity = 160;
        }, this.node)

        this.node.on('touchmove', function (event) {
            this.opacity = 255;
            var delta = event.touch.getDelta();
            this.x += delta.x;
        }, this.node)
    },

    start () {

    },

    // update (dt) {

    // },
});
