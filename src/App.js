import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <div>
          <h1>apsdudhlishimla@gmail.com</h1>
          <h1>+91 98166 30489</h1>
        </div>
        <Router>
          <Navbar/>
            <Routes>
               <Route path="/" element={<Home/>}/>
             </Routes>
        </Router>
  
    </div>
  );
}

export default App;
