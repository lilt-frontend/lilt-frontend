import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Main from './main';
import "./Fonts/Font.css";

function App() {
  return (
    <>
          <Routes>
  					<Route path="/" element={<Main/>}></Route>
  				</Routes>    
      </>
  );
}

export default App
