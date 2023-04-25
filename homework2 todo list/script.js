function onAdd() {
    const inputValue = document.getElementById("input").value;
    const element = document.createElement("li");
    const textNode = document.createTextNode(inputValue);
    element.appendChild(textNode);
  if (inputValue === '') {
    alert("Input field is empty");
  } else {
    document.getElementById("list").appendChild(element);
  }
  document.getElementById("input").value = "";
  addX(element);
}

// this function adds X-button in given list element:
function addX(element){
    const btnLine = document.createElement("btn-span");
    const txt = document.createTextNode("x");
    btnLine.className = "btn btn-danger";
    btnLine.appendChild(txt);
    btnLine.onclick = function() {
      const div = this.parentElement;
      div.style.display = "none";
    };
    element.appendChild(btnLine);
}
// Creating X buttons for already existing elements:
const element = document.getElementsByTagName("LI");
for (let i = 0; i < element.length; i++){
  addX(element[i]);
}

// Deleting element:
// const close = document.getElementsByClassName("btn-danger");
// for (let i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     const div = this.parentElement;
//     div.style.display = "none";
//   }
// }