import './App.css';
import { useState } from 'react';
import Register from './Components/Register'
import GetRegister from './Components/GetRegister';

function App() {
  const[data,setdata]=useState([])
  const[fun,setfun]=useState(false)
  return (
    <div> 
        <Register data={data} setfun={setfun}/>
        <GetRegister setdata={setdata} fun={fun}/>  
         
         
    </div>
  );
}

export default App;