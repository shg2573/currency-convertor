import logo from './logo.svg';
import './App.css';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <div className='text-red-600 bg-gradient-to-tr from-black  via-slate-900  to-black  h-screen w-screen'>
        <div className='h-24 w-40'><Input {..."From"}/></div>
      </div>
    </div>
  );
}

export default App;
