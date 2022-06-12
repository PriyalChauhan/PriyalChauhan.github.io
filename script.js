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
  const taskId = document.querySelector("#taskId");
  document.querySelector(".taskBtn").addEventListener("click",
function(){
  const task = document.createElement("input");
  task.type = "textbox";
  task.setAttribute("class","task");
  task.setAttribute("value"," working ");
  task.setAttribute("draggable", "true");
  taskId.appendChild(task);
  
})
  
// draggable functionality
const tasks = document.querySelectorAll('.task')
const boxes = document.querySelectorAll('.box')

tasks.forEach(task => {
  task.addEventListener('dragstart', () => {
    task.classList.add('dragging')
  } )

task.addEventListener('dragend', () => {
  task.classList.remove('dragging')
})
})

boxes.forEach(box => {
  box.addEventListener('dragover', e => {
    e.preventDefault()
    const tasku = document.querySelectorAll('.dragging')
    box.appendChild(tasku)
    taskId.appendChild(box)
    
  })
})