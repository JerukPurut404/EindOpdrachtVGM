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
        this.g.clearRect(0,0, this.canvas.clientWidth, this.canvas.clientHeight);

    }
    renderBox(){
        let g = this.ctx;
        this.g.fillStyle = "#000000";
        let player = this.game.player;
        console.log(player);
        this.g.fillRect(player.x, player.y, player.w, player.h);
    }
    
}