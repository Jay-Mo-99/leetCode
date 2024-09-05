/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  // 행, 열, 서브박스를 저장할 배열
  let rows = Array.from({ length: 9 }, () => new Set());
  let cols = Array.from({ length: 9 }, () => new Set());
  let boxes = Array.from({ length: 9 }, () => new Set());

  // 보드의 각 칸을 순회
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let num = board[r][c];

      // 빈 칸은 무시
      if (num === ".") continue;

      // 각 3x3 서브박스의 인덱스를 계산
      let boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      // 행, 열, 서브박스에 숫자가 이미 있으면 유효하지 않음
      if (rows[r].has(num) || cols[c].has(num) || boxes[boxIndex].has(num)) {
        return false;
      }

      // 현재 숫자를 행, 열, 서브박스에 추가
      rows[r].add(num);
      cols[c].add(num);
      boxes[boxIndex].add(num);
    }
  }

  // 모든 검사를 통과하면 유효한 스도쿠
  return true;
}