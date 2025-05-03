import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import React,{useState} from 'react';
import Alert from './Alert';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './About';



function App() {
  const [mode,setMode] = useState('light');
  const [alert,setalert] = useState(null);
  const toggleMode =()=>{
    if(mode === 'light'){
       setMode('dark');
       document.body.style.backgroundColor = "#0d0833";
       showAlert("Dark Mode Turned On","success")
      //  document.title='Dark Mode';
      }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode Turned Off","success")
    }
  };

  const showAlert =(message,type)=>{
    setalert({
      msg:message,
      type:type,
    })
 
    setTimeout(()=>{
         setalert(null);
    },2000)
    }

  return (
  
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path ='/' element={
        <>
        <Navbar title="DesiQna" link="About Us" mode={mode} toggleMode1={toggleMode}/>
        <Alert alert={alert}/>
        <TextForm mode={mode} heading = "Desi-Qna" showAlert={showAlert}/>
        
       </>
    
    
    }/>

    <Route exact path='/About' element={
      <>
       <Navbar title="DesiQna" link="About Us" mode={mode} toggleMode1={toggleMode}/>
      <About mode={mode}/>
      </>
      }/>
     

    </Routes>
    </BrowserRouter>
 
   {/* <Alert alert={alert}/>
   <TextForm mode={mode} showAlert={showAlert}/> */}
   </>


    
  );
}

export default App;
