import React, { Component } from 'react';
import emblem from './RKmark2.png';
import Work from './Work';
// import emblem2 from './RKmark4.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <img className='emblem' src={emblem}></img>
          <div> <a href='#work' className='navText'> Work</a>
            <a href='#contact' className='navText'> Contact</a></div>
        </nav>
        <div className='text'>
          {/* <img className='emblem2' src={emblem2}></img> */}
          <br></br>
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
        <hr width="80%"></hr>
        <div id="work"><Work></Work></div>
        <hr width="80%"></hr>
        <div id="contact">
          <h1> Contact</h1><br></br>
          0001rkm@gmail.com</div>

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
