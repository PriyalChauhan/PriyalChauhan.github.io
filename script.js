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