import './App.css';
import AddList from './components/AddList';
import Task from './components/Task';
import AllTask from './components/AllTask';

function App() {
  return (
  <div className='App'>
    <h1>TO DO LIST</h1>
    <AddList />
    <div className='WrapperTask'>
    <Task />
    <Task />
    <Task />
    </div>
    
    <AllTask />
   
   
    
  </div>
  )
}

export default App;
