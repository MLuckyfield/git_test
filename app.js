const Player = (name) => {
  let active = False;
  const turn = () => {
    if (active == False){
      active = True;
    }
    else{
      active=False;
    }
    return active;
  }
  return {name, turn};
}

const Tile = () =>{
  let code = '
      <div>
        Another TIle
      </div>
  '
  let clicked = True
  const clickable = () => clicked;
  return {code, clickable}
}
const GameBoard = (() => {

  return {};
})();
