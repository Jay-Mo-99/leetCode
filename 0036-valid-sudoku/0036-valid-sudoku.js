/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  for (let i = 0; i < 9; i++) {
    let row = new Set(),
        col = new Set(),
        box = new Set();

    for (let j = 0; j < 9; j++) {
      let _row = board[i][j];
      let _col = board[j][i];
      let _box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]
      
      
      if (_row != '.') {
         //빈값이아니면서, 이미 있던 값이면, return false invailid sudoku
        if (row.has(_row)) return false;
          //처음 발견한 값이면, _row를 추가
        row.add(_row); //세트에 추가
      }
      if (_col != '.') {
        if (col.has(_col)) return false;
        col.add(_col);
      }
      
      if (_box != '.') {
        if (box.has(_box)) return false;
        box.add(_box);
      } 
    }
  }
  //끝까지 loop가 false없이 돌았다면 true리턴 valid sudoku인게 인증됨
  return true
};
