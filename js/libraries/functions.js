var canvas, gameContainer;
const canvasSize = 400;
const canvasBorder = "3px solid black";
export const snakeGame ={
    createCanvas: ()=>{
        gameContainer = document.createElement("div");
        gameContainer.id = "game-container";
        canvas = document.createElement("canvas");
        canvas.width = canvasSize;
        canvas.height = canvasSize;
        canvas.style.border = canvasBorder;
        console.log(canvas);
        gameContainer.style.display = "flex";
        gameContainer.style.justifyContent= "center";
 
        gameContainer.appendChild(canvas);
        document.body.appendChild(gameContainer);
    }
}