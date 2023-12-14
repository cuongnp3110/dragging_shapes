const boardComplexity = {
  easy: 3,
  medium: 4,
  hard: 5
}
const shapeData = [
  {
    name: "bottomShape",
    coordinateBalance: [1, 0],
    color: "#ff6384"
  },
  {
    name: "curveBottomRShape",
    coordinateBalance: [1, 1],
    color: "#36a2eb"
  },
  {
    name: "crescentRShape",
    coordinateBalance: [1, 0],
    color: "#ffce56"
  },
  {
    name: "bottom2Shape",
    coordinateBalance: [2, 0],
    color: "#9966ff"
  },
  {
    name: "aslantRShape",
    coordinateBalance: [1, 1],
    color: "#4bc0c0"
  },
  {
    name: "aslant2RShape",
    color: "#FF7633"
  },
]


let complexity = boardComplexity.easy;
const bottomShape = document.getElementById('bottomShape');
const curveBottomRShape = document.getElementById('curveBottomRShape');
const crescentRShape = document.getElementById('crescentRShape');
const bottom2Shape = document.getElementById('bottom2Shape');
const aslantRShape = document.getElementById('aslantRShape');
const aslant2RShape = document.getElementById('aslant2RShape');

const board = document.getElementById('board');
const boardCells = [];

function drawBottomShape() {
  const ctx = bottomShape.getContext('2d');
  ctx.beginPath();
  ctx.arc(bottomShape.width / 2, bottomShape.height / 4, 25, 0, 2 * Math.PI);
  ctx.arc(bottomShape.width / 2, (bottomShape.height / 4) * 3, 25, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fillStyle = '#ff6384'; // Set the fill color
  ctx.fill();

  ctx.fillRect(25, 50, bottomShape.width - 50, bottomShape.height - 100);
}

function drawCurveBottomRShape() {
  const ctx = curveBottomRShape.getContext('2d');
  ctx.beginPath();
  ctx.arc(curveBottomRShape.width / 4, curveBottomRShape.height / 4, 25, 0, 2 * Math.PI);
  ctx.arc((curveBottomRShape.width / 4) * 3, (curveBottomRShape.height / 4) * 3, 25, 0, 2 * Math.PI);
  ctx.arc(150, 50, 125, 0.5 * Math.PI, 1 * Math.PI);

  ctx.closePath();
  ctx.fillStyle = '#36a2eb';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(150, 50, 74, 0.5 * Math.PI, 1 * Math.PI);
  ctx.clip();
  ctx.clearRect(0, 0, 200, 200);
}

function drawCrescentRShape() {
  const ctx = crescentRShape.getContext('2d');
  ctx.beginPath();
  ctx.arc(crescentRShape.width / 3, crescentRShape.height / 4, 25, 0, 2 * Math.PI);
  ctx.arc(crescentRShape.width / 3, (crescentRShape.height / 4) * 3, 25, 0, 2 * Math.PI);
  ctx.arc(crescentRShape.width / 3, crescentRShape.height / 2, 75, 1.5 * Math.PI, 2.5 * Math.PI);

  ctx.fillStyle = '#ffce56'; // Set the fill color
  ctx.fill();

  ctx.beginPath();
  ctx.arc(50, 100, 27, 0, 2 * Math.PI);
  ctx.clip();
  ctx.clearRect(0, 0, 200, 200);
}

function drawBottom2Shape() {
  const ctx = bottom2Shape.getContext('2d');
  ctx.beginPath();
  ctx.arc(bottom2Shape.width / 2, bottom2Shape.height / 6, 25, 0, 2 * Math.PI);
  ctx.arc(bottom2Shape.width / 2, (bottom2Shape.height / 6) * 5, 25, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fillStyle = '#9966ff'; // Set the fill color
  ctx.fill();

  ctx.fillRect(25, 50, bottom2Shape.width - 50, bottom2Shape.height - 100);
}

function drawAslantRShape() {
  const ctx = aslantRShape.getContext('2d');
  ctx.beginPath();
  ctx.arc(aslantRShape.width / 4, aslantRShape.height / 4, 25, 0, 2 * Math.PI);
  ctx.arc((aslantRShape.width / 4) * 3, (aslantRShape.height / 4) * 3, 25, 0, 2 * Math.PI);

  ctx.closePath();
  ctx.fillStyle = '#4bc0c0';
  ctx.fill();
  // ctx.fillRect(25, 50, 50, 100);
  ctx.rotate(Math.PI / 4);

  //Pythago segment
  ctx.fillRect(Math.sqrt(((aslantRShape.width / 4) ** 2) + ((aslantRShape.height / 4) ** 2)), -25, Math.sqrt(((aslantRShape.width / 2) ** 2) + ((aslantRShape.height / 2) ** 2)), 50);
}

function drawAslant2RShape() {
  const ctx = aslant2RShape.getContext('2d');
  ctx.beginPath();
  ctx.arc(aslant2RShape.width / 4, aslant2RShape.height / 4, 25, 0, 2 * Math.PI);
  ctx.arc((aslant2RShape.width / 4) * 3, (aslant2RShape.height / 4) * 3, 25, 0, 2 * Math.PI);

  ctx.closePath();
  ctx.fillStyle = '#4bc0c0';
  ctx.fill();
  // ctx.fillRect(25, 50, 50, 100);

  //Trigonometric
  ctx.rotate(Math.PI - (90 + Math.atan(200 / 100) * (180 / Math.PI)));

  //Pythago segment
  ctx.fillRect(Math.sqrt(((aslant2RShape.width / 4) ** 2) + ((aslant2RShape.height / 4) ** 2)), -25, Math.sqrt(((aslant2RShape.width / 2) ** 2) + ((aslant2RShape.height / 2) ** 2)), 50);

  // const a = 200; // Cạnh cao
  // const b = 100; // Cạnh đáy

  // // Tính cạnh huyền c
  // const c = Math.sqrt(a**2 + b**2);

  // // Tính góc C (đổi từ radian sang độ)
  // const angleC = Math.atan(a / b) * (180 / Math.PI);

  // console.log(`Cạnh huyền c: ${c}`);
  console.log(Math.PI - (90 + Math.atan(200 / 100) * (180 / Math.PI)));

}

function createBoard(complexity) {
  complexity = complexity == undefined ? 3 : complexity;
  board.style.gridTemplateColumns = `repeat(${complexity}, 1fr)`;
  board.style.width = 100 * complexity + "px";
  board.style.height = 100 * complexity + "px";
  board.innerHTML = '';
  for (let i = 0; i < complexity; i++) {
    for (let j = 0; j < complexity; j++) {
      const cell = document.createElement('div');
      cell.classList.add('board-cell');
      cell.dataset.row = i;
      cell.dataset.col = j;
      board.appendChild(cell);

      const dot = document.createElement('div');
      dot.classList.add('dot');
      cell.appendChild(dot);

      boardCells.push(cell);
    }
  }
}

drawBottomShape();
drawCurveBottomRShape();
drawCrescentRShape();
drawBottom2Shape();
drawAslantRShape();
// drawAslant2RShape();
createBoard();

let draggedElement = null;
let elemTop, elemLeft;
let pickedShape;
let zIndex = 100;
let level = 1;
let mode = complexity == 3 ? "easy" : complexity == 4 ? "medium" : "hard";

const shapeRect = [
  {
    name: "bottomShape",
    rect: {
      top: getRectTop("bottomShape"),
      left: getRectLeft("bottomShape"),
    }
  },
  {
    name: "curveBottomRShape",
    rect: {
      top: getRectTop("curveBottomRShape"),
      left: getRectLeft("curveBottomRShape"),
    }
  },
  {
    name: "crescentRShape",
    rect: {
      top: getRectTop("crescentRShape"),
      left: getRectLeft("crescentRShape"),
    }
  },
  {
    name: "bottom2Shape",
    rect: {
      top: getRectTop("bottom2Shape"),
      left: getRectLeft("bottom2Shape"),
    }
  },
  {
    name: "aslantRShape",
    rect: {
      top: getRectTop("aslantRShape"),
      left: getRectLeft("aslantRShape"),
    }
  },
  {
    name: "aslant2RShape",
    rect: {
      top: getRectTop("aslant2RShape"),
      left: getRectLeft("aslant2RShape"),
    }
  }
]

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

function getRectTop(shape) {
  return document.getElementById(shape).getBoundingClientRect().top;
}
function getRectLeft(shape) {
  return document.getElementById(shape).getBoundingClientRect().left;
}

function changeLevel(modeVal) {
  mode = modeVal;
  complexity = mode == "easy" ? 3 : mode == "medium" ? 4 : 5;
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
      resetShapePosition(shapeRect.name, shapeRect.rect.left, shapeRect.rect.top)
    }
  )
  level = 1;
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

function openMenu() {
  reset();
  document.getElementById("startMenu").style.display = '';
}

function submit() {
  if (level == templateData.find(e => e.mode === mode).templates.length) {
    openWinningPopup();
  } else {
    console.log(level, templateData.find(e => e.mode === mode).templates.length);
    const droppedElements = document.querySelectorAll(".dropped");
    let flag = true;
    const filterMode = templateData.find(e => e.mode === mode).templates[level - 1].shapes;

    if (droppedElements.length == filterMode.length) {
      droppedElements.forEach(elem => {
        const filterShape = filterMode.find(e => e.name === elem.id);
        const templateRow = filterShape.coordinate[1];
        const templateCol = filterShape.coordinate[0];
        console.log(elem.id, templateRow, templateCol, elem.parentElement.dataset.row, elem.parentElement.dataset.col)
        if (templateRow != elem.parentElement.dataset.row || templateCol != elem.parentElement.dataset.col) {
          flag = false;
        };
      });
    } else {
      flag = false;
    }

    if (flag) {
      level++;
      document.getElementById('level').innerText = level;
      reDrawNewLevel();
    } else
      console.log("Wrong");
  }

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