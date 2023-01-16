import { GameRender } from "./gamerender.js";
import { GameLogic } from "./gamelogic.js";

class Game
{
    constructor()
    {
        this.logic = new GameLogic(this);
        this.render = new GameRender(this);
    }

    init()
    {   
        let scope = this;
        this.renderer.c.addEventListener("mousemove", function(event) {scope.logic.mouseMoved(event); })
        setInterval(function () {scope.doGameFrame() }, 33)
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
 