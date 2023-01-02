import { Route, Routes } from 'react-router-dom';
import './App.css';
import MovieState from './comp/context/MovieState';
import Home from './comp/Home/Home';
import Navbar from './comp/Navbar/Navbar';
import MoviePlayer from './comp/MoviePlayer/MoviePlayer';

function App() {
  return (
    <div className="App">
       <MovieState>
      
       
          <Routes>

            <Route path="/" element={<Navbar/>}>
                <Route index element={<Home/>}/>
            </Route>
            <Route path="/moviePlayer" element={<MoviePlayer/>}/>
          </Routes>
          
      </MovieState>
     
    </div>
  );
}

export default App;
