import './App.css';
import Navbar from './components/Navbar';
import Url from './components/Url';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Navbar />
      </div>
      <Url />
    </div>
  );
}

export default App;
