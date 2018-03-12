//Anonymous function to bind the functions to the elements when the page loads.
window.onload = function() {
  //Binds the function call to the on click event, associated with the element ID.
  document.getElementById("appName").onclick = showAppName;
  document.getElementById("appCodeName").onclick = showAppCodeName;
  document.getElementById("appVersion").onclick = showAppVersion;
  document.getElementById("cookieEnabled").onclick = showCookieState;
  document.getElementById("currentGeolocation").onclick = showGeoLocation;
  document.getElementById("browserLanguage").onclick = showBrowserLanguage;
  document.getElementById("browserOnlineStatus").onclick = showBrowserStatus;
  document.getElementById("browserPlatform").onclick = showBrowserPlatform;
  document.getElementById("browserProduct").onclick = showEngineName;
  document.getElementById("browserProduct").onclick = showBrowserUserAgent;
  //Binds method of navigation object to tthe onclick event.
  document.getElementById("javaEnabled").onclick = showJavaStatus;
  //History Object.
  document.getElementById("historyLength").onclick = showHistoryLength;
  document.getElementById("newWindow").onclick = newWin;
  document.getElementById("goForward").onclick = nextPage;
  document.getElementById("goTwoBack").onclick = goTwoPagesBack;
}

function showAppName() {
  alert(("The app Code Name is ") + navigator.appName);
}

function showAppCodeName() {
  alert(("Name of app is ") + navigator.appCodeName);
}

function showAppVersion() {
  alert(("Name app version is ") + navigator.appVersion);
}

function showCookieState() {
  alert(("Cookies are enabled, this is...") + navigator.cookieEnabled);
}

function showGeoLocation() {
  alert(("") + navigator.geolocation);
}

function showBrowserLanguage() {
  alert(("The browser language is ")+ navigator.language);
}

function showBrowserStatus() {
  alert(("The browser is online:")+ navigator.onLine);
}

function showBrowserPlatform() {
  alert(("The browser platform is ")+ navigator.platform);
}

function showEngineName() {
alert (("The browser engine name is  ") + navigator.product);
}

function showBrowserUserAgent() {
  alert(("The User Agent Header: ")+navigator.userAgent);
}

// methods of navigator.

function clearElement() {
  let noStr = "";
  document.getElementById("javaoutput").innerHTML = noStr;
}

function showJavaStatus() {
  let str = "Java Enabled: " + navigator.javaEnabled();
  document.getElementById("javaoutput").innerHTML = str;
  //Using window object method and passing in my clear HTML element function, with an interval.
  window.setTimeout(clearElement, 2000);
}

// Properties of History object

function showHistoryLength() {
  alert(history.length);
}

//Methods of the history Object

function newWin() {
    window.location.assign("goforward.html");
}

function nextPage() {
  window.history.forward();
}
//This function will not operate as their will not be a history to go back too.
function goTwoPagesBack() {
  window.history.go(-1);
}
