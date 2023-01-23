export class GameLogic
{
    constructor(game)
    {
        this.game = game;
        this.x = 0;
        this.y = 0;
    }

    mouseMoved(event)
    {
        this.game.player.x = event.offsetX;
        this.game.player.y = event.offsetY;
        console.log(event);
    }

    logic()
    {

    }

}