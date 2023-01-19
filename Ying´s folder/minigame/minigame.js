import { GameRender } from "./gamerenderer";
import { GameLogic } from "./gamelogic.js";
import { Rect } from "./rect.js";

class Game
{
    constructor()
    {
        this.logic = new GameLogic(this);
        this.render = new GameRender(this);
        this.player = new Rect(0, 0, 24, 24);
    }

    init()
    {   
        let scope = this;


        this.renderer.c.addEventListener("mousemove", function(event) {scope.logic.mouseMoved(event); })
        setInterval(function () {scope.doGameFrame() }, 33)
    }
    mouseMoved(event)
    {

    }

    DoGameFrame()
    {
        this.logic.logic();
        this.render.render();
    }

    Background()
    {
        

    }
}

let game = new Game()
game.init();
//game.render();
 