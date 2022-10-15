import React, { useEffect, useRef, useState } from 'react'
import { Button, Navbar } from 'react-bootstrap'

import {useAsyncDebounce} from 'react-table'

const GlobalFilter = ({gFilter, setGfilter,refresh}) => {

const ref = useRef()
useEffect(()=>{
  ref.current.focus()

 

},[])

    const [value,setValue]=useState(gFilter);

    const onChange=useAsyncDebounce((value)=>{

        setGfilter(value)


    },1000)


  return (
    <>

    <Navbar bg='dark' variant='dark'>

     
    
      

      <Navbar.Brand><h3>Product List</h3></Navbar.Brand>

     

      <Button className='mr-2 refreshButton' onClick={refresh} variant="dark" ><img src='http://dev.eutsol.ca:2021/eut/static/media/refresh-arrow.05739bdd.png' alt='spinner' width={40} height={40}/></Button>

     

    

    <input className='p-2 mr-3 GlobalSearch' ref={ref} value={value || undefined} onChange={e=>{
       setValue(e.target.value)
       onChange(e.target.value)
    }
      
    } placeholder='Search....'/>
       
 

    </Navbar>
  
    
    </>

  )
}

export default GlobalFilter;