const express = require('express');

const bodyParser= require('body-parser');
const api = express();
api.use(bodyParser.json());

api.use(express.static(__dirname + '/public'));
api.listen(3000, ()=>{
  console.log('Api running');
});

// api.get('/', (req, res)=>{
//
//   res.send('Hello');
// });

api.post('/add', (req,res)=>{

  console.log(req.body);
  res.send('It works');
});
