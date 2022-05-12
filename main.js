const makeNewMatrix = function () {
  // this will provide a NEW matrix each time it is called.
  return [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
};

let processedMatrix;

const populateCell = function (cellId, value) {
  const element = document.getElementById("c" + cellId);
  element.innerHTML = value;
  return true;
};

const displayMatrix = function (matrix) {
  // process rows
  for (let r = 0; r < matrix.length; r++) {
    const row = matrix[r];
    // process columns
    for (let c = 0; c < row.length; c++) {
      const column = row[c];
      const cellId = r.toString() + c.toString();
      populateCell(cellId, column);
    }
  }
};

function swap(matrix, r, c, newR, newC) {
  let temp = matrix[c][r];
  matrix[c][r] = matrix[newC][newR];
  matrix[newC][newR] = temp;
}

function exchangeCols(matrix) {
  // work in from outside
  let N = matrix.length; // we need only swap N/2 (rounded down)
  let n = Math.floor(N / 2); // round down to integer
  for (let col = 0; col < n; col++) {
    for (let row = 0; row < N; row++) {
      swap(matrix, col, row, N - 1 - col, row);
    }
  }
}

function transpose() {
  processedMatrix = makeNewMatrix();
  // process row
  for (let r = 0; r < processedMatrix.length - 1; r++) {
    // process column
    for (let c = r + 1; c < processedMatrix.length; c++) {
      swap(processedMatrix, r, c, c, r);
    }
  }
}

function rotate() {
  transpose();
  exchangeCols(processedMatrix);
}

function update() {
  displayMatrix(processedMatrix);
}

function reset() {
  processedMatrix = makeNewMatrix();
  displayMatrix(processedMatrix);
}

reset();

/*
=== TEACHER ===
const A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function transpose(A) {
  // we need only swap upper triangle with lower
  let N = A.length;
  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      swap(A, i, j, j, i);
    }
  }
}
function swap(A, i, j, k, l) {
  let temp = A[j][i];
  A[j][i] = A[l][k];
  A[l][k] = temp;
}
function exchangeCols(A) {
  // work in from outside
  let N = A.length; // we need only swap N/2 (rounded down)
  let n = Math.floor(N / 2); // round down to integer
  for (let col = 0; col < n; col++) {
    for (let row = 0; row < N; row++) {
      swap(A, col, row, N - 1 - col, row);
    }
  }
}
function rotateMatrix(A) {
  transpose(A);
  exchangeCols(A);
}
transpose(A);
exchangeCols(A);
console.log(JSON.stringify(A));
*/
