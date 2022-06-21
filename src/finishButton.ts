import * as PIXI from 'pixi.js'
import { Game } from './game'
import { GameScreen } from './gameScreen'

export class FinishButton extends PIXI.Text {
    game: Game
    gameScreen: GameScreen
    isdown: boolean
    isOver: any

    constructor(game: Game, gameScreen: GameScreen, style: PIXI.TextStyle){
        super(`FINISH`, style)
        this.game = game
        this.gameScreen = gameScreen
        this.x = 735
        this.y = 750

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
        this.gameScreen.startStyle.fill = ['#149c17', '#3dff4f']
    }
    
    private onButtonUp() {
        this.isdown = false;
        if (this.isOver) {
            this.gameScreen.startStyle.fill = ['#1e00ff', '#4356e2']
            this.game.loadGame()
        } else {
            this.gameScreen.startStyle.fill = ['#1e00ff', '#4356e2']
            return;
        }
    }
    
    private onButtonOver() {
        this.isOver = true;
        this.gameScreen.startStyle.fill = ['#9c1414', '#ff3d3d']
    }
    
    private onButtonOut() {
        this.isOver = false;
        if (this.isdown) {
            return;
        } this.gameScreen.startStyle.fill = ['#1e00ff', '#4356e2']
        
    }
}