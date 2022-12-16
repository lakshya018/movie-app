import './App.css';
import MovieState from './comp/context/MovieState';
import Home from './comp/Home/Home';
import Navbar from './comp/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <MovieState>
        <Navbar/>
        <Home />
      </MovieState>
     
    </div>
  );
}

export default App;
