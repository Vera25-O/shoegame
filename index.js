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
}, 3000);