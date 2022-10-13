import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import ReactTable from './ReactTable';

const App = () => {
  return (
    <div>

<Routes>
     <Route  exact  path='/' element={<ReactTable/>}/>
     

   

    
       
  </Routes>
  
  
 
    
    </div>
  )
}

export default App
