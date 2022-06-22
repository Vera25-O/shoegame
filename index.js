//sliding image
var images = [
    "heels.jpeg",
    "orange.jpeg",
    "glowy.jpeg"
    
  ]
  var imageHead = document.getElementById("images");
  var i = 0;
setInterval(function() {
      imageHead.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
        i =  0;
      }
}, 2000);

//text color
var colors = ["blue", "pink", "black"]
var currentColor = 0
var textColor = document.getElementsByTagName("h1")

function changeColor() {
  --currentColor
  if (currentColor < 0) currentColor = colors.length -1
  for (var i = 0; i < textColor.length; i++) {
    textColor[i].style.color = colors[(currentColor +i) % colors.length]
  }
}

setInterval(changeColor, 2000)