//creating variale for form
var form = document.getElementById("nameForm");

//bg-modal1
document.querySelector("#button").addEventListener("click",
function(){document.querySelector(".bg-modal1").style.display = "flex";
});

document.querySelector(".close").addEventListener("click",
function(){document.querySelector(".bg-modal1").style.display= "none";
});

// bg-modal2
document.querySelector("#next").addEventListener("click",
function(){
    document.querySelector(".bg-modal1").style.display = "none";
    document.querySelector(".bg-modal2").style.display = "flex";
});
document.querySelector(".close1").addEventListener("click",
function(){
    document.querySelector(".bg-modal2").style.display= "none";
});

//dynamically generated email input field

    function  emailGen(){
        var quant = document.getElementById("quantity").value;
        var container = document.getElementById("container");
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
        }
        for(a=0; a<quant; a++){
            var emailGen = document.createElement("input");
            emailGen.type="email";
            emailGen.id="email"+ a;
            emailGen.placeholder="Team Member's Email";
            container.appendChild(emailGen);
        }
    
    };

//submit event
form.addEventListener("submit", tableGen);

//function for table generator
function tableGen(e){e.preventDefault();
    var body = document.getElementsByTagName("body")[0];
    var table = document.createElement("table");
    table.setAttribute("id", "tableid");
    var tblbody = document.createElement("tbody");

    var input1 = document.querySelector("#input1").value;
    var quan   = document.querySelector("#quantity").value;
    var input2 = document.querySelector("#email0").value;
    var input3 = document.querySelector("#email1").value;
    var input4 = document.querySelector("#email2").value;
    

    //table rows loop
    for(i=0; i<=quan; i++){
        var tblrow = document.createElement("tr");
        
        //table coloumn loop
        for(j=0; j<1; j++){
        var tbldata = document.createElement("td");
        
            if(i==0 && j==0){
                var pname = document.createTextNode(input1);
                tbldata.appendChild(pname);
                }
            if(i==1 && j==0){
                    var tname = document.createTextNode(input2);
                    tbldata.appendChild(tname);
                    }if(i==2 && j==0){
                        var tname = document.createTextNode(input3);
                        tbldata.appendChild(tname);
                         }if(i==3 && j==0){
                            var tname = document.createTextNode(input4);
                            tbldata.appendChild(tname);
                        }
                    tblrow.appendChild(tbldata);
            }

        tblbody.appendChild(tblrow);

        }
table.appendChild(tblbody);
body.appendChild(table);

document.querySelector(".bg-modal2").style.display = "none";

};




