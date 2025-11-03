// function addRow() {
//   let table = document.getElementById("dataTable");
//   let newRow = table.rows[1].cloneNode(true);
//   newRow.querySelectorAll("input").forEach(i => i.value = "");
//   table.appendChild(newRow);
// }

function addRow(btn) {
  let table = document.getElementById("dataTable");
  let row = btn.parentNode.parentNode;
  let newRow = row.cloneNode(true);
  newRow.querySelectorAll("input").forEach(i => i.value = "");
  row.parentNode.insertBefore(newRow, row.nextSibling);
}

function removeRow(btn) {
  let row = btn.parentNode.parentNode;
  let table = document.getElementById("dataTable");
  if (table.rows.length > 2) row.remove();
}

document.addEventListener("keydown", function(e) {
  if (e.target.tagName !== "INPUT") return;

  // Enter → move down
  if (e.key === "Enter") {
    e.preventDefault();
    let cellIndex = e.target.closest("td").cellIndex;
    let currentRow = e.target.closest("tr");
    let nextRow = currentRow.nextElementSibling;
    if (nextRow) {
      let nextInput = nextRow.cells[cellIndex]?.querySelector("input");
      if (nextInput) nextInput.focus();
    }
  }

  // Tab → move right
  if (e.key === "Tab") {
    e.preventDefault();
    let currentCell = e.target.closest("td");
    let nextCell = currentCell.nextElementSibling;
    if (nextCell) {
      let nextInput = nextCell.querySelector("input");
      if (nextInput) nextInput.focus();
    }
  }

  // ArrowRight → move right
  if (e.key === "ArrowRight") {
    e.preventDefault();
    let currentCell = e.target.closest("td");
    let nextCell = currentCell.nextElementSibling;
    if (nextCell) {
      let nextInput = nextCell.querySelector("input");
      if (nextInput) nextInput.focus();
    }
  }

  // ArrowLeft → move left
  if (e.key === "ArrowLeft") {
    e.preventDefault();
    let currentCell = e.target.closest("td");
    let prevCell = currentCell.previousElementSibling;
    if (prevCell) {
      let prevInput = prevCell.querySelector("input");
      if (prevInput) prevInput.focus();
    }
  }

  // ArrowDown → move down
  if (e.key === "ArrowDown") {
    e.preventDefault();
    let cellIndex = e.target.closest("td").cellIndex;
    let currentRow = e.target.closest("tr");
    let nextRow = currentRow.nextElementSibling;
    if (nextRow) {
      let nextInput = nextRow.cells[cellIndex]?.querySelector("input");
      if (nextInput) nextInput.focus();
    }
  }

  //ArrowUp → move up
  if (e.key === "ArrowUp") {
    e.preventDefault();
    let cellIndex = e.target.closest("td").cellIndex;
    let currentRow = e.target.closest("tr");
    let prevRow = currentRow.previousElementSibling;
    if (prevRow) {
      let prevInput = prevRow.cells[cellIndex]?.querySelector("input");
      if (prevInput) prevInput.focus();
    }
  }
});
