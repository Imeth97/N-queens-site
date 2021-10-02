



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

function present_sol(board){
    var n = board.length
    var res = ""

    for (row = 0; row<n; row++) {

        var row_to_add = ""

        for (col = 0; col<n; col++) {

            if (board[row][col] == 1) {
                row_to_add += "Q"
            }else{
                row_to_add += "-"
            }
        }

        row_to_add += "\n"
    
        res += row_to_add

        
    }

    return res
}



function solve(board, start=0, solution_lst = []){

		
		
    let n = board.length

for (i=0; i<n; i++){



    if (board[i].includes(1)==false){



            for (j=start; j<n; j++){
        
            if (validate(board, i, j)==true){
        
                
        
                board[i][j]=1

                if (i !== n-1){
                    return solve(board, 0, solution_lst) 
                }else{
                    let sol_x = present_sol(board)

                    //console.log(sol_x)

                    solution_lst.push(sol_x)
                    
                    board[i][j]=0

                }
            
            
        
        }
        
        }
        
        if (i==0) {
            
            return solution_lst
        }
        
        start = (board[i-1]).indexOf(1)
        
        
        
        empty_row = []

        for (var k=0; k<n; k++){
            empty_row.push(0)
        }
        
        board[i-1]=empty_row
        
        //console.log(solution_lst.length)
        
        
        return solve(board, start+1, solution_lst)


    }



}


}

function outputSolution(n){

    board = create_board(n)

    solutions = solve(board)

    
    return solutions

}


// Get the value of n from index.html


function give_soln(){

    
    var n = document.getElementById('n').value 

    n = Number(n)

    

    solutions = outputSolution(n)

    
    

    for (i=0; i<solutions.length; i++){
        
        console.log(solutions[i])
    }

    console.log(solutions.length + ' solutions ABOVE for n = ' + n)

}
