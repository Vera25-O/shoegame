function renderImageAndDetails() {
  // 1. get a reference to elements on page
  // TODO: should these elements have default content like image, text, etc?
  const imgName = document.getElementById('image-name')
  const imgSrc = document.getElementById('card-image')
  const imgLikesCount = document.getElementById('like-count')

  
  // 2. fetch data from api
  fetch("https://raw.githubusercontent.com/Vera25-O/shoegame/main/db.json")
    .then((resp) => resp.json())
    .then((imageDetails) => {
      imageDetails.shoes.forEach((element)=>{
      imgName.textContent = element.name;
      imgSrc.src = element.image;
      imgLikesCount.textContent = `${element.likes} likes`;

  
    })
}) 
}
renderImageAndDetails();

// like button 
function dom() {
  const toggleHeart = () => {
    const likeButton = document.querySelector("#like-button")

    likeButton.addEventListener("click", (event) => {
      if (likeButton.textContent === "♥") {
        likeButton.textContent = "♡"
      } else {
        likeButton.textContent = "♥";
        likeCounter();
      }
    })
  }

  let n = 0
  const likeCounter = () => {
    const likeCount = document.querySelector("#like-count");
    n++;
    likeCount.textContent = `${n} likes`
  }

  toggleHeart();

}
















//sliding image
var images = [
  "images/heels.jpeg",
  "images/orange.jpeg",
  "images/glowy.jpeg"
]

var imageHead = document.getElementById("images");
var i = 0;
setInterval(function () {
  imageHead.style.backgroundImage = "url(" + images[i] + ")";
  i = i + 1;
  if (i == images.length) {
    i = 0;
  }
}, 2000);

//text color
var colors = ["white", "pink", "black"]
var currentColor = 0
var textColor = document.getElementsByTagName("h1")

function changeColor() {
  --currentColor
  if (currentColor < 0) currentColor = colors.length - 1
  for (var i = 0; i < textColor.length; i++) {
    textColor[i].style.color = colors[(currentColor + i) % colors.length]
  }
}

setInterval(changeColor, 2000)

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", dom)
} else {
  dom();
}


//comment
const myForm = document.getElementById("myForm")
  myForm.addEventListener("submit", (e) => {
    e.preventDefault();
console.log("submitted comment");
  });
