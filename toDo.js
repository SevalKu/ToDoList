const list = document.querySelector("ul#list");

for (let i = 0; i < list.children.length; i++) {
  addListEventListener(list.children[i]);
}

function addListEventListener(listElement) {
  listElement.addEventListener("mousedown", function () {
    this.classList.toggle("checked");
  });

  const closeSpan = document.createElement("span");
  closeSpan.className = "close";
  closeSpan.textContent = "x";

  listElement.innerHTML += closeSpan.outerHTML;

  listElement.children[0].addEventListener("mousedown", function () {
    this.parentElement.remove();
  });
}

function newElement() {
  const task = document.getElementById("task");

  if (task.value.trim()) {
    const taskListItem = document.createElement("li");
    taskListItem.textContent = task.value;

    addListEventListener(taskListItem);
    list.appendChild(taskListItem);

   
  }
}