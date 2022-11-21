import './App.css';
import Navbar from './components/Navbar';
import Upload from './components/Upload';
import Graph from './components/Graph';
import FileDetails from './components/FileDetails';
import DataDetails from './components/DataDetails';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Navbar />
        <div className='row uploadAndGraph'>
          <Upload />
          <Graph />
        </div>
        <div className='row fileAndData'>
          <FileDetails />
          <DataDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
