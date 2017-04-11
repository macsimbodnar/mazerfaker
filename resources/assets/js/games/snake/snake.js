/**
 * Created by max on 10/07/16.
 */

import NastyUtil from '../../export/NastyUtil'

/*
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

        //let f = new Food(this.snakeDim, this.snakeDim, size);
    }

    initCanvas() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.w, this.h);
    }

    pausaMessage (command) {
        if(command === 'hide') {
            $('#pausa').hide();
        } else {
            $('#pausa').show();
        }
    }


}

class Snake {

    constructor(lenght, size, w, h, mainMusic, f_pause, f_gameover, f_score) {
        this.size = size;
        this.lenght = lenght;
        this.snake = [];
        this.dir = null;
        this.pause = false;
        this.w = w;
        this.h = h;
        this.over = 0;
        this.hitType = null;
        this.gameOverCallBack = f_gameover;
        this.score = 0;
        this.scoreFunction = f_score;
        this.speed = 20;
        this.gameLoop = null;

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
            else if(key === 27 && this.pausa === true) setTimeout(function() {this.pausa = false; f_pause('hide'); mainMusic.play();}.bind(this), 30);
            else if(key === 27 && this.pausa === false) setTimeout(function() {this.pausa = true; f_pause('show'); mainMusic.pause();}.bind(this), 30);

            if(key) e.preventDefault();

        }.bind(this);

        this.food = new Food(this.w, this.h, this.size);

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

        // Directions
        if(this.dir === "right") {
            head_x++;
        } else if(this.dir === "left") {
            head_x--;
        } else if(this.dir === "up") {
            head_y--;
        } else if(this.dir === "down") {
            head_y++;
        }

        // Move
        if(!this.pause) {
            let tail = this.snake.pop();
            tail.x = head_x;
            tail.y = head_y;
            this.snake.unshift(tail);
        }

        // Wall Collision
        if(head_x >= (this.w / size) || head_x <= -1 || head_y >= this.h / size || head_y <= -1) {
            if(this.over === 0) {
                this.hitType = "wall";
                this.gameover();
            }
            this.over++;
        }

        // Food collision
        if(head_x === this.food.x && head_y === this.food.y) {
            let coll = 1;
            let color = this.food.color;
            this.food = new Food(this.w, this.h, this.size);
            let tail = {x: head_x, y:head_y};
            this.snake.unshift(tail);
            this.snake[0].color = color;
            this.score += 10;
            this.scoreFunction(this.score);

            //Increase speed
            if(this.speed <= 50) {
                speed ++;
            }

            clearInterval(this.gameLoop);
            this.gameLoop = setInterval(this.draw, 1000/speed);


        } else {
            //Check collision between snake parts
            for(let j = 1; j < this.snake.length; j++) {
                let s = this.snake[j];
                if(head_x === s.x && head_y === s.y) {
                    if(this.over === 0) {
                        this.hitType = "self";
                        this.gameover();
                    }
                }
                this.over ++;
            }
        }
    }

    gameover() {
        this.gameOverCallBack();
    }
}
*/

/*
 * CONSTANTS
 */
const snakeDim = 10;
const size = 10;

/*
 * Audio
 */
let mainMusic = null;
let foodMusic = null;
let gameOverMusic = null;
let loadingField = null;


/*
 * HTML elements
 */
let gameMenu = null;
let startButton = $('#start');


/*
 * Canvas elements
 */
let canvas = null;
let ctx = null;
let w = null;
let h = null;


/**
 * Initialize global variables and preload data
 */
function init() {

    // Get elements
    mainMusic = document.getElementById('main-music');
    foodMusic = document.getElementById('game-over-music');
    gameOverMusic = document.getElementById('food-music');
    loadingField = document.getElementById('loading');
    gameMenu = $('#game-menu');
    startButton = $('#start');

    // Preloading data
    let files = [mainMusic, foodMusic, gameOverMusic];
    let counter = 0;
    for(let i = 0; i < files.length; i++) {
        files[i].addEventListener('loadeddata', function () {
            counter++;
            let percent = Math.floor((counter / files.length) * 100);
            loadingField.innerHTML = 'Loading ' + percent + '%';
            if (percent === 100) {
                startButton.toggle();
            }
        });
    }

    // Load canvas
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let w = canvas.width;
    let h = canvas.height;

    setListeners();
}


/**
 * Set listeners on HTML elemennts
 */
function setListeners() {
    startButton.click(function (e) {
        e.preventDefault();
        startGame();
    });
}


/**
 * Start snake game
 */
function startGame() {

    // Game variables
    let speed = 20;
    let direction = '';
    let pause = false;
    let snake = [];

    // Start music and hide menu
    mainMusic.play();
    gameMenu.toggle();

    cleanCanvas();

    let food = new Food(w, h, size);

    // Init snake
    for(let i = snakeDim -1; i >= 0; i--) {
        let f = new Food(1, 1, size);
        f.x = i;
        f.y = 0;
        snake.push(f);
    }

    //Set direction listeners
    document.onkeydown = function(e) {
        let key = e.keyCode;

        if(key === 37 && direction !== "right")
            setTimeout(function() {
                direction = "left";
            }, 30);
        else if(key === 38 && direction !== "down")
            setTimeout(function() {
                direction = "up";
            }, 30);
        else if(key === 39 && direction !== "left")
            setTimeout(function() {
                direction = "right";
            }, 30);
        else if(key === 40 && direction !== "up")
            setTimeout(function() {
                direction = "down";
            }, 30);
        else if(key === 27 && pause === true)
            setTimeout(function() {
                pause = false;
                //pausaMessage('hide');
                mainMusic.play();
            }, 30);
        else if(key === 27 && pause === false)
            setTimeout(function() {
                pause = true;
                //pausaMessage('show');
                mainMusic.pause();
            }, 30);

        if(key) e.preventDefault();

    };

}


/**
 * Paint canvas in black
 */
function cleanCanvas() {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, w, h);
}


/**
 * Draw snake on canvas
 */
function drawSnake(snake) {
    snake.forEach(function(piece, index) {
        ctx.fillStyle = piece.color;
        ctx.fillRect(piece.x * size, food.y * size, size, size);
    });
}


/**
 * Food Class
 */
class Food {

    constructor(w, h, size) {
        this._color = NastyUtil.nastyColor;
        this._x = Math.round(Math.random() * (w - size) / size);
        this._y = Math.round(Math.random() * (h - size) / size);
    }


    /**
     *
     * @param ctx canvas 2d context
     * @param size of the square
     */
    draw(ctx, size) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this._x * size, this._y * size, size, size);
    }


    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    get color() {
        return this._color;
    }

    set x(value) {
        this._x = value;
    }

    set y(value) {
        this._y = value;
    }

    set color(value) {
        this._color = value;
    }
}