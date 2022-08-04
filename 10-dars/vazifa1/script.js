var game = document.querySelector(".game");
var basket = document.querySelector(".basket");
var fruits = document.querySelector(".fruits");
var basketLeft = parseInt(window.getComputedStyle(basket).getPropertyValue("left"));
var basketBottom = parseInt(window.getComputedStyle(basket).getPropertyValue("bottom"));
var score = 0;

function moveBasketLeft() {
    if(basketLeft > 0){

        basketLeft -= 15;
        basket.style.left = basketLeft+'px'
    }
}

function moveBasketRight() {
    if(basketLeft < 620){

        basketLeft += 15;
        basket.style.left = basketLeft+'px';
    }
}

function control(e) {
    if(e.key == "ArrowLeft"){
        moveBasketLeft();
    }
    if(e.key == "ArrowRight"){
        moveBasketRight();
    }
}

function generateFruits(){
    var fruitBottom = 470;
    var fruitLeft = Math.floor(Math.random() * 620);
    var fruit = document.createElement('div');
    fruit.setAttribute("class", "fruit");
    fruits.appendChild(fruit);
    function fallDownFruit(){
        if(fruitBottom < basketBottom + 50 && fruitBottom > basketBottom && fruitLeft > basketLeft - 30 && fruitLeft < basketLeft + 80){
            fruits.removeChild(fruit);
            clearInterval(fallInterval);
            score++
        }
        if(fruitBottom < basketBottom){
            alert("game over! Your score is: " + score);
            clearInterval(fallInterval);
            clearTimeout(fruitTimeout);
            location.reload();
        }
        fruitBottom -= 5;
        fruit.style.bottom = fruitBottom + 'px';
        fruit.style.left = fruitLeft + 'px';
    }
    var fallInterval = setInterval(fallDownFruit, 20);
    var fruitTimeout = setTimeout(generateFruits, 2000);
}
generateFruits();
document.addEventListener("keydown" , control);