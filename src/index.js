const f = require('./f');
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b)
const test = (input, output) => {
  console.log(
    eq(f(input), output)
  )
}

test(
  [[[0, 0], "n"], [[-1, 0], "e"], [[-2, 0], "e"], [[1, 0], "w"]],
  [[0, 1], [-1, 0], [-2, 0], [1, 0]],
)
test(
  [[[0, 0], ""], [[0, 1], "n"], [[0, 2], "n"], [[0, 3], "e"]],
  [[0, 0], [0, 2], [0, 3], [1, 3]],
)
test(
  [[[0, -1], "n"], [[0, -2], "n"], [[0, -3], "n"], [[1, -2], "w"]],
  [[0, 0], [0, -2], [0, -3], [1, -2]],
)
test(
  [[[0, 0], "e"], [[1, 0], "n"], [[1, 1], "w"], [[0, 1], "s"], [[2, 0], "e"]],
  [[1, 0], [1, 1], [0, 1], [0, 0], [3, 0]],
)
test(
  [[[0, 0], "e"], [[1, 0], "n"], [[1, 1], "w"], [[0, 1], "s"], [[2, 0], "w"]],
  [[0, 0], [1, 0], [1, 1], [0, 1], [2, 0]],
)
test(
  [[[0, 1], "s"], [[1, 1], "w"], [[1, 0], "n"], [[0, 0], "e"], [[2, 0], "e"]],
  [[0, 0], [0, 1], [1, 1], [1, 0], [3, 0]],
)
test(
  [[[0, 0], "n"], [[0, 1], "s"]],
  [[0, 0], [0, 1]]
)