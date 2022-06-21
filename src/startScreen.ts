import * as PIXI from 'pixi.js'
import { Game } from './game'
import { StartButton } from './startButton'

export class StartScreen extends PIXI.Sprite{
    private graphics = new PIXI.Graphics
    private startButton : StartButton
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

    public startStyle = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 36,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fill: ['#1e00ff', '#4356e2'], // gradient
        stroke: '#222222',
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
        this.graphics.beginFill(0xf6baf0);
        this.graphics.drawRect(0, 0, 1600, 900);
        this.graphics.endFill();

        // title box
        this.graphics.lineStyle(5, 0x000000, 1);
        this.graphics.beginFill(0x650A5A, 0.25);
        this.graphics.drawRect(600, 50, 400, 100);
        this.graphics.endFill();

        // start game button
        this.graphics.lineStyle(5, 0x000000, 1);
        this.graphics.beginFill(0x650A5A, 0.25);
        this.graphics.drawRoundedRect(700, 440, 200, 100, 16);
        this.graphics.endFill();

        this.game.pixi.stage.addChild(this.graphics);
        
        // create game title
        let titleText = new PIXI.Text(`MEMORY GAME`, this.titleStyle)
        titleText.x = 610
        titleText.y = 70
        this.game.pixi.stage.addChild(titleText)

        // create start button text
        this.startButton = new StartButton(this.game, this, this.startStyle)
        this.game.pixi.stage.addChild(this.startButton)
    }

    
}