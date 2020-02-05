window.onload = function() {
  let text = document.querySelector(".todo-input");
  let list = document.querySelector(".todo-list");
  let button = document.querySelector(".todo-button");

  function addTask() {
    if (text.value == "") {
      return text.value;
    } else {
      let itemList = document.createElement("div");
      let buttonClose = document.createElement("div");
      itemList.className = "todo-list__item";
      itemList.innerText = text.value;
      list.appendChild(itemList);
      buttonClose.className = "fa fa-trash-o de todo-list__item_close";
      itemList.appendChild(buttonClose);
      text.value = "";

      buttonClose.addEventListener("click", function(e) {
        e.target.offsetParent.style.display = "none";
      });

      itemList.addEventListener("click", function(e) {
        e.target.classList.toggle("closeTask");
      });
    }
  }

  // Создание нового элемента списка
  button.addEventListener("click", function() {
    addTask()
  });
  
  document.addEventListener("keypress", function(e) {
    addTask()
  });
};
