import React, { useEffect, useRef, useState } from 'react'
import { Navbar } from 'react-bootstrap'

import {useAsyncDebounce} from 'react-table'

const GlobalFilter = ({gFilter, setGfilter}) => {

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
    <input className='p-2 GlobalSearch' ref={ref} value={value || undefined} onChange={e=>{
       setValue(e.target.value)
       onChange(e.target.value)
    }
      
    } placeholder='Search....'/>

    </Navbar>
  
    
    </>

  )
}

export default GlobalFilter;