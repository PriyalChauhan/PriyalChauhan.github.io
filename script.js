    // When the user scrolls down 37px from the top of the document, resize the header 
    window.onscroll = function() {scrollFunction()};
    const conDef = document.querySelector(".logo-Container").innerHTML;
    function scrollFunction() {
      if (document.body.scrollTop > 37 || document.documentElement.scrollTop > 37) {
        document.querySelector(".logo-Container").innerHTML = "<a href='index.html'> <h1>WFHT</h1>"+"<img style ='position:absolute; top:1px; left:130px;' src='box.png' widht='70' height='70'></a>" ;
        document.querySelector(".logo-Container").style.width ="166px";
        document.querySelector(".logo-Container").style.height ="37px";
      } else {
        document.querySelector(".logo-Container").innerHTML= conDef ;
        document.querySelector(".logo-Container").style.width ="100%";
        document.querySelector(".logo-Container").style.transition = "1s";

      }
 }

  // create-task button function
  const box = document.querySelector(".box");
  
  document.querySelector(".taskBtn").addEventListener("click",
function(){
  const taskbox = document.createElement("div"); //taskbox div-------
  taskbox.setAttribute("class","taskbox");
  taskbox.setAttribute("draggable", "true");
  taskbox.setAttribute("ondragstart","onDragStart(event)")
//textbox----------
  const textbox = document.createElement("input");
  textbox.type = "textbox";
  textbox.setAttribute("class","textbox");
  taskbox.appendChild(textbox);
  box.appendChild(taskbox);
  
})
  
// draggable functionality
function onDragStart(event) {
  event
    .dataTransfer
    .setData('text/html/plain', event.target.id);
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event
    .dataTransfer
    .getData('text/html/plain');

    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    dropzone.appendChild(draggableElement);
    event
    .dataTransfer
    .clearData();
}