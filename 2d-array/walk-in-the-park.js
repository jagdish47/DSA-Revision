let arr = [
  ["R", "R", "D", "R"],
  ["L", "L", "U", "D"],
  ["L", "L", "L", "L"],
];

let r = arr.length;
let c = arr[0].length;

let ans = countSteps(arr, r, c);
console.log(ans);

function countSteps(arr, r, c) {
    let i = 0, j = 0;
    let count = 0;

  while (i < r && i >= 0 && j >= 0 && j < c) {
    if (arr[i][j] == 1) {
      return count;
    }

    let temp = arr[i][j];
    arr[i][j] = 1;
    if (temp == "R") {
      j++;
    } else if (temp == "L") {
      j--;
    } else if (temp == "D") {
      i++;
    } else {
      i--;
    }

    count++;
  }

  return count;
}
