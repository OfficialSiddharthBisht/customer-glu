import React from 'react';
import Bottomsheet from './components/Bottomsheet';
// import './App.css';

const showBottomSheet = () =>{
  // let container = 
}

function App() {
  return (
    <div className="App">
      <button onClick={()=>showBottomSheet()}>Show Bottom Sheet</button>
      <Bottomsheet />
    </div>
  );
}

export default App;
