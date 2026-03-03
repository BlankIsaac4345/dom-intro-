console.log("Script started");

// variable to track number of clicks
let clicks = 0;

// variable to store the clci dispaly h1 element
let clickDisplay = document.getElementById("click-display");

// set the initial text for clicks count h1
clickDisplay.innerText = "Clicks: " + clicks;

// called each time the image is clicked 
function handleClick() {
    console.log("click");

    // add one to click count
    clicks = clicks + 1;

    // update display
    clickDisplay.innerText = "Clicks: " + clicks;

    // dectect whe you reach 10 clicks
    if (clicks == 10) {
        alert("Congrats you reached level 2 you do 2 per click now!");
        // upgrade click counter
        click
    }
}