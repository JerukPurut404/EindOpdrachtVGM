export class GameRender
{
    constructor(game)
    {
        this.game = game;
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