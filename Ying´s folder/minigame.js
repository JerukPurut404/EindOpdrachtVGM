import { GameRender } from "./gamerender";
import { GameLogic } from "./gamelogic";

class game
{
    constructor()
    {
        this.canvas = document.getElementById("canvas");
        this.g = canvas.getContext("2d");
    }
    
    render()
    {
        let g = this.g;

        g.fillstyle = "#2e6ede";
        g.fillrect(0, 0, canvas.clientWidth, canvas.clientHeight)

        g.fillstyle = "#leca07";
        g.fillrect(0, 0, 10, 10)
    }
}

let game = new game()
game.render();
