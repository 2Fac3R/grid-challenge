# 2D Grid Challenge

This repository implements my solution to the 'challenge.txt' file.

**Notes**:

- I added a second 'f2' function which is pretty similar to the '*f*' function but with no validation at all, this is used for creating *fakePositions* for the main 'f' function.
- All validations work individually but they do NOT work together (yet).
- Validations (7/7):
  - v1() solves tests: 1, 3.
  - v2() solves tests: 2, 4, 6.
  - v3() solves tests: 5, 7.
- Test them individually commenting the others in '*validateAll*' function.

**Improvements / TO DO:**

- Fix: Validations should work together.
- Find a way to reuse the main 'f' function, maybe '*f2*' is not necessary at all.
- Split all the functions into small pieces, maybe a 'validations' folder, for example. 

**Thoughts**:

- I think I'm missing something "easy" to solve the problem of validations not working together.
  This could be because of logic thinking or a js solving pattern that I don't know yet.
- I tried to use the best JavaScript possible with my current knowledge.
- I didn't use any third-party library to solve the problem, because i think it would be cheating.
  Probably in a real scenario I would have done it.