// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad () {
        cc.game.addPersistRootNode(this.node);
    },

    loadMenu(){
        cc.director.loadScene("menu");
    },

    loadCredits(){
        cc.director.loadScene("credits");
    },

    loadCut1(){
        cc.director.loadScene("cut1");
    },

    loadGame(){
        cc.director.loadScene("game");
    },

    loadOpening(){
        cc.director.loadScene("opening");
    }
});
