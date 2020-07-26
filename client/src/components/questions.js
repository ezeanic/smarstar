
import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'


var scoreexport=[null, null, null, null, null]

class Questions extends Component {
  constructor() {
    super();
    this.state = {
      valindex: -1,
      value: [],
      questions: [],
      answers:[],
      VAL: [0,0,0,0,0],
    };
    this.Change = this.Change.bind(this);
    this.checkSubmit = this.checkSubmit.bind(this);
  } 

  Change(e) {
    let a = this.state.value;
    a[e.target.name] = e.target.value;
    this.setState({
      value: a
    });
  };

  checkSubmit(e){
    
    let i = 0;
    let score = 0;
    let z = this.state.VAL;
    let a = this.state.answers;
    let b = this.state.value;
    b.sort(function(a, b) {
      if(a === "" || a === null || a === "u"){return 1};
      if(b === "" || b === null || b === "u"){return -1};
      if(a === b); return 0;
    });

    for(i = 0; i < a.length; i++){
      if(b[i] === a[i]){
        score++;
      }
    }
    for(i = 0; i < b.length; i++){
      if(b[i] === undefined){
        b[i] = "u";
      }
    }
    b.sort(function(a, b) {
      if(a === "u" || a === null){return -1};
      if(b === "u" || b === null){return 1};
      if(a === b); return 0;
    });
    this.setState({
      value: b
    });
    alert("You will restart after leaving page - " + score);
    // alert(this.state.value);
    z[e.target.name] = score;
    this.setState({
      VAL: z      
    });
    
    e.preventDefault();
    
  }

  componentDidMount() {
    let url = `/api/questions/`;
    fetch(url)
      .then(res => res.json())
      .then(questions => this.setState({questions}, () => console.log('Questions fetched...', questions)))
  }
  
  render() {
    var item = [];
    var i;
    var idchange = this.state.valindex;
    var newitems = [];
    var items = [];
    var links = ['/', 'sessone', '/sesstwo', '/sessthree', '/sessfour', '/sessfive'];
    var correctans = [];
    var linkbuttons=[];


    linkbuttons.push(
      <div key={idchange.toString()} >
      <Link id="sess" className = "navlist" type="submit" to={links[this.props.id-1]}><li>Previous</li></Link>  
      <a id="sess" onClick={this.checkSubmit} name={this.props.id-1} href='' type="submit">Submit</a>
      <Link id="sess" className = "navlist" type="submit" to='/gradebook'><li>See Gradebook</li></Link>
      </div>
    )

    this.state.questions.map(questions =>
      <div>
        {item.push(
          <div key={idchange.toString()} >
            <li className = "questioninput" name={questions.id} id={idchange++}>{questions.ques}</li>
            <input type="radio" name={idchange} id={questions.id} onChange={this.Change} value={questions.opt1}/>{questions.opt1}<br/>
            <input type="radio" name={idchange} id={questions.id} onChange={this.Change} value={questions.opt2}/>{questions.opt2}<br/>
            <input type="radio" name={idchange} id={questions.id} onChange={this.Change} value={questions.opt3}/>{questions.opt3}<br/><br/><br/> 
          </div>
        )}
      {newitems.push(questions.id)}
      {correctans.push(questions.correct)}
      
      </div>
    )
    
    idchange = -1;
    for(i = 0; i < newitems.length; i++){
      if(newitems[i]===this.props.id){
        
        items.push(item[i]);
        this.state.answers.push(correctans[i]);
      }
    }

    scoreexport = this.state.VAL;
    return (
      <div>
        <h2>Questions</h2>
        <ul>
          {items}
        </ul>
        {linkbuttons}
      </div>
    );
  }

}



export default Questions;
export {scoreexport};
