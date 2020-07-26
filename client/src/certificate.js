import React from 'react';
import './App.css';


class certificate extends React.Component{
  
  render(){
      
    return(
        <div id="cert"><div id="certs">
                <span style={{fontSize:35, fontWeight: 'bold', color: 'black'}}>Certificate of Completion</span>
                <br/><br/><img width="300" src="//static1.squarespace.com/static/5e78ee7048e8012438adabc0/t/5e833304e78b6956d2d8d629/1586360599524/?format=1500w" alt="Smart STAR"></img><br/><br/><br/>
                <span style={{fontSize:25, color: 'black'}}><i>This is to certify that</i></span>
                <br/><br/>
                <span style={{fontSize:40, color: 'black'}}><b>Chijioke Ezeani</b></span><br/><br/>
                <span style={{fontSize:25, color: 'black'}}><i>has completed the course</i></span> <br/><br/>
                <span style={{fontSize:30, color: 'black'}}>SMART STAR</span> <br/><br/>
          </div>
        </div>
    );
  }
}

export default certificate;
