import * as PIXI from 'pixi.js'
import { Game } from './game'
import { Card } from './card'
import { FinishButton } from './finishButton'

export class GameScreen extends PIXI.Sprite{
    private graphics = new PIXI.Graphics
    private game : Game
    private finishButton : FinishButton
    private cardsArray : string[] = ['pog', 'pog', 'laugh', 'laugh','smirk','smirk']
    private cards : Card[] = []

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
        this.graphics.beginFill(0x78eff6);
        this.graphics.drawRect(0, 0, 1600, 900);
        this.graphics.endFill();

        // title box
        this.graphics.lineStyle(5, 0x000000, 1);
        this.graphics.beginFill(0x650A5A, 0.25);
        this.graphics.drawRect(400, 50, 800, 100);
        this.graphics.endFill();

        this.game.pixi.stage.addChild(this.graphics);

        // create game title
        let titleText = new PIXI.Text(`MATCH EACH PAIR TO WIN`, this.titleStyle)
        titleText.x = 480
        titleText.y = 70
        this.game.pixi.stage.addChild(titleText)

        // finish button
        this.graphics.lineStyle(5, 0x000000, 1);
        this.graphics.beginFill(0x650A5A, 0.25);
        this.graphics.drawRoundedRect(700, 725, 200, 100, 16);
        this.graphics.endFill();

        // create finish button text
        this.finishButton = new FinishButton(this.game, this, this.startStyle)
        this.game.pixi.stage.addChild(this.finishButton)

        this.createCards()
    }

    private createCards(){
        this.shuffleCards()

        let questionUrl = this.game.pixi.loader.resources["questionTexture"].texture!
        for(let card of this.cardsArray){
            let url: PIXI.Texture | undefined
            let name: string | undefined
            let i = 0
            
            switch (card) {
                case "pog":
                    url = this.game.pixi.loader.resources["pogTexture"].texture!
                    name = "pog"
                    break;
                case "laugh":
                    url = this.game.pixi.loader.resources["laughTexture"].texture!
                    name = "laugh"
                    break;
                case "smirk":
                    url = this.game.pixi.loader.resources["smirkTexture"].texture!
                    name = "smirk"
                    break;
                default:
                    break;
            }
            if (url !== undefined && name !== undefined){
                let memoryCard = new Card(url, name, questionUrl, i)
                this.game.pixi.stage.addChild(memoryCard)
                this.cards.push(memoryCard)
            }
        }
    }

    private shuffleCards(){
        this.cardsArray.sort(() => Math.random() - 0.5);
    }
}