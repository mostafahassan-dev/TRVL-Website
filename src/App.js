import { Footer, Navbar}from './components/'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { About, Home, Services, SignUp } from './components/pages';


function App() {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/about' element= {<About/>} />
        <Route path='/services' element= {<Services/>} />
        <Route path='/signup' element= {<SignUp/>} />
      </Routes>

      <Footer/>
    </>
      
    
  );
}

export default App;
