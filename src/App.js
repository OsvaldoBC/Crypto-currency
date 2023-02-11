import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Details from './components/Details';

const App = () => (
  <div>
    <header className="App-header">
      <Navbar />
      <div className="line" />
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Details />} />
    </Routes>
  </div>
);

export default App;
