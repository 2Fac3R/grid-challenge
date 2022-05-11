const v1 = (list, fakePositions, newPositions) => {
  // No person can walk into a space occupied by a person who is not moving.
  if (!newPositions.length) {
    return false;
  }

  if (list.includes(fakePositions)) {
    return false;
  }

  return true;
}

const v2 = (newPositions, fakePositions) => {
  // No two or more people can walk into the same space.  
  // If that would happen, then neither person moves.
  if (!newPositions.includes(fakePositions)) {
    return false;
  }

  return true;
}

const v3 = (list, fakePositions, position) => {
  // No two adjacent people can swap positions.
  // If that would happen, then neither person moves.
  let found = null;
  for (let index = 0; index < fakePositions.length; index++) {
    if (fakePositions[index] === position) {
      found = index;
      break;
    }
  }

  if (fakePositions.includes(list[found])) { // swap
    return false;
  }

  return true;
}

const validateAll = (list, newPositions, fakePositions, position) => {
  /**
   * Userlab Challenge
      The task is to write a function that predicts the next locations 
      of people on a 2d grid, given each person's current location and
      the direction they step.
  */

  // Each validation works individually but they do not work together yet.
  if (v1(list, fakePositions, newPositions)) { // Solves tests: 1, 3
    return false;
  }

  if (v2(newPositions, fakePositions)) { // Solves tests: 2, 4, 6
    return false;
  }

  if (v3(list, fakePositions, position)) { // Solves tests: 5, 7
    return false;
  }

  return true;
}

const f = (list) => {
  const newPositions = [];
  const fakePositions = f2(list);
  // console.log(`positions -> ${list}`);
  // console.log(`fake -> ${fakePositions}`);

  try {
    list.map(positions => {
      let [position, move] = positions;
      let [x, y] = position;
      const MOVEMENTS = {
        'n': (grid) => grid.push([x, ++y]), // north
        'e': (grid) => grid.push([++x, y]), // east
        's': (grid) => grid.push([x, --y]), // south
        'w': (grid) => grid.push([--x, y])  // west
      }
      const defaultMove = (grid) => grid.push([x, y]); // null
      const makeMove = (grid) => MOVEMENTS[move] ? MOVEMENTS[move](grid) : defaultMove(grid);

      // console.log(`pos -> ${position}`);
      validateAll(positions, newPositions, fakePositions, position)
        ? makeMove(newPositions)
        : defaultMove(newPositions);

      // console.log(newPositions);
    });
  } catch (error) {
    throw error;
  }

  return newPositions;
}

const f2 = (list) => {
  const fakePositions = [];

  try {
    list.map(positions => {
      let [position, move] = positions;
      let [x, y] = position;
      const MOVEMENTS = {
        'n': (grid) => grid.push([x, ++y]), // north
        'e': (grid) => grid.push([++x, y]), // east
        's': (grid) => grid.push([x, --y]), // south
        'w': (grid) => grid.push([--x, y])  // west
      }
      const defaultMove = (grid) => grid.push([x, y]); // null
      const makeMove = (grid) => MOVEMENTS[move] ? MOVEMENTS[move](grid) : defaultMove(grid);

      makeMove(fakePositions);
    });
  } catch (error) {
    throw error;
  }

  return fakePositions;
}

// const myList = [[[0, 0], "e"], [[1, 0], "n"], [[1, 1], "w"], [[0, 1], "s"], [[2, 0], "w"]];

// console.log(`Output: ${f(myList)}`);

module.exports = f;