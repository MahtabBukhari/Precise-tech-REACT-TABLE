import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import ReactTable from './ReactTable';
import EditTableData from './components/EditTableData';

const App = () => {
  return (
    <div>

<Routes>
     <Route  exact  path='/' element={<ReactTable/>}/>
     <Route exact path='/edit/:id' element={<EditTableData/>}/>
     

   

    
       
  </Routes>
  
  
 
    
    </div>
  )
}

export default App
