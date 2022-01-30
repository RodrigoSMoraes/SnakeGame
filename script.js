const canvas = document.getElementById("snake");
const ctx = canvas.getContext('2d');
let score = 0;
// Variáveis 

let box = 25;
let canvasSize = 23 ;

let snake = [];

snake [0] = {
    x: Math.floor((canvasSize/2)) * box,
    y: Math.floor((canvasSize/2)) * box
}



 //setando a direção com a tecla pressionada
let dir = 1;
window.addEventListener('keydown', direction);  

function direction (event){
    if( event.key == "ArrowUp" && dir != "ArrowDown")
    {
        dir = "ArrowUp";}
    if( event.key == "ArrowLeft" && dir != "ArrowRight")
    {
        dir = "ArrowLeft";}
    if( event.key == "ArrowRight" && dir != "ArrowLeft")
    {
        dir = "ArrowRight";}
    if( event.key == "ArrowDown" && dir != "ArrowUp")
    {
        dir = "ArrowDown";}   
    document.getElementById("demo2").innerHTML = dir;
}


let food = {
    x: Math.floor(1 + (Math.random() * (canvasSize - 1))) * box,
    y: Math.floor(1 + (Math.random() * (canvasSize - 1))) * box
}



function draw(){
   document.getElementById("demo3").innerHTML = score;

    const date = new Date ;
    document.getElementById("demo").innerHTML = date.toLocaleTimeString();

    //desenhando o background
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(box, box, canvasSize*box - box, canvasSize*box - box);  
    
    
    //desenhando a cabeça da cobra e a calda
    for(let i = 0; i< snake.length; i++)
    {
        ctx.fillStyle = "green";
        ctx.fillRect(snake[i].x, snake[i].y, box, box); 
    }


   
    

    //move the snake head
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (dir == "ArrowLeft")
    snakeX-= box;
    if (dir == "ArrowRight")
    snakeX+= box;
    if (dir == "ArrowUp")
    snakeY-= box;
    if (dir == "ArrowDown")
    snakeY+= box; 

    //se a cobra comer a fruta
    if(snakeX== food.x && snakeY== food.y)
    {
        
        score+=1;
        document.getElementById("demo3").innerHTML = score;
        food = {
            x: Math.floor(1 + (Math.random() * (canvasSize - 1))) * box,
            y: Math.floor(1 + (Math.random() * (canvasSize - 1))) * box
        }
    }
    else
    {
        snake.pop();
    }

    
    let newHead = {
        x: snakeX,
        y: snakeY
    };

    //checando colisão
    function collision(head, array){
        for(let i = 0; i< array.length; i++)
        {
            if(head.x == array[i].x && head.y == array[i].y)
            {
                return true;
            }
        }
        return false;
    }

    if (snakeX < box || snakeY < box || snakeX> (canvasSize - 1) * box || snakeY> (canvasSize - 1) * box || collision(newHead, snake))
    {
        clearInterval(gameLoop);
    }
    snake.unshift(newHead);

    

    //desenhando a comida
    ctx.fillStyle = 'red';
    ctx.fillRect( food.x,  food.y, box, box)

    // desenhando o score
    ctx.fillStyle = 'white';
    ctx.font = '24px Changa one';
    ctx.clearRect(0, 0, 50, 25);
    ctx.fillText(score, box, 0.8 * box);


}
let gameLoop = setInterval(draw,100);


   
    
   
   

    
    

/**/ 


