/* Validate Soduku Board */

function isValidSudoku(){
    
    const board = [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
["6", ".", ".", "1", "9", "5", ".", ".", "."],
[".", "9", "8", ".", ".", ".", ".", "6", "."],
["8", ".", ".", ".", "6", ".", ".", ".", "3"],
["4", ".", ".", "8", ".", "3", ".", ".", "1"],
["7", ".", ".", ".", "2", ".", ".", ".", "6"],
[".", "6", ".", ".", ".", ".", "2", "8", "."],
[".", ".", ".", "4", "1", "9", ".", ".", "5"],
[".", ".", ".", ".", "8", ".", ".", "7", "9"]];


const rows = Array.from({ length: 9 },()=>new Set());
const columns = Array.from({ length : 9},()=>new Set());
const boxes = Array.from({ length: 9},() => new Set());


for (let r =0; r < 9; r++){
    for (let c = 0; c< 9; c++){
        const value = board[r][c];
        
        // if value is . then continue
        if(value === ".") continue;
        
        // check if any value is valid (only should be 1-9)
        if(!/^[1-9]$/.test(value)) {
            return false;
        }
        
        // Rows check
        if(rows[r].has(value)) return false;
        rows[r].add(value);
        
        //Columns check
        if(columns[c].has(value)) return false;
        columns[c].add(value);
        
        // sudoku Boxes check like 3*3 
        const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
        if(boxes[boxIndex].has(value)) return false;
        boxes[boxIndex].add(value);
    }
}
return true;
}
console.log(isValidSudoku());