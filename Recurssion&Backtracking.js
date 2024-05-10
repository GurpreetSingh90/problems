var searchFirst = function(nums,selected,ans) {
    if(ans.length == nums.length){
        console.log(ans);
    }
    for (var i = 0; i < nums.length; i++){
        if(!selected[i]){
            selected[i] = true;
            ans.push(nums[i]);
            searchFirst(nums,selected,ans);
            ans.pop();
            selected[i] = false;
        }
    }

};


//searchFirst([1,2,3,4],{},[])

var printSubset = function(nums,index,ans) {
    
    //accept
    if(index <= nums.length-1 ){
        ans.push(nums[index]);
        console.log(ans);
        printSubset(nums,index+1,ans);
        ans.pop();

        //reject
        printSubset(nums,index+1,ans);
    }
    
}


//console.log(printSubset([1,2,3],0,[]))



//Target = 60

var printSubset = function (nums, index, target, ans) {
    if(target < 0){
        return;
    }
    //accept
    if (index == nums.length) {
        if(target == 0){
            console.log(ans);
        }
        return;
    }
    ans.push(nums[index]);
    printSubset(nums, index + 1, target - nums[index], ans);
    ans.pop();

    //reject
    printSubset(nums, index + 1, target, ans);


}


//printSubset([10,20,30,40,50],0,60,[])

let isSafe = function(arr,row,col){
    
    //Column
    for(let i = row-1; i >= 0; i--){
        if(arr[i][col] == 'Q'){
            return false;
        }
    }

    //Right Diagnonal
    for(let i = row, j = col; i >= 0 && j <= n; i--,j++){
        if(arr[i][j] == 'Q'){
            return false;
        }
    }

    //left Diagnonal
    for(let i = row, j = col; i >= 0 && j >= 0; i--,j--){
        if(arr[i][j] == 'Q'){
            return false;
        }
    }

    return true;
}

let placeQueen = function (n,rowIndex, grid) {
    if(rowIndex == grid.length){
        console.log(grid);
        console.log("--------");
    }

    for (let j = 0; j < n; j++) {
        if(isSafe(grid,rowIndex,j)){
            grid[rowIndex][j] = 'Q';
            placeQueen(n,rowIndex+1,grid);
            grid[rowIndex][j] = '.';
        }
    }

}


// Famous Problem N Queen
let n = 4;

let grid = [];

for (let i = 0; i < n; i++) {
    grid.push(new Array(n).fill("."));
}




//placeQueen(4,0,grid);



// NEW APPROCH STORE ALL DIAGONALS AND COLS
// STORE COLS
// STORE LEFT DIAGONAL IE rowIndex+colIndex  FOR EG  2+1 = 3 and 1+2 = 3 SAME LEFT DIAGONAL DONT ADD 
// STORE RIGHT DIAGONAL IE rowIndex-colIndex  FOR EG  2-1 = 1 and 1-0 = 1 SAME RIGHT DIAGONAL DONT ADD 

let placeQueen2 = function (n,rowIndex, grid,cols,leftDiagonal,rightDiagonal) {
    if(rowIndex == grid.length){
        console.log(grid);
        console.log("--------");
    }


    for (let j = 0; j < n; j++) {
        //if(isSafe(grid,rowIndex,j)){
        if (cols.indexOf(j) == -1 && leftDiagonal.indexOf(rowIndex + j) == -1 && rightDiagonal.indexOf(rowIndex - j) == -1) {
            grid[rowIndex][j] = 'Q';
            cols.push(j);
            leftDiagonal.push(rowIndex + j);
            rightDiagonal.push(rowIndex - j);
            placeQueen2(n, rowIndex + 1, grid,cols,leftDiagonal,rightDiagonal);
            grid[rowIndex][j] = '.';
            cols.pop();
            leftDiagonal.pop();
            rightDiagonal.pop();
        }
    }

}


// Famous Problem N Queen
let n2 = 4;

let grid2 = [];

for (let i = 0; i < n; i++) {
    grid2.push(new Array(n).fill("."));
}

//placeQueen2(n2,0,grid2,[],[],[]);



//SUDOKO SOLVER
let canPlace =  function (arr,rowIndex,colIndex,val){
    //column
    for (let j = 0; j < arr.length; j++) {
        if(arr[rowIndex][j] == val+""){
            return false;
        }
    }

    //row
    for (let j = 0; j < arr.length; j++) {
        if(arr[j][colIndex] == val+""){
            return false;
        }
    }

    if(rowIndex == 1 && val == "3" && colIndex == 0){
        console.log("Check");
    }
    //3*3 grid
    let gridRow = rowIndex - rowIndex%3;
    let gridCol = colIndex - colIndex%3;
    for (let j = gridRow; j <= gridRow+2; j++) {
        for(let i = gridCol; i <= gridCol+2; i++){
            if(arr[j][i] == val+""){
                return false;
            }
        }
    }
    return true;

}

let sudokoSolver = function (arr,rowIndex,colIndex) {
    if(rowIndex < 0 || rowIndex >= arr.length){

        return true;
    }

    let nrow = colIndex == 8 ? rowIndex+1:rowIndex;
    let ncol =  colIndex == 8 ? 0:colIndex+1

    if(arr[rowIndex][colIndex] == '.'){
        for (let val = 1; val <= arr.length; val++) {
            if(canPlace(arr,rowIndex,colIndex,val)) {
                arr[rowIndex][colIndex] = val+"";
                if(sudokoSolver(arr,nrow,ncol)){
                    return true;
                }
                arr[rowIndex][colIndex] = '.';
            }
        }   
    }
    else{
        if(sudokoSolver(arr,nrow,ncol)){
            return true;
        }
    }

    return false;
}


let sudoko = [];

for (let i = 0; i < 9; i++) {
    sudoko.push(new Array(9).fill("."));
} 



let sudokoFun = function (arr) {
    if(sudokoSolver(arr,0,0)){
        console.log("SUDOKO SOLVED",arr);
    }
}

sudokoFun(sudoko)









