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

//-----local storage------
const arr = new Array();
function addData(){
    getData();
    arr.push({
        input1:document.getElementById("input1").value,
        emails:document.querySelectorAll("[type=email]")

        
    });

    localStorage.setItem("localData", JSON.stringify(arr));

}
console.log(arr)

function getData(){
    const str = localStorage.getItem("localData");
    if(str != null)
        arr= JSON.parse(str);
}

//dynamically generated email input field

    function  emailGen(){
        var quant = document.getElementById("quantity").value;
        var container = document.getElementById("container");
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
        }
        
        if(quant > 10){
            alert("please keep it low");
        } else{
            for(a=0; a<quant; a++){
            var emailGen = document.createElement("input");
            emailGen.type="email";
            emailGen.id="email"+ a;
            emailGen.name = "email" +a;
            emailGen.placeholder="Team Member's Email";
            container.appendChild(emailGen);
            
        }
        }
   
    };

//prevent form clicking button if value is more than 20


//submit event
form.addEventListener("submit", tableGen);

//function for table generator
function tableGen(e){e.preventDefault();
    var body = document.querySelector("body");
    const tblContainer = document.getElementById("tbl-Container");
    const tbldiv = document.createElement("div");
    tbldiv.id = "tbldiv";
    var table = document.createElement("table");
    table.setAttribute("id", "tableid");
    var tblbody = document.createElement("tbody");

    var input1 = document.querySelector("#input1").value;
    var quan   = document.querySelector("#quantity").value;

    const emails = container.querySelectorAll("[type=email]");

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
                    var tname = document.createTextNode(emails[0].value);
                    tbldata.appendChild(tname);
                    }if(i==2 && j==0){
                        var tname = document.createTextNode(emails[1].value);
                        tbldata.appendChild(tname);
                         }if(i==3 && j==0){
                            var tname = document.createTextNode(emails[2].value);
                            tbldata.appendChild(tname);
                        }if(i==4 && j==0){
                            var tname = document.createTextNode(emails[3].value);
                            tbldata.appendChild(tname);
                            }if(i==5 && j==0){
                                var tname = document.createTextNode(emails[4].value);
                                tbldata.appendChild(tname);
                                }if(i==6 && j==0){
                                    var tname = document.createTextNode(emails[5].value);
                                    tbldata.appendChild(tname);
                                    }
                                    if(i==7 && j==0){
                                        var tname = document.createTextNode(emails[6].value);
                                        tbldata.appendChild(tname);
                                        }if(i==8 && j==0){
                                            var tname = document.createTextNode(emails[7].value);
                                            tbldata.appendChild(tname);
                                            }if(i==9 && j==0){
                                                var tname = document.createTextNode(emails[8].value);
                                                tbldata.appendChild(tname);
                                                }if(i==10 && j==0){
                                                    var tname = document.createTextNode(emails[9].value);
                                                    tbldata.appendChild(tname);
                                                    }
                    tblrow.appendChild(tbldata);
            }

        tblbody.appendChild(tblrow);

        }
        console.log
table.appendChild(tblbody);
tbldiv.appendChild(table);
tblContainer.appendChild(tbldiv);
body.appendChild(tblContainer);
    
document.querySelector(".bg-modal2").style.display="none";
document.getElementById("container").innerHTML = "";
form.reset();
}



