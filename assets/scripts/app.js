let swipeRight = document.querySelector(".swipe-right");
let swipeLeft = document.querySelector(".swipe-left")

// swipeLeft.addEventListener("click", swipingRight);
swipeRight.addEventListener("click", swipingRight);

function swipingRight () {
    let section = document.createElement("div");                 // Create a <li> node
    let textnode = document.createTextNode("Water");         // Create a text node
    section.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("main-container").appendChild(div);     // Append <li> to <ul> with id="myList" 
}