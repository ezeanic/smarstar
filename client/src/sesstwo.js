import React from 'react';
import Vid from "./videosummary.mp4"
import Questions from "./components/questions"

class Answer extends React.Component{
  render() {
    return (
        <video width="800" controls>
          <source src={Vid} type="video/mp4"/>
        </video>
    );
  }
}

class sesstwo extends React.Component{
  render() {
    return (
      <div id="firstpagetext">
      <div id="pagetext">
          <h1>Understanding The Population With Special Needs</h1>
          <p>Before you can learn how to better engage and provide a great environment for the population with special needs, 
            you must first understand what the term special needs means and who is included when this term is used. 
            During the “Understanding” lesson, you will learn just how large the population with special needs is, 
            as well as the different types of diagnosis that are included in the term special needs.</p>
          <Answer/>
          <Questions id={2}/>
        </div>
    </div>
    );
  }
}

export default sesstwo;
