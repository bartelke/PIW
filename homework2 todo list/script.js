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
}