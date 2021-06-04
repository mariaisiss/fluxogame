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
            type: cc.Prefab,
        },
        coagulo2: {
            default: null,
            type: cc.Prefab,
        },
        blood1: {
            default: null,
            type: cc.Prefab,
        },
        blood2: {
            default: null,
            type: cc.Prefab,
        },
        colector: {
            default: null,
            type: cc.Node
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
        },
        timer: {
            default: 0,
            type: cc.Integer
        },
        active: {
            default: true,
            type: Boolean
        },
        typeNum: {
            default: 1,
            type: Number
        },
        decrease: {
            default: false,
            type: Boolean
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.game = this;
        let physicsManager = cc.director.getPhysicsManager();
        physicsManager.enabled = true;
        physicsManager.gravity = cc.v2 (0, -1000);
    },

    start () {
    },

    update (dt) {
        this.timer++;
        
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
            this.active = false;
            this.youlose.opacity = 255
        }

        if (this.goals <= 0) {
            this.active = false;
            cc.director.loadScene("finished1");
        }
    
        if (this.timer > 100 && this.active) {
            var corb = cc.instantiate(this.coagulo1);
            
            if (this.typeNum == 4) {
                this.decrease = true;
            } else if (this.typeNum == 1) {
                this.decrease = false;
            }

            switch (this.typeNum) {
                case 2:
                    corb = cc.instantiate(this.coagulo2);
                    break;
                case 3:
                    corb = cc.instantiate(this.blood1);
                    break;
                case 4:
                    corb = cc.instantiate(this.blood2);
                    break;
            }

            corb.parent = this.colector.parent;
            corb.width = 170;
            corb.height = 170;
            let xPosition = 0;
            console.log(this.colector.x);
            console.log((480 - this.colector.x) < (this.colector.x + 480));
            if ((480 - this.colector.x) < (this.colector.x + 480)) {
                xPosition = this.colector.x - 190;
            } else {
                xPosition = this.colector.x + 190;
            }
            corb.setPosition(xPosition, 1100);

            this.timer -= 100;
            if (this.decrease) {
                this.typeNum--;
            } else {
                this.typeNum++;
            }
        }
    }, 
});
