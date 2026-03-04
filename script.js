console.log("Script started");

// variable to track number of clicks
let clicks = 0;
let clickValue = 1;

// variable to store the clci dispaly h1 element
let clickDisplay = document.getElementById("click-display");

// variable tp store the click display element
let levelDisplay = document.getElementById("level-display")

// set the initial text for clicks count h1
clickDisplay.innerText = "Clicks: " + clicks;

// called each time the image is clicked 
function handleClick() {
    console.log("click");

    // add one to click count
    clicks = clicks + clickValue;

    // update display
    clickDisplay.innerText = "Clicks: " + clicks;

    // dectect whe you reach 10 clicks
    if (clicks == 10) {
    alert("Congrats you reached level 2 you do 2 per click now!");
    levelDisplay.innerText = "Level 2";
    clickValue = 2;
}

else if (clicks == 50){
    alert("Congrats you reached level 3");
    levelDisplay.innerText = "Level 3";
    clickValue = 5;
}

else if (clicks == 250) {
    alert("Congrats you reached level 4")
    levelDisplay.innerText = "Level 4"
    clickValue = 15;
}

else if (clicks == 1000) {
    alert("Congrats you reached level 5")
    levelDisplay.innerText = "Level 5"
    clickValue = 30;
}
    
}