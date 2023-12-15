let complexity = boardComplexity.easy;
const bottomShape = document.getElementById('bottomShape');
const curveBottomRShape = document.getElementById('curveBottomRShape');
const crescentRShape = document.getElementById('crescentRShape');
const bottom2Shape = document.getElementById('bottom2Shape');
const aslantRShape = document.getElementById('aslantRShape');
const aslant2RShape = document.getElementById('aslant2RShape');

const board = document.getElementById('board');

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