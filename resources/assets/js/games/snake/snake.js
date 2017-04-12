/**
 * Created by max on 10/07/16.
 */

import NastyUtil from '../../export/NastyUtil'

/*
 * CONSTANTS
 */
const SNAKE_DIM = 10;
const SIZE = 10;
const MAX_SPEED = 50;
const FOOD_VALUE = 10;
const LEFT = 'L';
const RIGHT = 'R';
const UP = 'U';
const DOWN = 'D';


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


/*
 * Game elements
 */
let direction = '';
let pause = false;
let speed = 20;
let snake = [];
let food = null;
let over = 0;
let hitType = '';
let score = 0;
let gameLoopInterval = null;


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
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    w = canvas.width;
    h = canvas.height;

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

    // Start music and hide menu
    mainMusic.play();
    gameMenu.toggle();

    cleanCanvas();

    food = new Food();

    // Init snake
    initSnake();

    //Set direction listeners
    document.onkeydown = function(e) {
        let key = e.keyCode;

        if(key === 37 && direction !== RIGHT)
            setTimeout(function() {
                direction = LEFT;
            }, 30);
        else if(key === 38 && direction !== DOWN)
            setTimeout(function() {
                direction = UP;
            }, 30);
        else if(key === 39 && direction !== LEFT)
            setTimeout(function() {
                direction = RIGHT;
            }, 30);
        else if(key === 40 && direction !== UP)
            setTimeout(function() {
                direction = DOWN;
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

    reset();
}


/**
 * Update snake position
 */
function updateSnake() {

    let head_x = snake[0].x;
    let head_y = snake[0].y;

    // Check direction
    if(direction === RIGHT)
        head_x ++;
    else if(direction === LEFT)
        head_x --;
    else if(direction === UP)
        head_y --;
    else if(direction === DOWN)
        head_y ++;

    // Move snake
    if(!pause) {
        let tail = snake.pop();
        tail.x = head_x;
        tail.y = head_y;
        snake.unshift(tail);
    }

    // Check wall collision
    if(head_x >= (w / SIZE) || head_x < 0 ||
        head_y >= (h / SIZE) || head_y < 0) {

        if(over === 0) {
            hitType = 'wall';
            gameover();
        }

        over ++;
    }

    // Food collision
    if(head_x === food.x && head_y === food.y) {
        let coll = 1;
        snake.unshift(food);
        score += FOOD_VALUE;
        updateScore();
        food = new Food();
        foodMusic.pause();
        foodMusic.currentTime = 0;
        foodMusic.play();


        // Increase snake speed
        if(speed <= MAX_SPEED)
            speed ++;

        clearInterval(gameLoopInterval);
        gameLoopInterval = setInterval(mainLoop, 1000/speed);

    } else {
        // Check collision between snake parts
        for (let j = 1; j < snake.length; j++) {
            let s = snake[j];
            if(head_x === s.x && head_y === s.y) {
                if(over === 0) {
                    hitType = 'self';
                    gameover();
                }
                over ++;
            }
        }
    }




}


/**
 * Main game loop
 */
function mainLoop() {
    cleanCanvas();
    drawSnake();
    updateSnake();
    food.draw();
}


/**
 * Reset game
 */
function reset() {

    direction = RIGHT;
    over = 0;
    speed = 20;
    score = 0;

    food = new Food();
    initSnake();

    mainMusic.currentTime = 0;
    mainMusic.play();

    if(typeof  gameLoopInterval !== 'undefined') {
        clearInterval(gameLoopInterval);
    }

    gameLoopInterval = setInterval(mainLoop, 1000/speed);
}


/**
 * Init snake
 */
function initSnake() {
    snake = [];
    for(let i = SNAKE_DIM -1; i >= 0; i--) {
        let f = new Food();
        f.x = i;
        f.y = 0;
        snake.push(f);
    }
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
function drawSnake() {
    snake.forEach(function(piece, index) {
        ctx.fillStyle = piece.color;
        ctx.fillRect(piece.x * SIZE, food.y * SIZE, SIZE, SIZE);
    });
}


/**
 * Game over function
 */
function gameover() {
    // todo
}


/**
 * Update score on screen
 */
function updateScore() {
    // todo
}


/**
 * Food Class
 */
class Food {

    constructor() {
        this._color = NastyUtil.nastyColor;
        this._x = Math.round(Math.random() * (w - SIZE) / SIZE);
        this._y = Math.round(Math.random() * (h - SIZE) / SIZE);
    }


    /**
     * Draw food on canvas
     */
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this._x * SIZE, this._y * SIZE, SIZE, SIZE);
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

init();