'use strict';
/*
 * ICS3UC Final Project S1 2023-24
 *
 * Author: Ruth Feldstein
 * Description: Dots and Boxes - A game where you... (finish off later)
 * 
 */
     
$("new_game").addEventListener("click", new_game)

function $(id) {
  return document.getElementById(id)
}

let board = []
for(let x = 0; x < 13; x++){
  board[x] = []
  for(let y = 0; y < 13; y++){
    board[x][y] = (x + "," + y)

    //use this for the arr and what to pop and push
    if ((x % 2 == 0 && y % 2 == 1) || (x % 2 == 1 && y % 2 == 0)){
      $(x + "," + y).addEventListener("click", play)
    }
  }
}
console.log(board)


//Add a reload the page function to this later
function new_game() {
  $("div1").hidden = false
}


let turn = 1

function play(event) {
  
  if (turn == 1) {
    console.log(event.target.id)
    $(event.target.id).src = "Images.png/purple.png"
    turn = 2

  } else if (turn == 2) {
    console.log(event.target.id)
    $(event.target.id).src = "Images.png/limegreen.png"
    turn = 1
  }
}

// function check_surroundings() {
//   if(board[x] == ){
    
//   }
// }


