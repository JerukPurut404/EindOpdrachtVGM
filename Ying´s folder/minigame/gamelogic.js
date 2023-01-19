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
        this.game.x = event.offsetX;
        this.game.y = event.offsetY;
    }

    logic()
    {

    }

}