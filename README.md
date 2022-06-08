# Weekly Project 2

## To get started

1. Clone this repository.
2. Run `yarn install` (must use `yarn` since this repo is using "yarn workspaces").
3. Run `yarn start` to start the dev server.
4. Open [http://localhost:3000](http://localhost:3000) in your browser and start profiling its performance.

## How to work?

Your goal is to find and fix performance issues related to this week's material: 

- Bundling, dependencies, tree shaking, side-effects, lazy loading, JS waterfalls.
- JS performance, O-complexity.
- Layout performance and shifting. Forced reflows.
- Animation performance.

## Optimization guidance

- You are not supposed to remove any existing logic, but in some cases you can replace libraries with better or smaller alternatives.
- Optimising the video game requires you to get your hands dirty. First to understand the code, and then to rewrite parts of it. Hopefully TypeScript helps. 
- You do not have to fix any issues from last week's material. We already covered that stuff in the previous Weekly Project.
- There are some minor JS performance issues in the code which I want you to fix in this weekly project as an exercise, even though they don't seriously affect the performance of the app. In the real world, you should not focus on these kinds of "non-issues".

## Delivery

Your delivery is your fork of the github repository with all of your changes.

Your solution should be yours alone. You are welcome and encouraged to support your classmates. You can help them understand the material better, collaborate and brainstorm on solutions, share online resources and even discuss your approach in detail. But there should be **no sharing of code** whatsoever. Issues around this will be reported to the university and may have consequences for both of the parties involved.

## Grading

**Finish on time:** 30% (changes to 15% if delivered late or with less then half of the requirements)

**Requirements:** 60%

**Extra challenges:** 10% each (max 2)


## Tasks

**General requirements:**
- [x] Get rid of duplicate lodash in our bundles.
- [x] Switch to tree-shared lodash imports.
- [x] Code-split each route to have its own bundle.
** Frontpage requirements: **
- [x] Use `contain` and `content-visibility` for “everything” below the fold. 
- [x] Fix layout shifting of the hero image with HTML/CSS.
- [x] Don’t lazy load the Hero section (Fix JS waterfall).
- [x] Lazy load the entire Form component.
- [x] Only load the phone number validation if I’m actually interacting with the form.
- [x] Replace moment.js with a smaller date library (which supports tree-shaking?).
- [x] Ignore side-effects in the News component.
** Videogame requirements: **
- [x]  Move entities with transform instead of left/top (so it can skip layout/paint).
- [x]  Create GPU layers for all entities so they composite on the GPU (“will-change”).
- [x]  Improve removeDeadEntities to be O(n) instead of O(n^2).
- [x]  Get rid of unnecessary re-paints in the game “status” element (in the corner).
- [ ]  Eliminate constant repaints when switching between levels. Don’t animate background-color. Instead animate opacity of 2 differently coloured elements.
- [x]  Optimise game elements with `contain` style.
- [ ]  Get rid of forced reflows when moving entities (don’t read and write constantly, either store locations in JS or batch the reads/writes).
- [ ]  Optimise collision detection to be “O(n) + O(s*e)” where `s` is the number of shots and `e` is the number of enemies (only check if shots collide with enemies).
** Either: **
- [ ]  Hide “dead” elements with opacity and remove them from the DOM in the end of the level.
- [ ]  Remove “dead” elements from the DOM after collision detection is finished.
** Extra challenges (max 2): **
- [ ] Reimplement the game graphics with Canvas.
- [ ] Rewrite position and collision detection to not read ANYTHING from the DOM.
- [ ] Implement pooling of entities (instead of removing them from the DOM, just hide them, and reuse them later instead of creating a new element).
- [ ] Make the game better. Add features/graphics/audio.