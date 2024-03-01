
import './App.css';
import Input from './components/Input';

function App() {
  const dataSet=[{labels:"From"},{labels:"To"}]
  return (
    <div className="App ">
      <div className='text-red-600 flex-col  bg-gradient-to-tr from-black  via-slate-900  to-black  h-screen w-screen flex justify-center items-center'>
        <div className=' h-fit w-80 '><Input {...dataSet[0]}/></div>
        <button /*onClick={}*/ className='px-2 py-1 bg-blue-500 border-2 border-transparent hover:border-white text-white rounded-xl'>Swap</button>
        <div className=' h-fit w-80 '><Input {...dataSet[1]}/></div>
      </div>
    </div>
  );
}

export default App;
