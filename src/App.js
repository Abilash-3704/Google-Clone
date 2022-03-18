// import logo from './logo.svg';
import './App.css';
import React,{useState}from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import ReDirect from './components/ReDirect';
import Footer from './components/Footer';
import Results from './components/Results';
import { ResultContextProvider } from './context/ResultContextProvider';

function App() {
  const [darktheme,setDarktheme]=useState(false);
  return (
    <>
    <ResultContextProvider>
    <Router>
    <div className={darktheme?'dark':''}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar darktheme={darktheme} setDarktheme={setDarktheme}/>
        {/* <ReDirect/> */}
        <Results/>
        <Footer/>
      </div>
      
    </div>
    </Router>
    </ResultContextProvider>
    </>
    
  );
}

export default App;
