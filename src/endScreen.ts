import * as PIXI from 'pixi.js'
import { Game } from './game'

export class EndScreen extends PIXI.Sprite{
    private graphics = new PIXI.Graphics
    private game : Game
    
    private titleStyle = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 48,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fill: ['#ffffff', '#00ff99'], // gradient
        stroke: '#4a1850',
        strokeThickness: 5,
        dropShadow: true,
        dropShadowColor: '#000000',
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
        lineJoin: 'round',
    });

    constructor(game: Game){
        super()
        this.game = game

        // backgroudn color
        this.graphics.beginFill(0xb25ac5);
        this.graphics.drawRect(0, 0, 1600, 900);
        this.graphics.endFill();

        // title box
        this.graphics.lineStyle(5, 0x000000, 1);
        this.graphics.beginFill(0x650A5A, 0.25);
        this.graphics.drawRect(400, 50, 800, 100);
        this.graphics.endFill();

        this.game.pixi.stage.addChild(this.graphics);

        // create game title
        let titleText = new PIXI.Text(`CONGRATULATIONS: YOU WIN!`, this.titleStyle)
        titleText.x = 430
        titleText.y = 70
        this.game.pixi.stage.addChild(titleText)
    }
}