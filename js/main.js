// change icon darkmode toggle

var btnDarkMode = document.querySelector(".mybtn.mybtn--dark-light");

var iconDefaulMode = document.querySelector("#iconLight");
var iconDarkMode = document.querySelector("#iconDark");

iconDefaulMode.style.display = "none";
iconDark.style.display = "block";

btnDarkMode.onclick = function () {

  // change icon
  if (iconDefaulMode.style.display === "block") {
    iconDefaulMode.style.display = "none";
  } else {
    iconDefaulMode.style.display = "block";
  }

  if (iconDarkMode.style.display === "none") {
    iconDarkMode.style.display = "block";
  } else {
    iconDarkMode.style.display = "none";
  }

  // add class darkmode

  var nodeList = document.querySelectorAll('body > *');
  for( var index = 0; index < nodeList.length; index++){
    var x = nodeList[index];
    x.classList.toggle('dark-mode');
    
  }
};

