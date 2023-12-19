

let draggedElement = null;
let elemTop, elemLeft;
let pickedShape;
let zIndex = 100;
let level = 1;
let mode = complexity == 3 ? "dễ" : complexity == 4 ? "trung bình" : "khó";



function openWinningPopup() {
  document.getElementById('popup').style.display = 'block';
}

function closeWinningPopup() {
  document.getElementById('popup').style.display = 'none';
  openMenu();
}

function setTemplate() {
  document.getElementById('template').src = templateData.find(e => e.mode === mode).templates[level - 1].url;
  document.getElementById('mode').innerText = mode;
}



function changeLevel(modeVal) {
  mode = modeVal;
  complexity = mode == "dễ" ? 3 : mode == "trung bình" ? 4 : 5;
  setTemplate();
  createBoard(complexity);
  document.getElementById('template').src = templateData.find(e => e.mode === mode).templates[level - 1].url;
  document.getElementById('mode').innerText = mode;
  document.getElementById("startMenu").style.display = 'none';
  document.getElementById("level").innerText = level;
}

function reset() {
  shapeRect.forEach(shapeRect => {
      const shapeTag = document.getElementById(shapeRect.name);
      document.getElementById(shapeRect.name).remove();
      document.getElementById(shapeRect.name + "Container").appendChild(shapeTag);
      console.log(shapeRect.name, shapeRect.rect.left, shapeRect.rect.top);
      resetShapePosition(shapeRect.name, shapeRect.rect.left, shapeRect.rect.top);
      shapeTag.classList.remove("dropped");
    }
  )
  // level = 1;
  document.getElementById('popupMenuWarning').style.display = 'none';
}

function reDrawNewLevel() {
  document.getElementById('template').src = templateData.find(e => e.mode === mode).templates[level - 1].url;
  shapeRect.forEach(shapeRect => {
    const shapeTag = document.getElementById(shapeRect.name);
    document.getElementById(shapeRect.name).remove();
    document.getElementById(shapeRect.name + "Container").appendChild(shapeTag);
    resetShapePosition(shapeRect.name, shapeRect.rect.left, shapeRect.rect.top)
  }
  )
}

function openMenuWarningPopup() {
  document.getElementById("popupMenuWarning").style.display = 'block';
}

function closeMenuWarningPopup() {
  document.getElementById("popupMenuWarning").style.display = 'none';
}

function openMenu() {
  reset();
  level = 1;
  document.getElementById("startMenu").style.display = '';
  document.getElementById("tutor").style.display = 'none';
}

function tutorial() {
  document.getElementById("tutor").style.display = 'flex';
  document.getElementById("tutor").style.zIndex = 100000;
}

function submit() {
  // console.log(level, templateData.find(e => e.mode === mode).templates.length);
  const droppedElements = document.querySelectorAll(".dropped");
  let flag = true;
  const filterMode = templateData.find(e => e.mode === mode).templates[level - 1];

  if (droppedElements.length == filterMode.shapes.length) {
    let indexArray = [];
    droppedElements.forEach(elem => {
      let arr = [];
      const filterShape = filterMode.shapes.find(e => e.name === elem.id);
      arr.push(elem.id);
      arr.push(parseInt(window.getComputedStyle(elem).getPropertyValue('z-index')));
      indexArray.push(arr);
      if (filterShape.coordinate[1] != elem.parentElement.dataset.row || filterShape.coordinate[0] != elem.parentElement.dataset.col) {
        flag = false;
      };
    });
    console.log(indexArray);
    filterMode.specialties.forEach(elem => {
      console.log(findIndexBindValue(indexArray, elem[0]), findIndexBindValue(indexArray, elem[1]));
      console.log();
      if(findIndexBindValue(indexArray, elem[0]) >= findIndexBindValue(indexArray, elem[1])) flag = false;
    })
  } else {
    flag = false;
  }
  if (flag) {
    if (level == templateData.find(e => e.mode === mode).templates.length) {
      openWinningPopup(); 
      zIndex = 100;
    } else {
      level++;
      document.getElementById('popupPassLevel').style.display = "block";
    }
  } else {
    document.getElementById('popupFailLevel').style.display = "block";
  }

}

function findIndexBindValue(arr, targetElement) {
  let index;
  arr.forEach(elem => {
    if (elem[0] === targetElement) index = elem[1];
  })
  return index;
}

function closeFailLevelPopup(){
  document.getElementById('popupFailLevel').style.display = "none";
}

function closePassLevelPopup(){
  reDrawNewLevel();
  document.getElementById('popupPassLevel').style.display = "none";
  document.getElementById('level').innerText = level;
}

function resetShapePosition(shapeId, left, top) {
  const shape = document.getElementById(shapeId);
  shape.style.position = 'absolute';
  shape.style.left = `${left}px`;
  shape.style.top = `${top}px`;
}

function getDataForShape(e) {
  for (const shape of shapeData) {
    if (shape.name === e) return shape.coordinateBalance;
  }
}

function startDrag(e) {
  draggedElement = e.target;
  draggedElement.style.position = 'absolute';
  pickedShape = e.target.id;
  elemTop = draggedElement.offsetTop;
  elemLeft = draggedElement.offsetLeft;
  document.getElementById(pickedShape).style.zIndex = zIndex;
  zIndex++;
  console.log(zIndex);
}

function drag(e) {
  if (draggedElement) {
    const x = e.clientX - (draggedElement.width / 2);
    const y = e.clientY - (draggedElement.height / 2);
    draggedElement.style.left = `${x}px`;
    draggedElement.style.top = `${y}px`;
  }
}

function endDrag() {
  if (draggedElement) {
    const rect = draggedElement.getBoundingClientRect();
    const cell = findDropCell(rect);
    if (cell) {
      const row = cell.dataset.row;
      const col = cell.dataset.col;
      // console.log(parseInt(row) + getDataForShape(pickedShape)[0], complexity);
      // Cover cases that shape stay some of it part out board
      if (parseInt(row) + getDataForShape(pickedShape)[0] < complexity && parseInt(col) + getDataForShape(pickedShape)[1] < complexity) {
        console.log(`Dropped at row: ${row}, col: ${col}`);

        // Set the position relative to the cell
        const cellRect = cell.getBoundingClientRect();
        draggedElement.style.left = `${cellRect.left}px`;
        draggedElement.style.top = `${cellRect.top}px`;

        // Append the dragged element to the cell
        cell.appendChild(draggedElement);
        draggedElement.classList.add("dropped");
      } else {
        console.log(2);
        draggedElement.style.position = 'absolute';
        draggedElement.style.left = elemLeft + 'px';
        draggedElement.style.top = elemTop + 'px';
      }
    } else {
      draggedElement.style.position = 'absolute';
      draggedElement.style.left = elemLeft + 'px';
      draggedElement.style.top = elemTop + 'px';
    }
    draggedElement = null;
  }
}

function findDropCell(rect) {
  return boardCells.find(cell => {
    const cellRect = cell.getBoundingClientRect();
    return (
      rect.left < cellRect.right - 50 &&
      rect.right > cellRect.left - 50 &&
      rect.top < cellRect.bottom - 50 &&
      rect.bottom > cellRect.top - 50
    );
  });
}

bottomShape.addEventListener('mousedown', startDrag);
curveBottomRShape.addEventListener('mousedown', startDrag);
crescentRShape.addEventListener('mousedown', startDrag);
bottom2Shape.addEventListener('mousedown', startDrag);
aslantRShape.addEventListener('mousedown', startDrag);
aslant2RShape.addEventListener('mousedown', startDrag);

document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', endDrag);

// Mobile/touch support
bottomShape.addEventListener('touchstart', startDrag);
curveBottomRShape.addEventListener('touchstart', startDrag);
crescentRShape.addEventListener('touchstart', startDrag);
bottom2Shape.addEventListener('touchstart', startDrag);
aslantRShape.addEventListener('touchstart', startDrag);
aslant2RShape.addEventListener('touchstart', startDrag);

document.addEventListener('touchmove', (e) => {
  e.preventDefault(); // Prevent scrolling while dragging on mobile
  drag(e.touches[0]);
});

document.addEventListener('touchend', endDrag);