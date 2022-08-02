import './App.css';
import { Trainers, Navbar, TrainerInfo } from './components/Index.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Trainers />} />
        <Route path='/:name' element={<TrainerInfo />} />
      </Routes>
    </div>
  );
}

export default App;
