function listShape(level, mode){
  const itemContainer = findId("item");
  const shapeList = templateData.find(e => e.mode === mode).templates[level - 1].shapes;
  console.log(shapeList);

  itemContainer.innerHTML = '';

  shapeList.forEach(shapeList => {
    var shapeContainer = document.createElement('div');
    shapeContainer.className = 'shape-container';
    shapeContainer.id = shapeList.name + "Container";
    shapeContainer.width = shapeData.find(e => e.name === shapeList.name).width;
    shapeContainer.height = shapeData.find(e => e.name === shapeList.name).height;

    var canvas = document.createElement('canvas');
    canvas.id = shapeList.name;
    canvas.width = shapeData.find(e => e.name === shapeList.name).width * expander; // Set your desired width
    canvas.height = shapeData.find(e => e.name === shapeList.name).height * expander; // Set your desired height
    // canvas.style.backgroundColor = 'rgba(255, 255, 255)';
    shapeContainer.appendChild(canvas);
    itemContainer.appendChild(shapeContainer);
  })

  bottomShape =       shapeList.find(e => e.name === "bottomShape")       != null? document.querySelectorAll("#bottomShape")      : null;
  rightShape =        shapeList.find(e => e.name === "rightShape")        != null? document.querySelectorAll("#rightShape")       : null;
  curveBottomRShape = shapeList.find(e => e.name === "curveBottomRShape") != null? document.querySelectorAll("#curveBottomRShape"): null;
  curveBottomLShape = shapeList.find(e => e.name === "curveBottomLShape") != null? document.querySelectorAll("#curveBottomLShape"): null;
  curveTopRShape =    shapeList.find(e => e.name === "curveTopRShape")    != null? document.querySelectorAll("#curveTopRShape")   : null;
  curveTopLShape =    shapeList.find(e => e.name === "curveTopLShape")    != null? document.querySelectorAll("#curveTopLShape")   : null;
  crescentRShape =    shapeList.find(e => e.name === "crescentRShape")    != null? document.querySelectorAll("#crescentRShape")   : null;
  crescentLShape =    shapeList.find(e => e.name === "crescentLShape")    != null? document.querySelectorAll("#crescentLShape")   : null;
  crescentBShape =    shapeList.find(e => e.name === "crescentBShape")    != null? document.querySelectorAll("#crescentBShape")   : null;
  crescentTShape =    shapeList.find(e => e.name === "crescentTShape")    != null? document.querySelectorAll("#crescentTShape")   : null;
  bottom2Shape =      shapeList.find(e => e.name === "bottom2Shape")      != null? document.querySelectorAll("#bottom2Shape")     : null;
  right2Shape =       shapeList.find(e => e.name === "right2Shape")       != null? document.querySelectorAll("#right2Shape"): null;
  aslantRShape =      shapeList.find(e => e.name === "aslantRShape")      != null? document.querySelectorAll("#aslantRShape")     : null;
  aslantLShape =      shapeList.find(e => e.name === "aslantLShape")      != null? document.querySelectorAll("#aslantLShape")     : null;
  aslant2RShape =     shapeList.find(e => e.name === "aslant2RShape")     != null? document.querySelectorAll("#aslant2RShape")    : null;
  aslant2LShape =     shapeList.find(e => e.name === "aslant2LShape")     != null? document.querySelectorAll("#aslant2LShape")    : null;
  aslant2BShape =     shapeList.find(e => e.name === "aslant2BShape")     != null? document.querySelectorAll("#aslant2BShape")    : null;
  aslant2TShape =     shapeList.find(e => e.name === "aslant2TShape")     != null? document.querySelectorAll("#aslant2TShape")    : null;

  shape.push(bottomShape,
    rightShape,
    curveBottomRShape,
    curveBottomLShape,
    curveTopRShape,
    curveTopLShape,
    crescentRShape,
    crescentLShape,
    crescentBShape,
    crescentTShape,
    bottom2Shape,
    right2Shape,
    aslantRShape,
    aslantLShape,
    aslant2RShape,
    aslant2LShape,
    aslant2BShape,
    aslant2TShape);
  console.log(shape)

  eventList();
  triggerDraw();
}


function drawBottomShape() {
  const getAllDuplicatesElement = document.querySelectorAll("#bottomShape");
  getAllDuplicatesElement.forEach(e => {
    const ctx = e.getContext('2d');
    ctx.beginPath();
    ctx.arc(e.width / 2, e.height / 4, 25 * expander, 0, 2 * Math.PI);
    ctx.arc(e.width / 2, (e.height / 4) * 3, 25 * expander, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = '#ff6384'; // Set the fill color
    ctx.fill();
    ctx.fillRect(25 * expander, 50 * expander, e.width - 50 * expander, e.height - 100 * expander);
  })
}

function drawRightShape() {
  const getAllDuplicatesElement = document.querySelectorAll("#rightShape");
  getAllDuplicatesElement.forEach(e => {
    const ctx = e.getContext('2d');
    ctx.beginPath();
    ctx.arc(e.width / 4, e.height / 2, 25 * expander, 0, 2 * Math.PI);
    ctx.arc((e.height / 2) * 3, e.width / 4, 25 * expander, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = '#FF6F61 '; // Set the fill color
    ctx.fill();
    ctx.fillRect(50 * expander, 25 * expander, e.width - 100 * expander, e.height - 50 * expander);
  })
}

function drawCurveBottomRShape() {
  const getAllDuplicatesElement = document.querySelectorAll("#curveBottomRShape");
  getAllDuplicatesElement.forEach(e => {
    const ctx = e.getContext('2d');
    ctx.beginPath();
    ctx.arc(e.width / 4, e.height / 4, 25 * expander, 0, 2 * Math.PI);
    ctx.arc((e.width / 4) * 3, (e.height / 4) * 3, 25 * expander, 0, 2 * Math.PI);
    ctx.arc(150 * expander, 50 * expander, 125 * expander, 0.5 * Math.PI, 1 * Math.PI);

    ctx.closePath();
    ctx.fillStyle = '#36a2eb';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(150 * expander, 50 * expander, 74 * expander, 0.5 * Math.PI, 1 * Math.PI);
    ctx.clip();
    ctx.clearRect(0, 0, 200 * expander, 200 * expander);
  })
  
}

function drawCurveBottomLShape() {
  const getAllDuplicatesElement = document.querySelectorAll("#curveBottomLShape");
  getAllDuplicatesElement.forEach(e => {
    const ctx = e.getContext('2d');
    ctx.beginPath();
    ctx.arc(e.width / 4, e.height / 4, 25 * expander, 0, 2 * Math.PI);
    ctx.arc((e.width / 4) * 3, (e.height / 4) * 3, 25 * expander, 0, 2 * Math.PI);
    ctx.arc(150 * expander, 50 * expander, 125 * expander, 0.5 * Math.PI, 1 * Math.PI);

    ctx.closePath();
    ctx.fillStyle = '#40E0D0  ';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(150 * expander, 50 * expander, 74 * expander, 0.5 * Math.PI, 1 * Math.PI);
    ctx.clip();
    ctx.clearRect(0, 0, 200 * expander, 200 * expander);
  })
  
}

function drawCurveTopRShape() {
  const getAllDuplicatesElement = document.querySelectorAll("#curveTopRShape");
  getAllDuplicatesElement.forEach(e => {
    const ctx = e.getContext('2d');
    ctx.beginPath();
    ctx.arc(e.width / 4, e.height / 4, 25 * expander, 0, 2 * Math.PI);
    ctx.arc((e.width / 4) * 3, (e.height / 4) * 3, 25 * expander, 0, 2 * Math.PI);
    ctx.arc(150 * expander, 50 * expander, 125 * expander, 0.5 * Math.PI, 1 * Math.PI);

    ctx.closePath();
    ctx.fillStyle = '#FF6347 ';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(150 * expander, 50 * expander, 74 * expander, 0.5 * Math.PI, 1 * Math.PI);
    ctx.clip();
    ctx.clearRect(0, 0, 200 * expander, 200 * expander);
  })
  
}

function drawCurveTopLShape() {
  const getAllDuplicatesElement = document.querySelectorAll("#curveTopLShape");
  getAllDuplicatesElement.forEach(e => {
    const ctx = e.getContext('2d');
    ctx.beginPath();
    ctx.arc(e.width / 4, e.height / 4, 25 * expander, 0, 2 * Math.PI);
    ctx.arc((e.width / 4) * 3, (e.height / 4) * 3, 25 * expander, 0, 2 * Math.PI);
    ctx.arc(150 * expander, 50 * expander, 125 * expander, 0.5 * Math.PI, 1 * Math.PI);

    ctx.closePath();
    ctx.fillStyle = '#00FA9A ';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(150 * expander, 50 * expander, 74 * expander, 0.5 * Math.PI, 1 * Math.PI);
    ctx.clip();
    ctx.clearRect(0, 0, 200 * expander, 200 * expander);
  })
  
}



function drawCrescentRShape() {
  const getAllDuplicatesElement = document.querySelectorAll("#crescentRShape");
  getAllDuplicatesElement.forEach(e => {
    const ctx = crescentRShape.getContext('2d');
    ctx.beginPath();
    ctx.arc(e.width / 3, e.height / 4, 25 * expander, 0, 2 * Math.PI);
    ctx.arc(e.width / 3, (e.height / 4) * 3, 25 * expander, 0, 2 * Math.PI);
    ctx.arc(e.width / 3, e.height / 2, 75 * expander, 1.5 * Math.PI, 2.5 * Math.PI);

    ctx.fillStyle = '#ffce56'; // Set the fill color
    ctx.fill();

    ctx.beginPath();
    ctx.arc(50 * expander, 100 * expander, 27 * expander, 0, 2 * Math.PI);
    ctx.clip();
    ctx.clearRect(0, 0, 200 * expander, 200 * expander);
  })
  
}

function drawCrescentLShape() {
  const getAllDuplicatesElement = document.querySelectorAll("#crescentLShape");
  getAllDuplicatesElement.forEach(e => {
    const ctx = crescentLShape.getContext('2d');
    ctx.beginPath();
    ctx.arc(e.width / 3, e.height / 4, 25 * expander, 0, 2 * Math.PI);
    ctx.arc(e.width / 3, (e.height / 4) * 3, 25 * expander, 0, 2 * Math.PI);
    ctx.arc(e.width / 3, e.height / 2, 75 * expander, 1.5 * Math.PI, 2.5 * Math.PI);

    ctx.fillStyle = '#FF69B4 '; // Set the fill color
    ctx.fill();

    ctx.beginPath();
    ctx.arc(50 * expander, 100 * expander, 27 * expander, 0, 2 * Math.PI);
    ctx.clip();
    ctx.clearRect(0, 0, 200 * expander, 200 * expander);
  })
  
}

function drawCrescentBShape() {
  const getAllDuplicatesElement = document.querySelectorAll("#crescentBShape");
  getAllDuplicatesElement.forEach(e => {
    const ctx = crescentBShape.getContext('2d');
    ctx.beginPath();
    ctx.arc(e.width / 4, e.height / 3, 25 * expander, 0, 2 * Math.PI);
    ctx.arc((e.height / 3) * 3, e.height / 3, 25 * expander, 0, 2 * Math.PI);
    ctx.arc(e.width / 2, e.height / 3, 75 * expander, 2 * Math.PI, 1 * Math.PI);

    ctx.fillStyle = '#20B2AA '; // Set the fill color
    ctx.fill();

    ctx.beginPath();
    ctx.arc(100 * expander, 50 * expander, 27 * expander, 0, 2 * Math.PI);
    ctx.clip();
    ctx.clearRect(0, 0, 200 * expander, 200 * expander);
  })
  
}

function drawCrescentTShape() {
  const getAllDuplicatesElement = document.querySelectorAll("#crescentTShape");
  getAllDuplicatesElement.forEach(e => {
    const ctx = e.getContext('2d');
    ctx.beginPath();
    ctx.arc(e.width / 4, e.height / 3, 25 * expander, 0, 2 * Math.PI);
    ctx.arc((e.height / 3) * 3, e.height / 3, 25 * expander, 0, 2 * Math.PI);
    ctx.arc(e.width / 2, e.height / 3, 75 * expander, 2 * Math.PI, 1 * Math.PI);

    ctx.fillStyle = '#FFA07A '; // Set the fill color
    ctx.fill();

    ctx.beginPath();
    ctx.arc(100 * expander, 50 * expander, 27 * expander, 0, 2 * Math.PI);
    ctx.clip();
    ctx.clearRect(0, 0, 200 * expander, 200 * expander);
  })
  
}

function drawBottom2Shape() {
  const getAllDuplicatesElement = document.querySelectorAll("#bottom2Shape");
  getAllDuplicatesElement.forEach(e => {
    const ctx = e.getContext('2d');
    ctx.beginPath();
    ctx.arc(e.width / 2, e.height / 6, 25 * expander, 0, 2 * Math.PI);
    ctx.arc(e.width / 2, (e.height / 6) * 5, 25 * expander, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = '#9966ff'; // Set the fill color
    ctx.fill();

    ctx.fillRect(25 * expander, 50 * expander, e.width - 50 * expander, e.height - 100 * expander);
  })
  
}

function drawRight2Shape() {
  const getAllDuplicatesElement = document.querySelectorAll("#right2Shape");
  getAllDuplicatesElement.forEach(e => {
    const ctx = e.getContext('2d');
    ctx.beginPath();
    ctx.arc(e.width / 6, e.height / 2, 25 * expander, 0, 2 * Math.PI);
    ctx.arc((e.width / 6) * 5, (e.height / 2) , 25 * expander, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = '#FF8C00'; // Set the fill color
    ctx.fill();
  
    ctx.fillRect(50 * expander, 25 * expander, e.width - 100 * expander, e.height - 50 * expander);
  })
  
}

function drawAslantRShape() {
  const getAllDuplicatesElement = document.querySelectorAll("#aslantRShape");
  getAllDuplicatesElement.forEach(e => {
    const ctx = e.getContext('2d');
    ctx.beginPath();
    ctx.arc(e.width / 4, e.height / 4, 25 * expander, 0, 2 * Math.PI);
    ctx.arc((e.width / 4) * 3, (e.height / 4) * 3, 25 * expander, 0, 2 * Math.PI);

    ctx.closePath();
    ctx.fillStyle = '#00CED1';
    ctx.fill();
    // ctx.fillRect(25, 50, 50, 100);
    ctx.rotate(Math.PI / 4);

    //Pythago segment
    ctx.fillRect(Math.sqrt(((e.width / 4) ** 2) + ((e.height / 4) ** 2)), -25 * expander, Math.sqrt(((e.width / 2) ** 2) + ((e.height / 2) ** 2)), 50 * expander);
  })
  
}

function drawAslantLShape() {
  const getAllDuplicatesElement = document.querySelectorAll("#aslantLShape");
  getAllDuplicatesElement.forEach(e => {
    const ctx = e.getContext('2d');
    ctx.beginPath();
    ctx.arc(e.width / 4, e.height / 4, 25 * expander, 0, 2 * Math.PI);
    ctx.arc((e.width / 4) * 3, (e.height / 4) * 3, 25 * expander, 0, 2 * Math.PI);

    ctx.closePath();
    ctx.fillStyle = '#87CEEB';
    ctx.fill();
    // ctx.fillRect(25, 50, 50, 100);
    ctx.rotate(Math.PI / 4);

    //Pythago segment
    ctx.fillRect(Math.sqrt(((e.width / 4) ** 2) + ((e.height / 4) ** 2)), -25 * expander, Math.sqrt(((e.width / 2) ** 2) + ((e.height / 2) ** 2)), 50 * expander);
  })

}

function drawAslant2RShape() {
  const getAllDuplicatesElement = document.querySelectorAll("#aslant2RShape");
  getAllDuplicatesElement.forEach(e => {
    const ctx = aslant2RShape.getContext('2d');
    ctx.beginPath();
    ctx.arc(e.width / 4, e.height / 6, 25 * expander, 0, 2 * Math.PI);
    ctx.arc((e.width / 4) * 3, (e.height / 6) * 5, 25 * expander, 0, 2 * Math.PI);

    ctx.closePath();
    ctx.fillStyle = '#FF7633';
    ctx.fill();
    //Trigonometric
    ctx.rotate(1.108);
    //Pythago segment
    ctx.fillRect(Math.sqrt((50**2) + (100**2)) * 0 + 62 * expander, -47.6 * expander, Math.sqrt((100**2) + (200**2)) * expander, 50 * expander);
  })
  
}

function drawAslant2LShape() {
  const getAllDuplicatesElement = document.querySelectorAll("#aslant2LShape");
  getAllDuplicatesElement.forEach(e => {
    const ctx = e.getContext('2d');
  ctx.beginPath();
  ctx.arc(e.width / 4, e.height / 6, 25 * expander, 0, 2 * Math.PI);
  ctx.arc((e.width / 4) * 3, (e.height / 6) * 5, 25 * expander, 0, 2 * Math.PI);

  ctx.closePath();
  ctx.fillStyle = '#00FF00';
  ctx.fill();
  //Trigonometric
  ctx.rotate(1.108);
  //Pythago segment
  ctx.fillRect(Math.sqrt((50**2) + (100**2)) * 0 + 62 * expander, -47.6 * expander, Math.sqrt((100**2) + (200**2)) * expander, 50 * expander);
  })
  
}

function drawAslant2BShape() {
  const getAllDuplicatesElement = document.querySelectorAll("#aslant2BShape");
  getAllDuplicatesElement.forEach(e => {
    const ctx = e.getContext('2d');
  ctx.beginPath();
  ctx.arc(e.width / 6, e.height / 4, 25 * expander, 0, 2 * Math.PI);
  ctx.arc((e.width / 6) * 5, (e.height / 4) * 3, 25 * expander, 0, 2 * Math.PI);

  ctx.closePath();
  ctx.fillStyle = '#98FB98';
  ctx.fill();
  //Trigonometric
  ctx.rotate(0.465);
  //Pythago segment
  ctx.fillRect(Math.sqrt((50**2) + (100**2)) * 0 + 62 * expander, -3 * expander, Math.sqrt((100**2) + (200**2)) * expander, 50 * expander);
  })
  
}

function drawAslant2TShape() {
  const getAllDuplicatesElement = document.querySelectorAll("#aslant2TShape");
  getAllDuplicatesElement.forEach(e => {
    const ctx = e.getContext('2d');
  ctx.beginPath();
  ctx.arc(e.width / 6, e.height / 4, 25 * expander, 0, 2 * Math.PI);
  ctx.arc((e.width / 6) * 5, (e.height / 4) * 3, 25 * expander, 0, 2 * Math.PI);

  ctx.closePath();
  ctx.fillStyle = '#FFB6C1';
  ctx.fill();
  //Trigonometric
  ctx.rotate(0.465);
  //Pythago segment
  ctx.fillRect(Math.sqrt((50**2) + (100**2)) * 0 + 62 * expander, -3 * expander, Math.sqrt((100**2) + (200**2)) * expander, 50 * expander);
  })
  
}

function createBoard(complexity) {
  complexity = complexity == undefined ? 3 : complexity;
  board.style.gridTemplateColumns = `repeat(${complexity}, 1fr)`;
  board.style.width = (100 * expander) * complexity + "px";
  board.style.height = (100 * expander) * complexity + "px";
  board.innerHTML = '';
  for (let i = 0; i < complexity; i++) {
    for (let j = 0; j < complexity; j++) {
      const cell = document.createElement('div');
      cell.classList.add('board-cell');
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.width = 100 * expander;
      cell.height = 100 * expander;
      board.appendChild(cell);

      const dot = document.createElement('div');
      dot.classList.add('dot');
      cell.appendChild(dot);

      boardCells.push(cell);
    }
  }
}

createBoard();
listShape(level, mode);

function triggerDraw(){
  bottomShape != null ? drawBottomShape() : 0;
  rightShape != null ? drawRightShape() : 0;
  
  curveBottomRShape != null ? drawCurveBottomRShape() : 0;
  curveBottomLShape != null ? drawCurveBottomLShape() : 0;
  curveTopRShape != null ? drawCurveTopRShape() : 0;
  curveTopLShape != null ? drawCurveTopLShape() : 0;
  
  crescentRShape != null ? drawCrescentRShape() : 0;
  crescentLShape != null ? drawCrescentLShape() : 0;
  crescentBShape != null ? drawCrescentBShape() : 0;
  crescentTShape != null ? drawCrescentTShape() : 0;
  
  bottom2Shape != null ? drawBottom2Shape() : 0;
  right2Shape != null ? drawRight2Shape() : 0;
  
  aslantRShape != null ? drawAslantRShape() : 0;
  aslantLShape != null ? drawAslantLShape() : 0;
  
  aslant2RShape != null ? drawAslant2RShape() : 0;
  aslant2LShape != null ? drawAslant2LShape() : 0;
  aslant2BShape != null ? drawAslant2BShape() : 0;
  aslant2TShape != null ? drawAslant2TShape() : 0;
}

//popup for winning
function openWinningPopup() {
  findId('popup').style.display = 'block';
}

//close popup
function closeWinningPopup() {
  findId('popup').style.display = 'none';
  openMenu();
}

//initial set template and mode
function setTemplate() {
  findId('template').src = templateData.find(e => e.mode === mode).templates[level - 1].url;
  findId('mode').innerText = mode;
}

//select mode difficulties
function changeLevel(modeVal) {
  mode = modeVal;
  complexity = mode == "dễ" ? 3 : mode == "trung bình" ? 4 : 5;
  expander = mode == "dễ" ? 1.5 : mode == "trung bình" ? 1.2 : 1;

  setTemplate();
  createBoard(complexity);
  findId('template').src = templateData.find(e => e.mode === mode).templates[level - 1].url;
  findId('mode').innerText = mode;
  findId("startMenu").style.display = 'none';
  findId("level").innerText = level;
  shape = [];
  shapeRect = [];
  listShape(level, mode);
  concatShapeRect();
}

function concatShapeRect(){
  var shapeFiltered = shape.filter(function(e) { return e != null; });
  console.log(shapeFiltered)
  // debugger
  shapeFiltered.forEach(e => {
    let tempArr = [];
    if(e.length > 1){
      let subArr = [];
      for (let i = 0; i < e.length; i++) {
        tempArr.push(e[i].id);
        tempArr.push(e[i].getBoundingClientRect().top);
        tempArr.push(e[i].getBoundingClientRect().left);
        subArr.push(tempArr);
      }
      shapeRect.push(subArr);
    } else {
      let tempArr = [];
      tempArr.push(e.id);
      tempArr.push(e.getBoundingClientRect().top);
      tempArr.push(e.getBoundingClientRect().left);
      shapeRect.push(tempArr);
      // console.log(shapeRect);
    }
    
  })
  console.log(shapeRect);

}

concatShapeRect();

function getValueByShape(arr, shapeName, direct) {
  for (var i = 0; i < arr.length; i++) {
    var shape = arr[i][0];
    if (shape === shapeName) {
      if(direct == 1)
        return arr[i][1];
      else
        return arr[i][2];
    }
  }
  return null;
}

//reset coordinate of shapes
function reset() {
  var audio = new Audio('assets/reset.mp3');
  audio.play();
  const droppedElements = document.querySelectorAll(".dropped");
  droppedElements.forEach(e => {
      console.log(e);
      e.remove();
      findId(e.id + "Container").appendChild(e);
  });
  listShape(level, mode);
  findId('popupMenuWarning').style.display = 'none';
}

//set up new level when user win previous game
function reDrawNewLevel() {
  const droppedElements = document.querySelectorAll(".dropped");
  findId('template').src = templateData.find(e => e.mode === mode).templates[level - 1].url;
  droppedElements.forEach(e => {
    console.log(e);
    e.remove();
    findId(e.id + "Container").appendChild(e);
    resetShapePosition(e.id, getValueByShape(shapeRect, e.id, 2), getValueByShape(shapeRect, e.id, 1));
    console.log(getValueByShape(shapeRect, e.id, 1));
  });
  shape = [];
  shapeRect = [];
}

//show warning popup before send to main menu
function openMenuWarningPopup() {
  findId("popupMenuWarning").style.display = 'block';
}

//cancel action go to main menu
function closeMenuWarningPopup() {
  findId("popupMenuWarning").style.display = 'none';
}

//overall reset in menu screen
function openMenu() {
  reset();
  level = 1;
  findId("startMenu").style.display = '';
  findId("tutor").style.display = 'none';
}

//tutorial page
function tutorial() {
  findId("tutor").style.display = 'flex';
  findId("tutor").style.zIndex = 100000;
}

//submit when user done dragging
function submit() {
  const droppedElements = document.querySelectorAll(".dropped");
  let flag = true;
  const filterMode = templateData.find(e => e.mode === mode).templates[level - 1];

  //check if number of shapes in template and in board is equal or not
  if (droppedElements.length == filterMode.shapes.length) {
    let indexArray = [];
    droppedElements.forEach(elem => {
      let arr = [];
      arr.push(elem.id);
      arr.push(parseInt(window.getComputedStyle(elem).getPropertyValue('z-index')));
      indexArray.push(arr);
      const filterShape = filterMode.shapes.find(e => e.name === elem.id);
      try {
        //check if the shape is placed at the right place or not
        if (filterShape.coordinate[1] != elem.parentElement.dataset.row || filterShape.coordinate[0] != elem.parentElement.dataset.col) {
          console.log(1);
          flag = false;
        };
      } catch (error) {
        console.log(error);
        flag = false;
      }
    });
    console.log(indexArray);
    filterMode.specialties.forEach(elem => {
      console.log(findIndexBindValue(indexArray, elem[0]), findIndexBindValue(indexArray, elem[1]));

      //check if shape order is correct or not
      if(findIndexBindValue(indexArray, elem[0]) >= findIndexBindValue(indexArray, elem[1])) flag = false; console.log(1);
    })
  } else flag = false; console.log(1);

  //check valid answer
  if (flag) {
    var audio = new Audio('assets/win.mp3');
    audio.play();
    if (level == templateData.find(e => e.mode === mode).templates.length) {
      openWinningPopup(); 
      zIndex = 100;
    } else {
      level++;
      findId('popupPassLevel').style.display = "block";
    }
  } else {
    var audio = new Audio('assets/incorrect.mp3');
    audio.play();
    findId('popupFailLevel').style.display = "block";
    console.log(1);
  }
}

//find zIndex value by id
function findIndexBindValue(arr, targetElement) {
  let index;
  arr.forEach(elem => {
    if (elem[0] === targetElement) index = elem[1];
  })
  return index;
}

//close popup
function closeFailLevelPopup(){
  findId('popupFailLevel').style.display = "none";
}

//close popup
function closePassLevelPopup(){
  reDrawNewLevel();
  findId('popupPassLevel').style.display = "none";
  findId('level').innerText = level;
  listShape(level, mode);
  concatShapeRect();
}

//reset shape position
function resetShapePosition(shapeId, left, top) {
  const shape = findId(shapeId);
  shape.style.position = 'absolute';
  shape.style.left = `${left}px`;
  shape.style.top = `${top}px`;
}

function getCoorForShape(e) {
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
  console.log(e.srcElement);
  e.srcElement.style.zIndex = zIndex;
  zIndex++;
  console.log(zIndex);
  var audio = new Audio('assets/click.mp3');
  audio.play();
}

function drag(e) {
  if (draggedElement) {
    const x = e.clientX - (draggedElement.width / 2);
    const y = e.clientY - (draggedElement.height / 2);
    draggedElement.style.left = `${x}px`;
    draggedElement.style.top = `${y}px`;
  }
}

var audio = new Audio('assets/outrange.mp3');
function endDrag() {
  var audio = new Audio('assets/outrange.mp3');
  if (draggedElement) {
    const rect = draggedElement.getBoundingClientRect();
    const cell = findDropCell(rect);
    if (cell) {
      const row = cell.dataset.row;
      const col = cell.dataset.col;
      
      //cover cases that shape stay some of it part out board
      if (parseInt(row) + getCoorForShape(pickedShape)[0] < complexity && parseInt(col) + getCoorForShape(pickedShape)[1] < complexity) {
        console.log(`Dropped at row: ${row}, col: ${col}`);

        //set the position relative to the cell
        const cellRect = cell.getBoundingClientRect();
        console.log(draggedElement.id);
        // let balancerTop, balancerLeft = 0;
        if(draggedElement.id == "crescentLShape") {
          draggedElement.style.left = `${cellRect.left - 50}px`;
          draggedElement.style.top = `${cellRect.top}px`;
        } else if(draggedElement.id == "crescentTShape") {
          draggedElement.style.left = `${cellRect.left}px`;
          draggedElement.style.top = `${cellRect.top - 50}px`;
        } else {
          draggedElement.style.left = `${cellRect.left}px`;
          draggedElement.style.top = `${cellRect.top}px`;
        }
        //append the dragged element to the cell
        cell.appendChild(draggedElement);
        draggedElement.classList.add("dropped");
        var audio = new Audio('assets/drop.mp3');
        audio.play();
      } else {
        audio.play();
        draggedElement.style.position = 'absolute';
        draggedElement.style.left = elemLeft + 'px';
        draggedElement.style.top = elemTop + 'px';
      }
    } else {
        audio.play();
        draggedElement.style.position = 'absolute';
        draggedElement.style.left = elemLeft + 'px';
        draggedElement.style.top = elemTop + 'px';
      }   
    draggedElement = null;
  }
}

//find valid cell to drop and arrange
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

function eventList(){
  shape.forEach(e => {
    if(e != null){
      if(e.length >= 1) for(let i = 0; i < e.length; i++) e[i].addEventListener('mousedown', startDrag);
      else e.addEventListener('mousedown', startDrag);
    }
  })

  shape.forEach(e => {
    if(e != null){
      if(e.length >= 1) for(let i = 0; i < e.length; i++) e[i].addEventListener('touchstart', startDrag);
      else e.addEventListener('touchstart', startDrag);
    }
  })
}
eventList();

document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', endDrag);

//mobile/touch support
document.addEventListener('touchmove', (e) => {
  e.preventDefault(); //prevent scrolling while dragging on mobile
  drag(e.touches[0]);
});
document.addEventListener('touchend', endDrag);


//trigger music
// document.addEventListener('click', function() {
//   var audio = new Audio('assets/click.mp3');
//   audio.play();
// });


// let m = 0;
// document.addEventListener('click', function() {
//   if(m == 0){
//     var backgroundMusic = findId('backgroundMusic');
//     backgroundMusic.play();
//     m = 1;
//   }
// });

// function offMusic(){
//   var backgroundMusic = findId('backgroundMusic');
//   backgroundMusic.pause();
//   findId('v_on').style.display = 'block';
//   findId('v_off').style.display = 'none';
// }

// function onMusic(){
//   var backgroundMusic = findId('backgroundMusic');
//   backgroundMusic.play();
//   findId('v_on').style.display = 'none';
//   findId('v_off').style.display = 'block';
// }

// Copyright (c) 2023 cuongnp3110. All rights reserved.