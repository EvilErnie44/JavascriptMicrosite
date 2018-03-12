//This is my onload function, this waitsw for the HTML page to have loaded before running the anonymous function.
window.onload = function () {
    //The alert is placed here to let me know that the JS file is being loaded correctly.
    alert("I am here!");
    //The next line of code grabs the button called example and assoiciates the on click event to run the the start function.
    document.getElementById("example").onclick = start;
    //This line associates my button with the on click event, when the event occurs this will prompt the openNewWindow function to run.
    document.getElementById("urlLocation").onclick = urlLocationButton;
    //This line associates my button with the onclick event. When cliked the function runs.
    document.getElementById("hostLocation").onclick = hostName;
    //This line associates the button and event with the function.
    document.getElementById("pathName").onclick = showPathName;
    //This line associates the button and event with the function.
    document.getElementById("pageProtocol").onclick = showPageProtocol;
    //This line associates the button and event with the function.
    document.getElementById("pagePort").onclick = showPagePort;
    //This line associates the button and event with the function.
    document.getElementById("loadNew").onclick = assignNewPage;
    //This line associates the button and event with the function.
    document.getElementById("reloadPage").onclick=reloadCurPage;
    //This line associates the button and event with the function.
    document.getElementById("replacePage").onclick=replaceCurPage;
}

//This function opens window and assigns it a variable name which we can associate with the window object.
var myWindow;
function start(){
    myWindow = window.open( "example1.html", "", "width=500, height=500" );
}

/*
//This function will open a new window at the specified URL, as a result of browsers default behaviours using the window open method we will see the URL opened in a new tab.
function start() {
    //window.open method with the target URL passed into the functions argument.
   window.open("example1.html");
}
*/

//The below function as expanded the functionality of the above function.
function openNewWindow() {
    //I am creating a variable string which is going to be passed into the window open method, this will govern if the window is opened in a new tab or window, the size of the window, if the new child
    //window has scroll bars.
var strWindowFeatures = "location=yes,height=570,width=520,scrollbars=yes,status=yes";
let nPage = "example1.html"
let win = window.open(nPage, "_blank", strWindowFeatures)
}

//This function will close the child window when the on click closeMe event occurs.
function closeMe() {
  window.close();
}

//Defines a function
function urlLocationButton() {
  //calls alert method and passes in string, concatenated withe with the href property.
  alert(("The URL for the site is ")+window.location.href);
}

//Defines a function to be ran once the event occurs.
function hostName() {
  //calls alert method and passes in string, concatenated withe with the hostname property.
  alert(("The Host name for the site is ")+window.location.hostname);
}
//Defines a function to be ran once the event occurs.
function showPathName() {
  //calls alert method and passes in string, concatenated withe with the pathname property.
  alert(("The Path name for the page is ")+window.location.pathname);
}
//Defines a function to be ran once the event occurs.
function showPageProtocol(){
  //calls alert method and passes in string, concatenated withe with the protocol property.
  alert(("The Protocol for the page is ")+window.location.protocol);
}
//Defines a function to be ran once the event occurs.
function showPagePort() {
    //calls alert method and passes in string, concatenated withe with the location property.
  alert(("The port for this page is ")+window.location.port);
}
//Defines a function to be ran once the event occurs.
function assignNewPage(){
    //calls assign method and passes in URL for destination.
  window.location.assign("https://www.google.com");
}
//Defines a function to be ran once the event occurs.
function reloadCurPage(){
  //calls reload method, reloads current page.
  location.reload();
}
//Defines a function to be ran once the event occurs.
function replaceCurPage(){
  //calls replace method and passes in destination URL.
  location.replace("https://www.google.com");
}
