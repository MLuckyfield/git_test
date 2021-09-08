
const Player = (name, symbol) => {
  let active = false;
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

const Tile = (top, right,id) =>{
  let tile = document.createElement('div');
  tile.id = id;
  tile.classList.add('tile');
  tile.style.top = top+'px';
  tile.style.left = right+'px';
  tile.style.width = '100px';
  tile.style.height = '100px';
  tile.style.position = 'absolute';
  tile.style.border = '2px solid black';

  tile.addEventListener('click',function(event){    
    tile.textContent = activePlayer.symbol;
    checkWin(tile,event);
  })
  document.body.appendChild(tile)

  let clicked = false
  const clickable = () => clicked;
  return {tile, clickable}
}

//create the gameboard, consisting of clickable tiles
let board = []
let length = 0;
const GameBoard = (() => {
  let top = 250;
  let right = 250;
  const create = () => {
    for (let i = 0; i<3; i++){
      for (let y = 0; y<3; y++){
        board.push(Tile(top, right, length++));
        top+=100;
      }
    right+=100;
    top=250;
    }
  }
  return {create};
})();

GameBoard.create()

function win(a, b, c){
  let winner =false

  console.log(a+' is '+document.getElementById(a).innerHTML)
  a = document.getElementById(a).innerHTML;
  b = document.getElementById(b).innerHTML;
  c = document.getElementById(c).innerHTML;
  if (a==b && b==c && a!==''){
    winner=true;
    if(a==p1.symbol){activePlayer=p1;}
    else{activePlayer=p2;}

    console.log('winner! a is '+a)
  }
  return winner;
}
// create players and make 1 the activeplayer
let p1 = Player('Player One','X');
let p2 = Player('Player Two','O');
let activePlayer = p1
document.getElementById('msg').innerHTML = activePlayer.symbol;
activePlayer.turn();

//when the active player clicks a tile, check if the game is won
function checkWin(tile,event){
  if (
      win(0,1,2)|| win(3,4,5)|| win(6,7,8) //horizontal wins
      || win(0,3,6)|| win(1,4,7)|| win(2,5,8) //vertical wins
      || win(0,4,8)|| win(2,4,6)//diagnal wins
  ){
    document.getElementById('msg').innerHTML = activePlayer.symbol + ' wins!';
  }
  else{swapPlayer(tile,event)}
}
//if not, switch active players
function swapPlayer(tile, event){
  if (activePlayer==p1){
      activePlayer=p2;
    }
  else{activePlayer=p1;}
  document.getElementById('msg').innerHTML = activePlayer.symbol;
}
