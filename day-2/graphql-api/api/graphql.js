
const path = require('path');
const fs = require('fs');

const graphql = require('graphql');
const express = require('express');
const expressGraphql = require('express-graphql');

const SCHEMA_FILE_NAME = 'schema.graphql';


class GraphQL {

  constructor() {
    this._router = express.Router();

    const api = expressGraphql({
      schema: this._getSchema(),
      rootValue: this._getResolvers(),
      graphiql: true
    });

    this._router.use(api);
  }

  router() {
    return this._router;
  }

  _getSchema() {
    const schemaFilePath = path.join(__dirname, SCHEMA_FILE_NAME);
    const schemaDefinition = fs.readFileSync(schemaFilePath, 'utf8');
    return graphql.buildSchema(schemaDefinition, { commentDescriptions: true });
  }

  _getResolvers() {
    return {
      book: async ({ id }) => {
        return {
          title: 'Some book',
          author: {
            name: 'Anny Tigo'
          },
          year: 2109
        };
      },

      author: ({ name }) => {
        return {
          name: 'Anny Tigo'
        };
      }
    };
  }

}

module.exports = GraphQL;
