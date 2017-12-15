# Zen-Den

## Follow these steps to use in development

1. In the root directory run npm install or yarn install
2. cd into the client directory run npm install or yarn install again
3. 'cd..'
4. Git bash or terminal at the root directory and run 'PORT=3001 node bin/www'
 * This will start your node server, there is dummy data in there now that will be replaced with calls to the database eventually
5. Git bash or terminal in the client directory and run 'yarn start'
 * This will run your frontend (React) on port 3000.
 * There is a proxy set up so that all calls on port 3000 (React) forward to our backend server.
