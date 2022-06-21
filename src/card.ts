import * as PIXI from 'pixi.js'
import { Game } from './game'

export class Card extends PIXI.Sprite{
    private url: PIXI.Texture
    private value: string
    private questionUrl: PIXI.Texture
    private flipped: boolean = false

    constructor(url: PIXI.Texture, name: string, questionUrl: PIXI.Texture, i: number){
        super(questionUrl)
        this.url = url
        this.value = name
        this.questionUrl = questionUrl

        this.width = 100
        this.height = 100

        this.anchor.set(0.5)

        switch (i) {
            case 0:
                this.x = 400
                this.y = 200
                break
            case 1:
                this.x = 800
                this.y = 200
                break
            case 2:
                this.x = 1200
                this.y = 200
                break
            case 3:
                this.x = 400
                this.y = 400
                break
            case 4:
                this.x = 800
                this.y = 400
                break
            case 5:
                this.x = 1200
                this.y = 400
                break
        }
    }
}