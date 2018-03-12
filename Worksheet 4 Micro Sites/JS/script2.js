//Waits for HTML to have been parsed before running the script.
window.onload = function () {
// Visual Indicator.
alert("This is the child window.");
//This line of script grabs the close me button on the child page once it is open. It has been binded to run the function on the onclick Event.
document.getElementById("closeme").onclick = closeMe;
//This line of script grabs the resize me button on the child page once it is open.  It has been binded to run the function on the onclick Event.
document.getElementById("resizeme").onclick = resizeMe;
//This line of script grabs the move me button on the child page once it is open.  It has been binded to run the function on the onclick Event.
document.getElementById("moveme").onclick = moveMe;
//This line of script associates the element and theon click event to the function.
document.getElementById("moveMeBy").onclick = moveMeBy;

document.getElementById("resizeByPixel").onclick = resizeByPixel;
}

//This function will close the child window when the on click closeMe event occurs.
function closeMe() {
  //Closes the current focus window. The default behaviour of this function will take you back to the parent.
  //Is the variable newwindow actuall associated with this?
  window.close();
}

//runs the function which was binded to the onclick event.
function resizeMe() {
  //this method will allow me to set the below parameters which govern how large the new window will be. In the below instance it will take up 25% of screen window space.
  window.resizeTo(
      window.screen.availWidth / 2,
      window.screen.availHeight / 2
    );
    //Sets current focus to the newly resized window.
window.focus();
}


//This function will be ran when the onclick event occurs.
function moveMe() {
//this line ensures the current window is moved to the relevant x,y coordinate.
window.moveTo(400,250);
}
//The fucntion will be ran when the associated event occurs.
function moveMeBy(){
  //Move moves the window this far based on the coordinate of the window currently.
  window.moveBy(150,150);
}

function resizeByPixel() {
  window.resizeBy(500,500);
}
