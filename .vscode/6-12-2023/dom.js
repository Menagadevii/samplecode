function change(){
    let vm=document.getElementById("change").textContent="DOM"
}

let element=document.getElementById("DOM")
document.getElementById("doc").innerHTML=element.innerHTML +"DOM";
document.getElementsByTagName("p").innerHTML =""

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }