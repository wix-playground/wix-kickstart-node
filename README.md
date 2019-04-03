# node-wix-kickstart

## Day 0 (1h) [link](day-0/INFO.md)

#### Topic 1: Base JavaScript


## Day 1 (6h) [link](day-1/INFO.md)

#### Topic 1. Introduction to Node.js

 - Meet Node.js; 
 - History of Node.js
 - Strengths and weaknesses of Node.js; 
 - Installing Node.js using `brew` and `nvm`; 
 - Example: "Hello, world!".
 
#### Topic 2. Console programs

 - Standard libraries and Node.js functions; 
 - Console programs on Node.js, example: "Hello, {name}!"; 
 - Processing arguments at startup; 
 - Work with environment variables; 
 - Example: "Hello, {env}!"; 
 - Using core libraries (`fs` etc)
 - Example: Writing and reading from file
 - Using external libraries (`npm` package manager, `lodash` etc)
 - Example: Get random numbers from from 1 to 100 (by `lodash`)
 
#### Topic 3. Project structure

 - Basic `package.json`
 - Examples of usable folder structures
 
#### Topic 4. Work with network queries

 - Processing incoming HTTP requests (server on `http` module); 
 - Outgoing HTTP requests (using 'http' and `axios` modules);
 - Example: server with endpoint which returns server time.
 - Example: get random names from external public API (by `uinames.com`).

#### Topic 5. Express Framework

 - Familiarity with the framework `Express.js`; 
 - Familiarity with the templates (ie `ejs`);
 - External `middlewares`;
 - Example: create endpoint for getting BTC price from Binance exchange
 - Example: create fixture server for FE development

## Day 2 (6h)

#### Topic 6. API (REST)

 - Creating a REST API;
 - Basic testing of API;
 - Example: Base API for service for currency exchange (in-memory storage);

#### Topic 7: CORS, Authentication and Authorization

 - Creating and using cross-domain APIs using REST API + CORS; 
 - Continuing the development of a TODO application: editing and deleting items;
 - Working with cookies and sessions, authorization (using JWT, Passport.js).
 
#### Topic 8: Storages (file db, MongoDB, MySQL, Redis etc)

 - Working with `file db`; 
 - The creation and use of modules;
 - Overview of DBs (before ask about problems with `file db`)
 - Example: creating a TODO API (the basis UI with input and display of items).
 
#### Topic 9. WebSockets

 - Work with WebSockets via `ws`; 
 - Example: simple real-time changes of UI; 

#### Topic 10: What next?

 - `pm2` process manager;
 - Creating a GraphQL API; 
 - About `wix-node-platform`
 - Useful links and tools;
 - List of books;
