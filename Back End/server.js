const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
const server = http.createServer(app);
//bodyparser for passing JSON around without having to parse each time


const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./sounderUsers.db"
  }
});

const users = knex('users');

const corsOptions = {
  methods: ['GET', 'PUT', 'POST'],
  origin: '*',
  allowedHeaders: ['Content-Type']
};

var port = 4321;

app.use(cors(corsOptions));
app.use(express.static(__dirname + '/site'));

app.get('/sounder/users/', (request,response) =>{
  users.select().then((data)=>{
    knex.select().from('users').where('karma', 2).then((values)=>{
      response.send(values);
    });
  });
});



server.listen(port);
console.log("Listening on port %d", server.address().port);
