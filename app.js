const Player = (name, symbol) => {
  let active = false;
  const getSymbol = () => symbol;
  const turn = () => {
    if (active == false){
      active = true;
    }
    else{
      active=false;
    }
    return active;
  }
  return {name, symbol, turn};
}

const Tile = (top, right) =>{
  let tile = document.createElement('div');
  tile.classList.add('tile');
  tile.style.top = top+'px';
  tile.style.left = right+'px';
  tile.style.width = '100px';
  tile.style.height = '100px';
  tile.style.position = 'absolute';
  tile.style.border = '2px solid black';

  tile.addEventListener('click',function(event){
    tile.innerHTML = 'X'
  })
  document.body.appendChild(tile)

  let clicked = false
  const clickable = () => clicked;
  return {tile, clickable}
}
const GameBoard = (() => {
  let top = 250;
  let right = 250;
  const create = () => {
    for (let i = 0; i<3; i++){
      for (let y = 0; y<3; y++){
        Tile(top, right);
        top+=100;
      }
    right+=100;
    top=250;
    }
  }
  return {create};
})();

let p1 = Player('Player One','X');
let p2 = Player('Player Two','O');

GameBoard.create()
