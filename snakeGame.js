var cvs = document.getElementById("snake")
var ctx = cvs.getContext("2d")

//buat unit
var box = 32;

//loag gambar
var ground = new Image()
ground.src = "./images/export.png"

var foodImg = new Image()
foodImg.src = "./images/foodSnake.png"

// buat snake
var snake = []
snake[0] = {
    x: 9 * box,
    y: 10 * box
}

//buat makanan
var food = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box,
}

//buat score
var score = 0

//control snake
var control;
document.addEventListener("keydown", direction)

function direction(event) {
    if (event.keyCode == 37 && control !== "RIGHT") {
        control = "LEFT"
    } else if (event.keyCode == 38 && control !== "DOWN") {
        control = "UP"
    } else if (event.keyCode == 39 && control !== "LEFT") {
        control = "RIGHT"
    } else if (event.keyCode == 40 && control !== "UP") {
        control = "DOWN"
    }
}

//check collision
function collision(head, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (head['x'] === arr[i]['x'] && head['y'] === arr[i]['y']) {
            return true
        }
    }
    return false
}

//gambar di dalam canvas
function draw() {
    ctx.drawImage(ground, 0, 0)
    for (let i = 0; i < snake.length; i++) {
        if (i > 0) {
            ctx.fillStyle = "green"
        } else {
            ctx.fillStyle = "white"
        }
        ctx.fillRect(snake[i]['x'], snake[i]['y'], box, box)

        ctx.fillStyle = "blue"
        ctx.fillRect(snake[i]['x'], snake[i]['y'], box, box)
    }
    ctx.drawImage(foodImg, food['x'], food['y'])

    //posisi kepala ular
    var snakeX = snake[0]['x']
    var snakeY = snake[0]['y']


    //jalan
    if (control === "LEFT") {
        snakeX -= box
    }
    if (control === "UP") {
        snakeY -= box
    }
    if (control === "RIGHT") {
        snakeX += box
    }
    if (control === "DOWN") {
        snakeY += box
    }

    if (snakeX === food['x'] && snakeY === food['y']) {
        score += 5
        food = food = {
            x: Math.floor(Math.random() * 17 + 1) * box,
            y: Math.floor(Math.random() * 15 + 3) * box,
        }
    } else {
        //hapus buntut
        snake.pop()
    }

    // add kepala baru
    var newHead = {
        x: snakeX,
        y: snakeY
    }

    // snake game over
    if (snakeX < box || snakeX > 17 * box || snakeY < 3 * box || snakeY > 17 * box || collision(newHead, snake)) {
        clearInterval(game)
    }

    snake.unshift(newHead)

    ctx.fillStyle = "white"
    ctx.font = "45px Change one"
    ctx.fillText(score, 2 * box, 1.6 * box)
}

// memanggil fungsi draw setiap 100 ms
var game = setInterval(draw, 200)
var storage = localStorage.getItem('nickName');
document.getElementById('namanick').innerHTML = 'Selamat Datang ' + storage;