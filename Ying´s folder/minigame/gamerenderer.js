
export class GameRenderer
{
    constructor(game)
    {
        this.game = game;
        this.canvas = document.getElementById("duckcanvas");
        this.g = this.canvas.getContext("2d");
    }
    
    render()
    {
    let g = this.g;

        g.fillstyle = "#2e6ede";
        g.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

        g.fillstyle = "#leca07";
        let player = this.game.player;
        g.fillRect(player.x, player.y, player.w, player.h);
    }
}