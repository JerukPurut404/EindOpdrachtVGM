
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

        this.g.fillStyle = "#2e6ede";
        this.g.fillRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);

        this.g.fillStyle = "#1eca07";
        let player = this.game.player;
        this.g.fillRect(player.x, player.y, player.w, player.h);
    }
}