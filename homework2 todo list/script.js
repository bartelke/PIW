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

// this function adds X-button in given list element (JQuerry):
function addX(element) {
  const $btnLine = $("<btn-span>");
  const $txt = $("<span>x</span>");
  $btnLine.addClass("btn btn-danger");
  $btnLine.append($txt);
  $btnLine.click(function() {
    $(this).parent().hide();
  });
  $(element).append($btnLine);
}
// Creating X buttons for already existing elements:
const element = document.getElementsByTagName("LI");
for (let i = 0; i < element.length; i++){
  addX(element[i]);
}