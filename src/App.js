import logo from './logo.svg';
import './App.css';
import Navbar from './Nav.js';
import Hero from './Hero';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
      </header>
    </div>
  );
}

export default App;
