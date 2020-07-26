
const express = require('express');

const router = express.Router();
const Infos = require('./infomodel');

const mongoose = require('mongoose');

// class Data {
//   constructor(code, names, emails) {
//     this.code=code;
//     this.names = names;
//     this.emails = emails;
//   }
// }

var d = Date(); 
let info = [
  {_id: "", code: 123456, members: {fname: null, lname: null, email: null,  created_date: null}},
  {_id: "", code: 234567, members: {fname: null, lname: null, email: null,  created_date: null}},
   {_id: "", code: 345678, members: {fname: null, lname: null, email: null,  created_date: null}},
   {_id: "", code: 456789, members: {fname: null, lname: null, email: null,  created_date: null}},
   {_id: "", code: 567891, members: {fname: null, lname: null, email: null,  created_date: null}}];
let members = [];


const app = express();

let questions = [
    {id: 1, ques: 'This is question 1', opt1: 'Option 1', opt2: 'Option 2', opt3: 'Option 3', correct: "Option 2"},
    {id: 1, ques: 'This is question 2', opt1: 'Option 1', opt2: 'Option 2', opt3: 'Option 3', correct: "Option 1"},
    {id: 2, ques: 'This is question 2', opt1: 'Option 1', opt2: 'Option 2', opt3: 'Option 3', correct: "Option 1"},
    {id: 3, ques: 'This is question 1', opt1: 'Option 1', opt2: 'Option 2', opt3: 'Option 3', correct: "Option 2"},
    {id: 4, ques: 'This is question 2', opt1: 'Option 1', opt2: 'Option 2', opt3: 'Option 3', correct: "Option 1"},
    {id: 4, ques: 'This is question 2', opt1: 'Option 1', opt2: 'Option 2', opt3: 'Option 3', correct: "Option 1"},
    {id: 3, ques: 'This is question 1', opt1: 'Option 1', opt2: 'Option 2', opt3: 'Option 3', correct: "Option 2"},
    {id: 1, ques: 'This is question 2', opt1: 'Option 1', opt2: 'Option 2', opt3: 'Option 3', correct: "Option 1"},
    {id: 4, ques: 'This is question 2', opt1: 'Option 1', opt2: 'Option 2', opt3: 'Option 3', correct: "Option 1"},
    {id: 5, ques: 'This is question 1', opt1: 'Option 1', opt2: 'Option 2', opt3: 'Option 3', correct: "Option 2"},
    {id: 5, ques: 'This is question 2', opt1: 'Option 1', opt2: 'Option 2', opt3: 'Option 3', correct: "Option 1"},
    {id: 4, ques: 'This is question 2', opt1: 'Option 1', opt2: 'Option 2', opt3: 'Option 3', correct: "Option 1"},
    {id: 1, ques: 'This is question 1', opt1: 'Option 1', opt2: 'Option 2', opt3: 'Option 3', correct: "Option 2"},
    {id: 1, ques: 'This is question 2', opt1: 'Option 1', opt2: 'Option 2', opt3: 'Option 3', correct: "Option 1"},
    {id: 2, ques: 'This is question 2', opt1: 'Option 1', opt2: 'Option 2', opt3: 'Option 3', correct: "Option 1"},
    {id: 3, ques: 'This is question 1', opt1: 'Option 1', opt2: 'Option 2', opt3: 'Option 3', correct: "Option 2"},
    {id: 4, ques: 'This is question 2', opt1: 'Option 1', opt2: 'Option 2', opt3: 'Option 3', correct: "Option 1"},
    {id: 2, ques: 'This is question 2', opt1: 'Option 1', opt2: 'Option 2', opt3: 'Option 3', correct: "Option 1"},
    {id: 4, ques: 'This is question 1', opt1: 'Option 1', opt2: 'Option 2', opt3: 'Option 3', correct: "Option 2"},
    {id: 3, ques: 'This is question 2', opt1: 'Option 1', opt2: 'Option 2', opt3: 'Option 3', correct: "Option 1"},
    {id: 2, ques: 'This is question 2', opt1: 'Option 1', opt2: 'Option 2', opt3: 'Option 3', correct: "Option 1"},
    {id: 1, ques: 'This is question 1', opt1: 'Option 1', opt2: 'Option 2', opt3: 'Option 3', correct: "Option 2"},
    {id: 5, ques: 'This is question 2', opt1: 'Option 1', opt2: 'Option 2', opt3: 'Option 3', correct: "Option 1"},
    {id: 5, ques: 'This is question 2', opt1: 'Option 1', opt2: 'Option 2', opt3: 'Option 3', correct: "Option 1"}
  ];
  

app.get('/api/questions', (req, res) => {
  questions = questions.sort(function(a, b){return a.id - b.id;});
  res.json(questions);
});

app.post('/api/questions/:param1/:param2/:param3/:param4/:param5/:param6', (req, res) => {
  const ide = req.params["param1"];
  const quest = req.params["param2"];
  const option1 = req.params["param3"];
  const option2 = req.params["param4"];
  const option3 = req.params["param5"];
  const correctoption = req.params["param6"];

  questions.push({id: parseInt(ide), ques: quest, opt1: option1, opt2: option2, opt3: option3, correct: correctoption});
  res.send(questions);
});

app.get('/api/info', (req, res) => {
  res.json(info);
});  


app.post('/info/:param1/:param2/:param3/:param4/', (req, res) => {
  
  res.redirect('localhost:3000/');

  id =  new mongoose.Types.ObjectId();
  const fnames = req.params["param1"];
  const lnames = req.params["param2"];
  const emails = req.params["param3"];
  const code = req.params["param4"];
  d = Date();
  let i = 0;
  let count = 0;
  let data=null;

  // data.names.push(fname+" "+lname);
  // data.emails.push(email);



  for(i = 0; i < info.length; i++){
    if(info[i].email === emails){
      count++;
    }
  }
alert(i);
  for(i = 0; i < info.length; i++){
    if(info[i].code === code){
      
      info[i].members["fname"].push(fnames);
      info[i].members["lname"].push(lnames);
      info[i].members["email"].push(emails);
      data=info[i];
    }
  }
  
  // info[i].pop();

  if(count === 0){
    // members.push({fname: fnames, lname: lnames, email: emails,  created_date: d.toString()});
    info.push(data);
    localStorage.setItem("info", info);
    res.send(info);
  }
  else{
    localStorage.setItem("info", info);
  }
  members = []
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
