
import './App.css';


import SeatBooking from './Componets/SeatBooking';
import Homepage from './Componets/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieList from './Componets/MovieList';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/movie-list' element={<MovieList/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
