## Setup

1. Clone & install

git clone
cd understanding-typescript
npm install

## How to work through the exercises

1. Open the next file in src/exercises/0../ (start at 01_variables.ts).
2. Read the short TODO/GOAL comment.
3. Fix the types / code as requested (keep it minimal).
4. Run tests, they should turn green when you’re correct.
5. Move to the next file.

!!!Important: keep each fix focused on the concept in the file.
Don’t refactor beyond what the goal says.

## What the tests check?

- Type-level correctness with expectTypeOf (e.g., param and return types).
- Runtime sanity checks (e.g., simple output/behavior) where useful.
- This combination teaches you to satisfy both the TypeScript compiler and actual behavior.

## One-exercise-at-a-time mode

By default, all tests are commented out so that your editor doesn’t display hundreds of red squiggles. You’ll focus on one exercise at a time.

## When starting a new exercise:

1. Open its matching file in tests/.
2. Uncomment only the tests for the current exercise
3. npm run test or npm run test:watch
4. Fix the code until that test passes.
5. When it’s green, comment it again and move on to the next one.
