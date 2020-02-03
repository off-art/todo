window.onload = function() {
  let text = document.querySelector(".todo-input");
  let list = document.querySelector(".todo-list");
  let button = document.querySelector(".todo-button");

  // Создание нового элемента списка
  button.addEventListener('click', function() {
    if (text.value == "") {
      return text.value;
    } else {
      let itemList = document.createElement("div");
      let buttonClose = document.createElement("div");
      itemList.className = "todo-list__item";
      itemList.innerText = text.value;
      list.appendChild(itemList);
      buttonClose.className = "todo-list__item_close";
      buttonClose.innerText = "X";
      itemList.appendChild(buttonClose);
      text.value = "";

      buttonClose.addEventListener('click', function(e) {
        console.log(e)
      })
    }
  })
}
