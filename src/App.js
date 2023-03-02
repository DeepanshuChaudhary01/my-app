import './App.css';
import TextForm from './Components/TextForm.js';
import Navbar from './Components/Navbar.js';
import About from './Components/About.js';
import { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,//switch
  Route,
  Link
} from "react-router-dom";


function App() {
  const [theme,setState] = useState('light');
  const [alert,setAlert] = useState('null');
  const showAlert=(message,type)=>{
    setAlert({msg: message,type: type})
    setTimeout(() => {
      setAlert('null');
    }, 3000);
  }
  const toggleMode=()=>{
    if(theme==='dark')
    {
      setState('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled.","success")
    }
    else {setState('dark');document.body.style.backgroundColor="black";
    showAlert("Dark mode has been enabled.","success" )
  }
  }
  return (
    <>
    <Router>
    {/* here we are creating an app on text conversions */}
  <Navbar title="Text App" abttxt="AboutTxt" theme={theme} toggleMode={toggleMode} />
  <Alert alert={alert}/>
  <div className="container my-3">
  <Routes>
  <Route path="/about" element={<About />} />
  <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyse:" theme={theme} />}/>
      
  </Routes>
  {/* <TextForm showAlert={showAlert} heading="Enter text to analyse:" theme={theme} /> */}
  </div>
  </Router>
    </>
  );
}

export default App;
