require('dotenv').config()

const fs = require('fs');
const path = require('path');

const express = require('express')
const { createServer } = require('http');
const { ApolloServer, gql } = require('apollo-server-express');

const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const db = require('mongoose');
db.connect(process.env.DB, { useNewUrlParser: true })
const PORT = process.env.PORT || 3000;

const schema = require('./graphql/index');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({
    limit: '50mb'
}))

app.use('*', cors())

const server = new ApolloServer({
    schema,
    context: async ({ req, res, next}) => {
        return {
            db,
            req
        }
    },
    introspection: true,
    playground: true,
    subscriptions: {
        onConnect: (connectionParams, webSocket) => {
            console.log(connectionParams);
            console.log(webSocket);
        }
    }
})

server.applyMiddleware({
    app,
    path: '/'
});

const webSocketServer = createServer(app);

server.installSubscriptionHandlers(webSocketServer);

webSocketServer.listen(PORT, () => {
    console.log(`🚀🚀🚀🚀🚀🚀🚀 Server ready at http://localhost:${PORT}`);
})