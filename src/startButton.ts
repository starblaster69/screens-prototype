import * as PIXI from 'pixi.js'
import { Game } from './game'
import { StartScreen } from './startScreen'

export class StartButton extends PIXI.Text {
    game: Game
    startScreen: StartScreen
    isdown: boolean
    isOver: any

    constructor(game: Game, startScreen: StartScreen, style: PIXI.TextStyle){
        super(`START`, style)
        this.game = game
        this.startScreen = startScreen
        this.x = 735
        this.y = 465

        this.interactive = true;
        this.buttonMode = true;

        this
            .on('pointerdown', this.onButtonDown)
            .on('pointerup', this.onButtonUp)
            .on('pointerupoutside', this.onButtonUp)
            .on('pointerover', this.onButtonOver)
            .on('pointerout', this.onButtonOut);
    }

    private onButtonDown() {
        this.isdown = true;
        this.startScreen.startStyle.fill = ['#149c17', '#3dff4f']
    }
    
    private onButtonUp() {
        this.isdown = false;
        if (this.isOver) {
            this.startScreen.startStyle.fill = ['#1e00ff', '#4356e2']
            this.game.loadGame()
        } else {
            this.startScreen.startStyle.fill = ['#1e00ff', '#4356e2']
            return;
        }
    }
    
    private onButtonOver() {
        this.isOver = true;
        this.startScreen.startStyle.fill = ['#9c1414', '#ff3d3d']
    }
    
    private onButtonOut() {
        this.isOver = false;
        if (this.isdown) {
            return;
        } this.startScreen.startStyle.fill = ['#1e00ff', '#4356e2']
        
    }
}