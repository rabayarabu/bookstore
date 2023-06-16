import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bookstore from './components/Bookstore';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Bookstore />}>Home</Route>
          <Route path="/category" element={<Bookstore />}>Home</Route>
        </Routes>

      </Router>

    </div>
  );
}

export default App;
