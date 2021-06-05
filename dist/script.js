let item = document.getElementById("item");
let button = document.getElementById("button");
let lista = document.getElementById("lista");
let itens = document.getElementsByTagName("li")
let itensButtons = document.getElementsByClassName("remove")


function adicionar(){
  let li = document.createElement("li");
  let xButton = document.createElement("button");
  xButton.innerHTML = "X";
  xButton.className = "remove";
  li.appendChild(xButton);
  
  let text = document.createTextNode(item.value)
  li.appendChild(text);
  lista.appendChild(li);
  item.value = "";
  buttonEvents()
}


function buttonEvents(){
  for(i = 0, i < itensButtons.lenght, i=i+1)
    {
  itensButtons[i].addEventListener("click",deleteItem)
  }
}

function deleteItem(){
  this.parentElement.remove()
}


button.addEventListener("click",adicionar);
buttonEvents()