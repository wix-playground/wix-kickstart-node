
const express = require('express');

const GraphqlApi = require('./api/graphql');

const app = express();
const port = 3000;

const qraphqlApi = new GraphqlApi();

app.use('/graphql', qraphqlApi.router());

app.listen(port, () => {
  console.log(`GraphQL API listening on port ${port}!`);
});
