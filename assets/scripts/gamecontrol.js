// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        coagulo1: {
            default: null,
            type: cc.Node,
        },
        coagulo2: {
            default: null,
            type: cc.Node,
        },
        blood1: {
            default: null,
            type: cc.Node,
        },
        blood2: {
            default: null,
            type: cc.Node,
        },
        life1: {
            default: null,
            type: cc.Node
        },
        life2: {
            default: null,
            type: cc.Node
        },
        life3: {
            default: null,
            type: cc.Node
        },
        youlose: {
            default: null,
            type: cc.Node
        },
        lifes: {
            default: 3,
            type: Number
        },
        goals: {
            default: 15,
            type: Number
        }
    },

    timer: Number,
    active: Boolean,

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.game = this;
        let physicsManager = cc.director.getPhysicsManager();
        physicsManager.enabled = true;
        physicsManager.gravity = cc.v2 (0, -1000);
    },

    start () {
        timer = 0;
        active = true;
    },

    update (dt) {
        timer++;
        console.log(this.goals)
        
        switch(this.lifes) {
            case 2:
                this.life3.destroy()
                break;
            case 1:
                this.life2.destroy()
                break;
            case 0:
                this.life1.destroy()
                break;
        }

        if (this.lifes <= 0) {
            active = false;
            this.youlose.opacity = 255
        }

        if (this.goals <= 0) {
            active = false;
            cc.director.loadScene("finished1");
        }
    
        if (timer > 100 && active) {
            var t = between(1,4);
            var node = cc.instantiate(this.coagulo1);

            switch (t) {
                case 2:
                    node = cc.instantiate(this.coagulo2);
                    break;
                case 3:
                    node = cc.instantiate(this.blood1);
                    break;
                case 4:
                    node = cc.instantiate(this.blood2);
                    break;
            }

            timer -= 100;

            var scene = cc.director.getScene();

            node.parent = scene;
            node.width = 170;
            node.height = 170;
            let xNode = between(100, 800);
            node.setPosition(xNode,1100);
        }
    }, 
});

function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min + 1) + min
    )
  }
