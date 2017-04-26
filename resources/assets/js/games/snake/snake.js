/**
 * Created by max on 10/07/16.
 */

require('hammerjs');
import NastyUtil from '../../export/NastyUtil'

/*
 * CONSTANTS
 */
const SNAKE_DIM = 10;
const SIZE = 20;
const MAX_SPEED = 60;
const INIT_SPEED = 6;
const SPEED_STAP = 4;
const FOOD_VALUE = 10;

const LEFT = 'L';
const RIGHT = 'R';
const UP = 'U';
const DOWN = 'D';

const KEY_ESCAPE = 27;
const KEY_LEFT = 37;
const KEY_UP = 38;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;
const KEY_M = 77;
const KEY_P = 80;
const KEY_S = 83;


/*
 * Audio
 */
let mainMusic = null;
let foodMusic = null;
let gameOverMusic = null;
let loadingField = null;
let isPlaying = false;
let soundOn = true;


/*
 * HTML elements
 */
let gameMenu = null;
let startButton = null;
let pauseMessage = null;
let restartMenu = null;
let restartButton = null;
let scoreField = null;
let speedField = null;


/*
 * Canvas elements
 */
let canvas = null;
let ctx = null;
let w = 0;
let h = 0;


/*
 * Game elements
 */
let direction = '';
let pause = false;
let speed = INIT_SPEED;
let currentSpeedStep = 0;
let snake = [];
let food = null;
let hitType = '';
let score = 0;
let gameLoopInterval = null;
let wallCollision = false;


/**
 * Initialize global variables and preload data
 */
function init() {

    // Get elements
    mainMusic = document.getElementById('main-music');
    foodMusic = document.getElementById('food-music');
    gameOverMusic = document.getElementById('game-over-music');
    loadingField = document.getElementById('loading');
    gameMenu = $('#game-menu');
    startButton = $('#start');
    pauseMessage = $('#pause');
    restartMenu = $('#restart-menu');
    restartButton = $('#restart');
    scoreField = document.getElementById('score');
    speedField = document.getElementById('speed');

    // Preloading data
    // let files = [mainMusic, foodMusic, gameOverMusic];
    // let counter = 0;
    // for(let i = 0; i < files.length; i++) {
    //     files[i].addEventListener('loadeddata', function () {
    //         counter++;
    //         let percent = Math.floor((counter / files.length) * 100);
    //         //loadingField.innerHTML = 'Loading ' + percent + '%';
    //     });
    //
    //     files[i].addEventListener('error', function () {
    //         console.log('Errore nel caricamento audio');
    //     });
    // }

    // Load canvas
    let gameFrame = document.getElementById('snake-game');
    let frameW = gameFrame.offsetWidth;//canvas.width;
    let frameH = gameFrame.offsetHeight;//canvas.height;
    w = Math.floor(frameW / SIZE) * SIZE;
    h = Math.floor(frameH / SIZE) * SIZE;

    canvas = document.getElementById("canvas");
    canvas.height = h;
    canvas.width = w;
    ctx = canvas.getContext("2d");

    setListeners();

    startButton.toggle();
}


/**
 * Set listeners on HTML elemennts
 */
function setListeners() {
    startButton.click(function (e) {
        e.preventDefault();
        startGame();
    });

    restartButton.click(function () {
        restartMenu.toggle();
        scoreField.innerHTML = '0';
        reset();
    });

    $('#wall-collision').change(function () {
        wallCollision = $(this).is(':checked');
    });
}


/**
 * Start snake game
 */
function startGame() {

    // Start music and hide menu
    musicPlay();
    gameMenu.toggle();

    cleanCanvas();

    food = new Food();

    // Init snake
    initSnake();

    //Set direction listeners
    document.onkeydown = function(e) {
        let key = e.keyCode;

        if(key === KEY_LEFT && direction !== RIGHT)
            //setTimeout(function() {
                direction = LEFT;
                //console.log('p - L' + key);
            //}, 30);
        else if(key === KEY_UP && direction !== DOWN)
            //setTimeout(function() {
                direction = UP;
                //console.log('p - U' + key);
            //}, 30);
        else if(key === KEY_RIGHT && direction !== LEFT)
            //setTimeout(function() {
                direction = RIGHT;
                //console.log('p - R' + key);
            //}, 30);
        else if(key === KEY_DOWN && direction !== UP)
            //setTimeout(function() {
                direction = DOWN;
                //console.log('p - D' + key);
            //}, 30);
        else if(key === KEY_ESCAPE) {
            //setTimeout(function() {
            pause = !pause;
            musicToggle();
            pauseMessage.toggle();
        }
            //}, 30);
        else if(key === KEY_M)
            //setTimeout(function() {
                musicStop();
            //}, 30);
        else if(key === KEY_S)
            //setTimeout(function() {
                soundToggle();
            //}, 30);

        if(key) e.preventDefault();
    };

    // Set Hammerjs swap event listener
    let hammertime = Hammer(canvas);

    // Serve per abilitare le direzioni up e down dello swipe
    hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

    hammertime.on("swipeleft", function(event) {
        if(direction !== RIGHT) {
            direction = LEFT;
        }
    });
    hammertime.on("swiperight", function(event) {
        if(direction !== LEFT) {
            direction = RIGHT;
        }
    });
    hammertime.on("swipedown", function(event) {
        if(direction !== UP) {
            direction = DOWN;
        }
    });
    hammertime.on("swipeup", function(event) {
        if(direction !== DOWN) {
            direction = UP;
        }
    });


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
    let tail = snake.pop();
    tail.x = head_x;
    tail.y = head_y;
    snake.unshift(tail);


    // Check wall collision
    if(wallCollision) {

        if (head_x >= (w / SIZE) || head_x < 0 ||
            head_y >= (h / SIZE) || head_y < 0) {

            hitType = 'wall';
            gameover();
        }

    } else {

        if (head_x >= (w / SIZE)) {
            snake[0].x = 0;
        } else if (head_x < 0) {
            snake[0].x = (w / SIZE);
        }
        if (head_y >= (h / SIZE)) {
            snake[0].y = 0;
        } else if (head_y < 0) {
            snake[0].y = (h / SIZE);
        }
    }



    // Check food collision
    if(head_x === food.x && head_y === food.y) {
        snake.unshift(food);
        score += FOOD_VALUE;
        updateScore();
        food = new Food();
        foodMusic.pause();
        foodMusic.currentTime = 0;
        musicEffectPlay('food');


        // Increase snake speed
        currentSpeedStep++;

        if(speed <= MAX_SPEED && currentSpeedStep === SPEED_STAP) {
            speed ++;
            speedField.innerHTML = speed;
            currentSpeedStep = 0;
        }

        clearInterval(gameLoopInterval);
        gameLoopInterval = setInterval(mainLoop, 1000/speed);

    } else {
        // Check collision between snake parts
        for (let j = 1; j < snake.length; j++) {
            let s = snake[j];
            if(head_x === s.x && head_y === s.y) {
                hitType = 'self';
                gameover();

            }
        }
    }
}


/**
 * Main game loop
 */
function mainLoop() {
    if(!pause) {
        cleanCanvas();
        drawSnake();
        updateSnake();
        food.draw();
    }
}


/**
 * Reset game
 */
function reset() {

    direction = RIGHT;
    speed = INIT_SPEED;
    score = 0;

    speedField.innerHTML = speed;

    food = new Food();
    initSnake();

    mainMusic.currentTime = 0;
    musicPlay();

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
        f.color = '#ffffff';
        snake.push(f);
    }
}


/**
 * Draw snake on canvas
 */
function drawSnake() {
    snake.forEach(function(piece, index) {
        ctx.fillStyle = piece.color;
        ctx.fillRect(piece.x * SIZE, piece.y * SIZE, SIZE, SIZE);
    });
}


/**
 * Paint canvas in black
 */
function cleanCanvas() {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, w, h);
}


/**
 * Game over function
 */
function gameover() {
    musicStop();
    musicEffectPlay('game-over');
    clearInterval(gameLoopInterval);
    restartMenu.toggle();
}


/**
 * Update score on screen
 */
function updateScore() {
    score += FOOD_VALUE;
    scoreField.innerHTML = score;
}


/**
 * Play game theme music
 */
function musicPlay() {
    mainMusic.play();
    isPlaying = true;
}


/**
 * Pause game theme music
 */
function musicStop() {
    mainMusic.pause();
    isPlaying = false;
}


/**
 * Pause game music theme is is played and vice versa
*/
function musicToggle() {
    if(isPlaying) {
        mainMusic.pause();
        isPlaying = false;
    } else {
        mainMusic.play();
        isPlaying = true;
    }
}


/**
 * Play different effect sounds
 */
function musicEffectPlay(type) {
    if(type === 'food') {
        foodMusic.play();
    } else if(type === 'game-over') {
        gameOverMusic.play();
    }
}


/**
 * Mute all sounds if not muted and vice versa
 */
function soundToggle() {
    if(soundOn) {
        foodMusic.muted = true;
        mainMusic.muted = true;
        gameOverMusic.muted = true;
        soundOn = false;
    } else {
        foodMusic.muted = false;
        mainMusic.muted = false;
        gameOverMusic.muted = false;
        soundOn = true;
    }
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


/******************************
 *       START SCRIPT         *
 ******************************/
$(document).ready(function () {
    init();
});
