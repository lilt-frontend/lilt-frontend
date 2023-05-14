import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Main from './main';

function App() {
  return (
    <>
				{/* <Router> */}
          <Routes>
  					<Route path="/" element={<Main/>}></Route>
  				</Routes>    
        {/* </Router> */}
      </>
  );
}

export default App
