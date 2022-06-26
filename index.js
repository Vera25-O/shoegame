
function displayImageAndDetails(){
    const imageDetails = fetch (" http://localhost:3000/shoes/2")
    .then(resp => resp.json())
    .then(data => renderImageAndDetails(data))
    return imageDetails
}
displayImageAndDetails()

let imgName = document.getElementById('image-name')
let imgSrc = document.getElementById('card-image')
let imgLikesCount = document.getElementById('like-count')
// let imgCommentList = document.getElementById('comments-list')
//Getting the image, title and the comments (GET METHOD)




function renderImageAndDetails(imageDetails){
  imgName.textContent = imageDetails.name;
  imgSrc.src = imageDetails.image;
  imgLikesCount.textContent =`${imageDetails.likes} likes`;
 
  for (i=0; i<imageDetails.length; i++){
    document.write(
        imageDetails.image + "<br />"
    );
  }
  
}






// like button 
function dom(){
const toggleHeart = () => {
  const likeButton = document.querySelector("#like-button")
    
  likeButton.addEventListener("click", (event)  =>{
 if(likeButton.textContent === "♥"){
    likeButton.textContent = "♡"
 } else {
    likeButton.textContent = "♥";
    likeCounter();
 }
 })
}

let n=0
const likeCounter = () => {
 const   likeCount = document.querySelector("#like-count");
 n++;
 likeCount.textContent = `${n} likes`
}

toggleHeart();

}
















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
var colors = ["white", "pink", "black"]
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

if(document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded",dom)
} else{
  dom();
}



//POSTBUTTON
// const myForm = document.getElementById("myForm");

// myForm.addEventListener("submit", (e) => {
//   e.preventDefault();
// console.log("submitted")
// });

const ul = document.querySelector('#comments');
const commentSection = ()=>{
    fetch("http://localhost:3000/")
    .then((response)=>response.json())
    .then((data)=>fetchComments(data))
}

const fetchComments = (information)=>{
    information.forEach((element)=>{
        const li = document.createElement('li');
        li.textContent = `${element.content}`;
        ul.appendChild(li);
        removeComments(li,element.id);
    })
}

commentSection();

const addComments = ()=>{
    const form = document.querySelector('#myform');
    const inputBar = document.querySelector('.input');
    form.addEventListener('submit',(event)=>{
        event.preventDefault();
        const li = document.createElement('li');
        li.textContent = inputBar.value;
        ul.appendChild(li);
        postComments(inputBar.value);
        removeComments(li);
    })
}

addComments()

// 


const removeComments = (listItem,item)=>{
    listItem.addEventListener('click',(event)=>{
        listItem.remove();
        deleteComments(item);
    })
}

const deleteComments = (itemToDelete)=>{
    fetch(`http://localhost:3000//${itemToDelete}`,{
        method:'DELETE'
    })
}

  










