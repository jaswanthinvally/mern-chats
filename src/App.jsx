import './App.css'
import Navbar from './assets/Navbar/Navbar'
import Charts from './assets/Charts';

function App() {

  return (
    <div>
      <Navbar/>
      <div className='w-2/3'>
      <Charts/> 
      </div>

    </div>
  );
}

export default App
