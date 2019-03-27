import React, { Component } from 'react';
import emblem from './RKmark2.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <img className='emblem' src={emblem}></img>
          <div className='work'>Work</div>
        </nav>
        <div className='text'>
          <strong>Hi, I'm Ravi</strong><br></br>
          a multidisciplinary designer and developer<br></br>
          with a focus on UX/UI design.<br></br>
          Currently I'm looking for challenging opportunities<br></br>
          to sharp my skills by solving real world problems.        </div>
        <hr width="80%"></hr>
        <div className='skills'>
          <Button1>UX Design</Button1>
          <Button1>Adobe Illustrator</Button1>
          <Button1>Figma</Button1>
          <Button1>Design Thinking</Button1>
          <Button1>Front-end development</Button1>
          <Button1>HTML</Button1>
          <Button1>CSS</Button1>
          <Button1>Javascript</Button1>
          <Button1>ReactJS</Button1>
          <Button1>Bootstrap</Button1>
          <Button1>Back-end development</Button1>
          <Button1>Node.js</Button1>
          <Button1>Data Visualisation</Button1>
        </div>
      </div>
    );
  }
}

const Button1 = (props) => {
  return (
    <div className='button1'>{props.children}</div>
  );
}
export default App;
