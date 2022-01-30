if(i==2 && j==0){
    var tname = document.createTextNode(input3);
    tbldata.appendChild(tname);
    }if(i==3 && j==0){
        var tname = document.createTextNode(input4);
        tbldata.appendChild(tname);
        }if(i==4 && j==0){
            var tname = document.createTextNode(input5);
            tbldata.appendChild(tname);
            }if(i==5 && j==0){
                var tname = document.createTextNode(input6);
                tbldata.appendChild(tname);
                }if(i==6 && j==0){
                    var tname = document.createTextNode(input7);
                    tbldata.appendChild(tname);
                    }
                    if(i==7 && j==0){
                        var tname = document.createTextNode(input8);
                        tbldata.appendChild(tname);
                        }if(i==8 && j==0){
                            var tname = document.createTextNode(input9);
                            tbldata.appendChild(tname);
                            }if(i==9 && j==0){
                                var tname = document.createTextNode(input10);
                                tbldata.appendChild(tname);
                                }if(i==10 && j==0){
                                    var tname = document.createTextNode(input11);
                                    tbldata.appendChild(tname);
                                    }
                

var input2 = document.querySelector("#email0").value;
var input3 = document.querySelector("#email1").value;
var input4 = document.querySelector("#email2").value;
var input5 = document.querySelector("#email3").value;
var input6 = document.querySelector("#email4").value;
var input7 = document.querySelector("#email5").value;
var input8 = document.querySelector("#email6").value;
var input9 = document.querySelector("#email7").value;
var input10 = document.querySelector("#email8").value;
var input11 = document.querySelector("#email9").value;






    var einput = [];
    var emailinput = document.querySelectorAll(".email");
    var emailArray = [...emailinput];

    for(var c=0; c<quan; c++){
        einput[c] = emailArray.forEach(element);
    }





//likely to work
    var x = document.querySelector("#email");
    var w;
    var einput = [];
    for (w = 0; w < quan; w++) {
      einput[w]=x[w].value;
    }


    if(i==1 && j==0){
        var tname = document.createTextNode(emails[0].value);
        tbldata.appendChild(tname);
        }if(i==2 && j==0){
            var tname = document.createTextNode(emails[1].value);
            tbldata.appendChild(tname);
             }if(i==3 && j==0){
                var tname = document.createTextNode(emails[2].value);
                tbldata.appendChild(tname);
            }