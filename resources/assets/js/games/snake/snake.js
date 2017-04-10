/**
 * Created by max on 10/07/16.
 */

import NastyUtil from '../../export/NastyUtil'

class SnakeGame {
    constructor() {
        this.snakeDim = 10;
        this.canvas = document.getElementById("canvas");
        this.w = this.canvas.width;
        this.h = this.canvas.height;
        this.ctx = this.canvas.getContext("2d");
        this.mainMusic = document.getElementById('main-music');
        this.foodMusic = document.getElementById('game-over-music');
        this.gameOverMusic = document.getElementById('food-music');
        this.loadingField = document.getElementById('loading');
        this.gameMenu = $('#game-menu');
        this.startButton = $('#start');
        this.setListeners();

        //Custom funny gameover messages
        this.msgsSelf = [];
        this.msgsSelf[0] = "Hahaha morto di fame! Cazzo ti mangi da solo?";
        this.msgsSelf[1] = "Ti piaceee il serpente eeeeh?";
        this.msgsSelf[2] = "Black salami";
        this.msgsSelf[3] = "Do you have Autophagia?";

        this.msgsWall = [];
        this.msgsWall[0] = "Scarso!";
        this.msgsWall[1] = "Torna a lavorare! (o)(o)";
        this.msgsWall[2] = "8=========D";
        this.msgsWall[3] = "MIIIII che capata!";
        this.msgsWall[4] = "Ma quanto fai schifo?";
    }

    start() {
        let files = [this.mainMusic, this.foodMusic, this.gameOverMusic];
        let counter = 0;
        for(let i = 0; i < files.length; i++) {
            files[i].addEventListener('loadeddata', function () {
                counter++;
                let percent = Math.floor((counter / files.length) * 100);
                this.loadingField.innerHTML = 'Loading ' + percent + '%';
                if(percent === 100) {
                    this.startButton.toggle();
                }
            }.bind(this));
        }
    }

    setListeners() {
        this.startButton.click(function (e) {
            this.runGame();
        }.bind(this));
    }

    runGame() {
        this.gameMenu.toggle();
        this.mainMusic.play();
    }

    init() {
        let snake,
            size = 10,
            speed = 20,
            dir,
            game_loop,
            over = 0,
            hitType,
            color,
            pausa = false;

        let f = new Food(this.snakeDim, this.snakeDim, size);
    }

    paintCanvas() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.w, this.h);
    }
}

class Snake {

    constructor(lenght, size) {
        this.size = size;
        this.lenght = lenght;
        this.snake = [];
        this.dir = null;
        this.pause = false;

        for(let i = lenght - 1; i >= 0; i--) {
            let f = new Food(0, 0, size);
            f.x = i;
            f.y = 0;
            this.snake.push(f);
        }

        document.onkeydown = function(e) {
            let key = e.keyCode;
            //console.log(key);

            if(key === 37 && this.dir !== "right") setTimeout(function() {this.dir = "left"; }.bind(this), 30);
            else if(key === 38 && this.dir !== "down") setTimeout(function() {this.dir = "up"; }.bind(this), 30);
            else if(key === 39 && this.dir !== "left") setTimeout(function() {this.dir = "right"; }.bind(this), 30);
            else if(key === 40 && this.dir !== "up") setTimeout(function() {this.dir = "down"; }.bind(this), 30);
            else if(key === 27 && this.pausa === true) setTimeout(function() {this.pausa = false; this.pausaMessage('hide'); this.mainMusic.play();}.bind(this), 30);
            else if(key === 27 && this.pausa === false) setTimeout(function() {this.pausa = true; this.pausaMessage('show'); this.mainMusic.pause();}.bind(this), 30);
            // TODO
            if(key) e.preventDefault();

        }.bind(this);
    }

    draw(ctx) {
        for(let i = 0; i < this.snake.lenght; i++) {
            let s = this.snake[i];
            ctx.fillStyle = s.color;
            ctx.fillRect(s.x * this.size, s.y * this.size, this.size, this.size);
        }
    }

    update() {
        let head_x = this.snake[0].x;
        let head_y = this.snake[0].y;



    }
}

class Food {
    constructor(w, h, size) {
        this.color = NastyUtil.nastyColor;
        this.x = Math.round(Math.random() * (w - size) / size);
        this.y = Math.round(Math.random() * (h - size) / size);
    }

    draw(ctx, size) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x * size, this.y * size, size, size);
    }
}

let snake = new SnakeGame();
snake.start();