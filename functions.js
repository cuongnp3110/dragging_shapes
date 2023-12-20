

let draggedElement = null;
let elemTop, elemLeft;
let pickedShape;
let zIndex = 100;
let level = 1;
let mode = complexity == 3 ? "dễ" : complexity == 4 ? "trung bình" : "khó";

//shorten the code document.getElementById by findId
function findId(id) {
  return document.getElementById(id);
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
  setTemplate();
  createBoard(complexity);
  findId('template').src = templateData.find(e => e.mode === mode).templates[level - 1].url;
  findId('mode').innerText = mode;
  findId("startMenu").style.display = 'none';
  findId("level").innerText = level;
}

//reset coordinate of shapes
function reset() {
  var audio = new Audio('assets/reset.mp3');
  audio.play();
  shapeRect.forEach(shapeRect => {
      const shapeTag = findId(shapeRect.name);
      findId(shapeRect.name).remove();
      findId(shapeRect.name + "Container").appendChild(shapeTag);
      console.log(shapeRect.name, shapeRect.rect.left, shapeRect.rect.top);
      resetShapePosition(shapeRect.name, shapeRect.rect.left, shapeRect.rect.top);
      shapeTag.classList.remove("dropped");
    }
  )
  findId('popupMenuWarning').style.display = 'none';
}

//set up new level when user win previous game
function reDrawNewLevel() {
  findId('template').src = templateData.find(e => e.mode === mode).templates[level - 1].url;
  shapeRect.forEach(shapeRect => {
    const shapeTag = findId(shapeRect.name);
    findId(shapeRect.name).remove();
    findId(shapeRect.name + "Container").appendChild(shapeTag);
    resetShapePosition(shapeRect.name, shapeRect.rect.left, shapeRect.rect.top);
    shapeTag.classList.remove("dropped");
  })
}

//show wanring popup before send to main menu
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
      if(findIndexBindValue(indexArray, elem[0]) >= findIndexBindValue(indexArray, elem[1])) flag = false;
    })
  } else flag = false;

  //check valid answer
  if (flag) {
    var audio = new Audio('assets/win.mp3');
    audio.play();

    //check when winning entire mode
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
}

//reset shape position
function resetShapePosition(shapeId, left, top) {
  const shape = findId(shapeId);
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
  findId(pickedShape).style.zIndex = zIndex;
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
      if (parseInt(row) + getDataForShape(pickedShape)[0] < complexity && parseInt(col) + getDataForShape(pickedShape)[1] < complexity) {
        console.log(`Dropped at row: ${row}, col: ${col}`);

        //set the position relative to the cell
        const cellRect = cell.getBoundingClientRect();
        draggedElement.style.left = `${cellRect.left}px`;
        draggedElement.style.top = `${cellRect.top}px`;

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

bottomShape.addEventListener('mousedown', startDrag);
curveBottomRShape.addEventListener('mousedown', startDrag);
crescentRShape.addEventListener('mousedown', startDrag);
bottom2Shape.addEventListener('mousedown', startDrag);
aslantRShape.addEventListener('mousedown', startDrag);
aslant2RShape.addEventListener('mousedown', startDrag);

document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', endDrag);

//mobile/touch support
bottomShape.addEventListener('touchstart', startDrag);
curveBottomRShape.addEventListener('touchstart', startDrag);
crescentRShape.addEventListener('touchstart', startDrag);
bottom2Shape.addEventListener('touchstart', startDrag);
aslantRShape.addEventListener('touchstart', startDrag);
aslant2RShape.addEventListener('touchstart', startDrag);

document.addEventListener('touchmove', (e) => {
  e.preventDefault(); //prevent scrolling while dragging on mobile
  drag(e.touches[0]);
});
document.addEventListener('touchend', endDrag);


//trigger music
document.addEventListener('click', function() {
  var audio = new Audio('assets/click.mp3');
  audio.play();
});


let m = 0;
document.addEventListener('click', function() {
  if(m == 0){
    var backgroundMusic = findId('backgroundMusic');
    backgroundMusic.play();
    m = 1;
  }
});

function offMusic(){
  var backgroundMusic = findId('backgroundMusic');
  backgroundMusic.pause();
  findId('v_on').style.display = 'block';
  findId('v_off').style.display = 'none';
}

function onMusic(){
  var backgroundMusic = findId('backgroundMusic');
  backgroundMusic.play();
  findId('v_on').style.display = 'none';
  findId('v_off').style.display = 'block';
}