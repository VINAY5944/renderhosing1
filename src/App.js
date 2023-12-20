import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import data from './Data';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Table from './Table';
import View from './View';
import Edit from './Edit';


const NewContext=createContext()
function App() {
  const [data1,setData1]=useState(data)

  return (
    <NewContext.Provider value={[data1,setData1]}> 
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Table/>}/>
        <Route path='/View/:u' element={<View/>}/> 
        <Route path='/Edit/:u' element={<Edit/>}/> 
        <Route/>
      </Routes>
      
      
      
      </BrowserRouter>
    
    </NewContext.Provider>
  );
}


export default App;
export {NewContext};
