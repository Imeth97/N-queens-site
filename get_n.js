



function create_board(n){

    /* Creates and empty nxn board */


	var board = []
  for (i = 0; i < n; i++) { 
   
   var row = []
   for (j = 0; j < n; j++){
   
   row.push(0)
   }
   board.push(row)
  }
  
  console.log(board)
	return board
}







function validate(board, x, y) {
    /* validation function. Takes board, x and y as input parameters.

    1. checks if any other queens exist in same column, that is ensuring every row below has no queens in the same y spot
    2. checks the two diagonals below (both righ and left)
     */

    for (var i = x-1; i > -1; i-- ) { // 1.

        if (board[i][y]==1) {
            return false
        }
    }

    //check if diagonals have a queen
    var yd_r = y //y diagonal right
    var yd_l = y //y diagonal left

    //2. 

    for (var i = x-1; i > -1; i-- ) { //check right diagonal

        if (yd_r == board.length-1){
            break
        }

        yd_r++ 

        if (board[i][yd_r]==1) {
            return false
        }

    }

    for (var i = x-1; i > -1; i-- ) { //check right diagonal

        if (yd_l == 0){
            break
        }

        

        yd_l-- 

        
        

        if (board[i][yd_l]==1) {

            return false
        }

    }

    return true

}



function solve(board, start=0){

		
		
    n = board.length

for (i=0; i<n; i++){



if (board[i].includes(1)==false){



        for (j=start; j<n; j++){
    
        if (validate(board, i, j)==true){
      
              
      
              board[i][j]=1
          
          return solve(board)
      
      }
    
    }
    
    
    
    start = (board[i-1]).indexOf(1)
    
    
    
    empty_row = []

    for (var k=0; k<n; k++){
        empty_row.push(0)
    }
    
    board[i-1]=empty_row
    
    
    
    
    return solve(board, start+1)


}



}


console.log(board)


return board



}

function outputSolution(n){

    board = create_board(n)

    solution = solve(board)

    
    return solution

}


// Get the value of n from index.html


var el = document.getElementById('submit_n')

var n = document.getElementById('n').value 

n = Number(n)

console.log(n)

el.addEventListener('submit', outputSolution(n))