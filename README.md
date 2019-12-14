In order to run the application you will need to run both `yarn start` and `yarn nodemon server.js`

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn nodemon server.js`

Runs the backend portion of the application.

You might have to tweak `server.js`, and what mongodb server it is pointing at. Currently just setting it based on the port Kitematic spins up for a docker mongodb instance

### What I want to do

0. Refactor EditTaskForm - use Final Form
1. Use flex instead of floats
1. Make formal pages that the form and task list view lives in
1. break apart the context
1. finish up the unit test on react components
1. unit test the endpoints (server.js)
