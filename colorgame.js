
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var messagedisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init() {
    //mode button event listeners
    setUpModeButtons();

    //Set up squares
    setUpSquares();

    resetButton.addEventListener("click", function() {
        resetButton.textContent = "NEW COLORS";
        resetGame(numSquares);
    });

    resetGame(numSquares);
}

function setUpModeButtons() {
    for(var i = 0; i < modeButton.length; i++) {
        modeButton[i].addEventListener("click", function() {
            if (!this.classList.contains("selected") ) {
                modeButton[0].classList.remove("selected");
                modeButton[1].classList.remove("selected");
                this.classList.add("selected");
                this.textContent === 'Easy' ? numSquares = 3: numSquares = 6;
                resetGame(numSquares);
            }
        });
    };
}

function setUpSquares() {
    for(var i = 0; i < squares.length; i++) {
        //Add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            //console.log(clickedColor,pickedColor);
            if(clickedColor === pickedColor) {
                messagedisplay.textContent = 'CORRECT';
                resetButton.textContent = "PlAY AGAIN";
                changeColors(pickedColor);
                h1.style.backgroundColor = pickedColor;
            }
            else {
                this.style.backgroundColor = "#232323";
                messagedisplay.textContent = 'TRY AGAIN';
            }
        });
    };
}

function changeColors(color) {
    //loope through all squares
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    //change each color to match given color
};

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //add num random colors to array
    for(var i = 0; i < num; i++) {
        //get random color and push into array
        arr.push(randomColor());
    }
    // return array
    return arr;
};

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
};

function pickColor(num) {
    var random = Math.floor(Math.random() * (num));
    return colors[random];
};

function resetGame(num) {
    //generate all new colors
    colors = generateRandomColors(num);
    //pick new color from array
    pickedColor = pickColor(num);
    //udpate header
    colorDisplay.textContent = pickedColor;
    //change color of squares
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "NEW COLORS";
    //Change text for message displat
    messagedisplay.textContent = "";
    //Update colors
    for(var i = 0; i < squares.length; i++) {
        //Add initial colors to squares
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
        else {
            squares[i].style.display = "none";
        }
    };
};