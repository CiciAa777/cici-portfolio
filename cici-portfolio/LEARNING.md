# Learn frontend development through your portfolio

The goal is to maintain this site yourself and understand what happens between editing a file and publishing a page.

## The big picture

Two environments run JavaScript in this project:

1. **Your computer / Node.js:** runs development tools such as Vite and the TypeScript compiler.
2. **The visitor’s browser:** runs the JavaScript Vite produces, updates the page, and handles project filter clicks.

Node.js is a JavaScript runtime outside the browser. npm is the package manager and command runner. Vite is a development server and build tool. TypeScript adds type checking to JavaScript. They are different pieces of the workflow.

This version publishes static HTML, CSS, and JavaScript. Node runs during development and builds; GitHub Pages serves the finished files. There is no Node backend serving requests in production.

| Familiar Python idea | Rough comparison here |
| --- | --- |
| A Python runtime | Node.js runs JavaScript outside the browser |
| `pip` | npm installs packages |
| Dependency metadata and pinned versions | `package.json` and `package-lock.json` |
| Typed dictionaries / dataclasses | TypeScript interfaces describe data shapes |
| A list of dictionaries | The `projects` array in `src/data.ts` |

These are analogies, not identical mechanisms. TypeScript types disappear during compilation and do not validate incoming JSON at runtime.

## Stage 1 — See how a page is assembled (30–45 minutes)

Run `npm ci`, then `npm run dev`. Read `index.html` and identify the header, navigation, page views marked with `data-view`, and footer. Find the `<script type="module">` that loads `src/main.ts`.

Make two changes yourself:

- Rewrite the introduction in your own voice.
- Change one color in `src/styles.css`.

Checkpoint: explain which file changes content and which file changes appearance.

Read only as needed: [MDN HTML basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content) and [CSS basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content).

## Stage 2 — Understand TypeScript through data (45–60 minutes)

Read `Project` in `src/types.ts`, then inspect one project in `src/data.ts`. An interface describes the expected fields. `satisfies Project[]` checks the array while preserving its inferred types.

Make three changes:

- Add a link to a project that currently has no repository link.
- Change a project’s category to another allowed category.
- Temporarily misspell a category and run `npm run check`. Read the error, then fix it.

Checkpoint: explain how a type catches a mistake before someone opens the site.

Read: [TypeScript for JavaScript programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html). If array methods, arrow functions, or imports are unfamiliar, learn those JavaScript concepts first.

## Stage 3 — Trace the filter interaction (45–60 minutes)

Read `src/main.ts` in this order: `activeFilter` → button `addEventListener` → `updateProjects` → `.filter` → `.map` → `innerHTML`.

The browser represents HTML elements as a DOM. A click listener changes state; the rendering function uses that state to update the visible collection. `textContent` inserts plain text, while `innerHTML` parses markup. The escaping helper keeps data strings from being treated as HTML.

Your next feature: add a title search field above the project collection. Combine its search condition with the existing category condition. Keep the search field outside the container being rerendered so typing does not lose focus.

Checkpoint: explain the difference between the data array, the current filter state, and the visible DOM.

Read as needed: [MDN DOM introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).

## Stage 4 — Learn what Node and npm actually do (30–45 minutes)

Read `package.json`. `npm run dev` looks up its script and runs Vite using Node. `npm ci` installs the versions recorded in the lockfile. `npm run build` runs the type checker, then Vite writes production files to `dist/`.

Run `npm run build` and inspect the resulting `dist/index.html`. Notice that it references bundled JavaScript, not your original `.ts` file. Run `npm run preview` to inspect the built output.

Checkpoint: explain why Node is needed on your computer even though a visitor does not install Node to open your website.

Read: [Node.js introduction](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs), [npm introduction](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager), and [Vite getting started](https://vite.dev/guide/).

## Stage 5 — Publish and maintain (45–60 minutes)

Create the website repository, choose GitHub Actions for Pages, and read the included deployment workflow. After deployment, change one sentence locally, commit, and push. Watch the workflow rebuild the site.

Checkpoint: explain the difference between source files in Git, generated files in `dist/`, and the URL people visit.

Read: [Vite on GitHub Pages](https://vite.dev/guide/static-deploy.html#github-pages).

## After the first version

Add a photo, improve mobile spacing, add your résumé and contact links, and write a more detailed case study for one flagship project. Later, React + TypeScript can be a useful next step if you want to practice component-based UI development; this small site first gives you the underlying HTML, CSS, data, and event concepts.

A backend becomes relevant when you need server-side processing or private credentials. Never put an API secret in browser code.

## Extra exercise — understand navigation

Trace a click on About: the URL hash changes → the `hashchange` event fires → `navigate()` chooses a typed page name → each view’s `hidden` property updates → the active link and page title change. Use the browser Back button and observe the same flow. Try adding a new page after you understand the existing five views.
