import * as PIXI from 'pixi.js'
import questionImage from './images/questionMark.png'
import laughImage from './images/starLaugh.png'
import pogImage from './images/starPog.png'
import smirkImage from './images/starSmirk.png'
import { StartScreen } from './startScreen'
import { GameScreen } from './gameScreen'
import { EndScreen } from './endScreen'
import { UPDATE_PRIORITY } from 'pixi.js'

export class Game{
    public pixi : PIXI.Application //canvas element in de html file
    private loader : PIXI.Loader
    private startScreen : StartScreen
    private gameScreen : GameScreen
    private endScreen : EndScreen
    private gameStarted : boolean = false
    
    constructor(){
        console.log("ik ben een game")
        this.pixi = new PIXI.Application({ width: 1600, height: 900 })
        console.log(this.pixi)
        document.body.appendChild(this.pixi.view)

        this.loader = new PIXI.Loader()
        this.loader.add('questionTexture', questionImage)
        this.loader.add('laughTexture', laughImage)
        this.loader.add('pogTexture', pogImage)
        this.loader.add('smirkTexture', smirkImage)
        this.loader.load(()=>this.loadCompleted())
    }   

    private loadCompleted() {
        
        this.startScreen = new StartScreen(this)
        this.pixi.stage.addChild(this.startScreen)

        this.pixi.ticker.add((delta) => this.update(delta))
    }

    public loadGame(){
        this.pixi.stage.removeChildren()

        if(this.gameStarted){
            // create end screen
            this.endScreen = new EndScreen(this)
        } else {
            this.gameStarted = true
            this.gameScreen = new GameScreen(this)
        }
    }

    private update(delta : number){
        
    }
}

let g = new Game()