import React from 'react';
import './App.css';
import './index.css'; // for background animations
import ai from './assets/ai.png';
import { RiMic2AiLine } from "react-icons/ri";
import { useContext } from 'react';
import { datacontext } from './context/UserContext';
import speak from './assets/speak.gif'
import aiVoice from './assets/aiVoice.gif'

const App = () => {
  // let {speak}= useContext(datacontext)
  let {recognition,speaking,setSpeaking,recogText,resPrompt,setRecogText,setResPrompt}= useContext(datacontext)
  // // console.log(a)
  // speak("hello")

  
  return (
    <div className="background-container">

      <div className="lines">
        {Array.from({ length: 10 }).map((_, index) => (
          <div className="line" key={index}></div>
        ))}
      </div>

   
      <div className="main">
        <img src={ai} alt="ira" id="ira" />
        <span>
          Hey,I'm <strong>IRA</strong>, Your Virtual Voice Assistant
        </span>
        {!speaking? <button onClick={()=>{
          setRecogText("listening...")
          setSpeaking(true)
          setResPrompt(false)
          recognition.start()
        }}>
          Summon&nbsp;<strong>IRA</strong>&nbsp;
          <RiMic2AiLine style={{ verticalAlign: 'middle', fontSize: '1.9rem' }} />
        </button>:
        <div className='responseDiv'>
          {!resPrompt?  <img src={speak} alt="" className='speakImg'/>:<img src={aiVoice} alt="" className='aivoice'/> }
        
          <p>{recogText}</p>
          </div>}
       
      </div>
    </div>
  );
};

export default App;
