// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

var game = require("gamecontrol");

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    onBeginContact(contact, selfCollider, otherCollider) {
        if (otherCollider.node.name == 'endbox') {
            cc.director.getScene().getChildByName("gamecontrol").game.lifes--;
        } else if (otherCollider.node.name == 'colector') {
            cc.director.getScene().getChildByName("gamecontrol").game.goals--;
        }
        this.node.destroy();
    },
    // update (dt) {},
});
