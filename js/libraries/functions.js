var canvas, gameContainer, scoreContainer, ctx;

/*** CANVAS PROPERTY */
const canvasSize = 400;
const canvasBorder = "3px solid black";
const canvasBackgroundColor = "#1d1d1d";
const canvasOpacity = "0.8";

/*** SCORE PROPERTY */
const scoreColor = "#fff";

/*** SNAKE PROPERTY */
 const snakeColor = "green";
 const snakeSize = "20";
 const blockUnit = canvasSize / snakeSize;
 var snakeX = Math.trunc(Math.random()*blockUnit)*snakeSize;
 var snakeY = Math.trunc(Math.random()*blockUnit)*snakeSize;

 /***STEP PROPERTY */
 var stepX = 0;
 var stepY = 0;


export const snakeGame = {
    start: () => {
        snakeGame.createCanvas();
        snakeGame.createSnake();
        snakeGame.initMoveSnake();
        setInterval(snakeGame.updateSnakePosition, 100)
    },

    createCanvas: () => {
        gameContainer = document.createElement("div");
        scoreContainer = document.createElement("div");
        
      
        scoreContainer.id = "score";
        scoreContainer.innerHTML = "0";
        scoreContainer.style.color = scoreColor;
        scoreContainer.style.zIndex = 10;
        scoreContainer.style.position ="fixed";
        

        gameContainer.id = "game-container";
        canvas = document.createElement("canvas");
        canvas.width = canvasSize;
        canvas.height = canvasSize;
        canvas.style.border = canvasBorder;
        canvas.style.backgroundColor = canvasBackgroundColor;
        canvas.style.opacity= canvasOpacity;
       
        gameContainer.style.display = "flex";
        gameContainer.style.justifyContent= "center";
        gameContainer.style.alignItems = "center";

        ctx = canvas.getContext("2d");
        gameContainer.appendChild(scoreContainer);
        gameContainer.appendChild(canvas);
        document.body.appendChild(gameContainer);
    },

    createSnake: () => {

        ctx.fillStyle = snakeColor;
        ctx.clearRect(0,0, canvasSize, canvasSize)
        ctx.fillRect(snakeX, snakeY, snakeSize, snakeSize);

    },
     updateSnakePosition: () => {
        snakeX += stepX*snakeSize;
        snakeY += stepY*snakeSize;
        snakeGame.createSnake();
     },
    initMoveSnake: () => {
        document.addEventListener("keydown", (event)=>{
                console.log(event.key);
                switch (event.key) {
                    case "ArrowUp":
                        stepY = -1
                        stepX = 0
                        break;
                    case "ArrowDown":
                        stepY = 1
                        stepX = 0
                        break;
                    case "ArrowLeft":
                        stepX= -1
                        stepY = 0
                        break;
                    case "ArrowRight":
                        stepX = 1
                        stepY = 0
                        break;
                    case "p" :
                        stepX = 0
                        stepY = 0
                        break;
                    case "P" :
                        stepX = 0
                        stepY = 0
                        break;
                    case " ":
                        stepX = 0
                        stepY = 0
                        break;


                    default:
                        break;
                }
        })
    }
}

