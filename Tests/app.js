/* draggable element */
const item = document.querySelector(".item");

item.addEventListener("dragstart", dragStart);

function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
  setTimeout(() => {
    e.target.classList.add("hide");
  }, 0);
}

/* drop targets */
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("dragenter", dragEnter);
  box.addEventListener("dragover", dragOver);
  box.addEventListener("dragleave", dragLeave);
  box.addEventListener("drop", drop);
});

function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add("drag-over");
}

function dragOver(e) {
  e.preventDefault();
  e.target.classList.add("drag-over");
}

function dragLeave(e) {
  e.target.classList.remove("drag-over");
}

function drop(e) {
  e.target.classList.remove("drag-over");

  // get the draggable element
  const id = e.dataTransfer.getData("text/plain");
  const draggable = document.getElementById(id);

  // add it to the drop target
  e.target.appendChild(draggable);

  // display the draggable element
  draggable.classList.remove("hide");
}

function startTimer() {
  min = 5;
  seconds = 00;
  setInterval(() => {
    document.getElementById("timer").innerHTML = `${min}:${seconds}`;
    if (seconds == 0) {
      if (min == 0) {
        document.querySelector(".timeout").style.display = "block";
        document.querySelector(".timer").style.display = "none";
        return;
      }
      min--;
      seconds = 59;
    }
    seconds--;
  }, 50);
}
