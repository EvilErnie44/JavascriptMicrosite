window.onload = function() {
  alert("I am here.");
  document.getElementById("selectIDDiv").onclick = selectByID;
  document.getElementById("selectTheClasses").onclick = selectByClass;
  document.getElementById("container").onclick = addAnEle;
  document.getElementById("selectChild").onclick = selectByChild;
}

//This function needs to capture textbox contents.
function getDivStr() {
  return document.getElementById("divTextBox").value;
}

function selectByID() {
  alert("The String has been captured");
  document.getElementById("divSelect").innerHTML = getDivStr();
}

function selectByClass() {
  alert("I am finding all instances of the pClassSelect class identifier");
  //Why does this not work with let/var?!?!
 let divObj = document.getElementsByClassName("pClassSelect");
  alert("I will now use a loop too change each element")
 for (var x = 0; x < divObj.length; x++) {
   divObj[x].innerHTML = getDivStr();
  }
}

function addAnEle() {
  alert("found me");
  var newLi = document.createElement("li");
  var newP = document.createElement("p");
  newP.innerHTML = "You just added me!";
  var container = document.getElementById("domWalkExample").getElementsByTagName("ul")[0];
  container.appendChild(newLi);
  newLi.appendChild(newP);
}

function selectByChild() {
  alert("Found Me");
  var el = document.getElementById("selectChildExample").children;
  for(var i = 0; i < el.length; i++){
    el[i].innerHTML = "Found Them";
    el[i].style.color = "blue";
}
}
