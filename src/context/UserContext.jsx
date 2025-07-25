import React, { createContext, useState } from 'react'
import main from '../Gemini';
export const datacontext = createContext()
const UserContext = ({ children }) => {

  const [speaking, setSpeaking] = useState(false)
  const [recogText, setRecogText] = useState("listening...")
  const [resPrompt, setResPrompt] = useState(false)




  // let value = "diksha"
  function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.volume = 1;
    text_speak.rate = 1;
    text_speak.pitch = 1
    text_speak.lang = "hi-GB"
    window.speechSynthesis.speak(text_speak)
  }

  async function aiResponse(prompt) {
    let text = await main(prompt)
    let newText = text.replace(/\*\*/g, '')
                 .replace(/\*/g, '')
                 .replace(/Google/gi, 'Diksha Raj')
                 .replace(/google/gi,'Diksha Raj');
    console.log(newText);

    setRecogText(newText)

    speak(newText)
    setResPrompt(true)
    setTimeout(() => {
      setSpeaking(false)
    }, 5000);
    
  }

  let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  let recognition = new speechRecognition()
  recognition.onresult = (e) => {
    //    console.log(e)
    let currentIndex = e.resultIndex;
    let transcript = e.results[currentIndex][0].transcript; // Corrected access to transcript
    console.log(transcript);
    setRecogText(transcript)
  Commandtaking(transcript.toLowerCase())

  }

  function Commandtaking(command){
   if(command.includes("open")&&command.includes("youtube")){
    window.open("https://www.youtube.com/","_blank")
    speak("opening Youtube")
    setResPrompt(true)
    setRecogText("opening Youtube...")
     setTimeout(() => {
      setSpeaking(false)
    }, 5000);

   }
   else if(command.includes("open")&&command.includes("google")){
    window.open("https://www.google.com/","_blank")
    speak("opening Google")
    setResPrompt(true)
    setRecogText("opening Google...")
     setTimeout(() => {
      setSpeaking(false)
    }, 5000);

   }
   else if(command.includes("open")&&command.includes("instagram")){
    window.open("https://www.instagram.com/","_blank")
    speak("opening Instagram")
    setResPrompt(true)
    setRecogText("opening Instagram...")
     setTimeout(() => {
      setSpeaking(false)
    }, 5000);

   }
   else if(command.includes("open")&&command.includes("facebook")){
    window.open("https://www.facebook.com/","_blank")
    speak("opening Facebook")
    setResPrompt(true)
    setRecogText("opening Facebook...")
     setTimeout(() => {
      setSpeaking(false)
    }, 5000);

   }
   else if(command.includes("time")){
    let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
    speak(time);
    setResPrompt(true)
    setRecogText(time)
     setTimeout(() => {
      setSpeaking(false)
    }, 5000);

   }
   else if(command.includes("date")){
    let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
    speak(date);
    setResPrompt(true)
    setRecogText(date)
     setTimeout(() => {
      setSpeaking(false)
    }, 5000);

   }
   else{
    aiResponse(command)
   }
  }
  let value = {
    // speak
    recognition,
    speaking,
    setSpeaking,
    recogText,
    setRecogText,
    resPrompt,setResPrompt
  }
  return (

    <div>
      <datacontext.Provider value={value}>
        {children}
      </datacontext.Provider>
    </div>
  )
}

export default UserContext