// var prev = "one";// id of initial element
// function imageChange(id) {
//     if (prev==id) {
//         return;
//     }
//   document.getElementById(id).style.width = "56px";
//   document.getElementById(id).style.height = "56px";
//   document.getElementById(id).style.border = "3px solid black";
//   let src = document.getElementById(id).getAttribute("src");
//   let alt = document.getElementById(id).getAttribute("alt");
//   document.getElementById("display-image").setAttribute("src", src);
//   document.getElementById("display-image").setAttribute("alt", alt);

//   revertChange(prev);
//   prev = id;
// }
// function revertChange(id) {
//   document.getElementById(id).style.setProperty("width", "50px");
//   document.getElementById(id).style.setProperty("height", "50px");
//   document.getElementById(id).style.setProperty("border", "0px");
// }
var prev = "one";// id of initial element
function imageChange(id) {
    if (prev==id) {
        return;
    }
  document.getElementById(id).style.width = "56px";
  document.getElementById(id).style.height = "56px";
  document.getElementById(id).style.border = "3px solid black";
  let src = document.getElementById(id).getAttribute("src");
  let alt = document.getElementById(id).getAttribute("alt");

  var image = document.getElementById("display-image");
  image.style.opacity = 0; 
  image.setAttribute("alt", alt);
  setTimeout(function() {
    image.setAttribute("src", src);
    image.style.opacity = 1; 
  }, 400);
  revertChange(prev);
  prev = id;
}
function revertChange(id) {
  document.getElementById(id).style.setProperty("width", "50px");
  document.getElementById(id).style.setProperty("height", "50px");
  document.getElementById(id).style.setProperty("border", "0px");
}
