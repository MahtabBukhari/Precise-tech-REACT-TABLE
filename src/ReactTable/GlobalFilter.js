import React, { useEffect, useRef, useState } from 'react'
import {Navbar } from 'react-bootstrap'
import refreshImage from '../asset/images/refresh.png'
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

    const OnRefresh=()=>{
      refresh()
    setValue(' ')

    }

  return (
    <>

    <Navbar  bg='dark' variant='dark'>

     
    
      

      <Navbar.Brand><h3>Product List</h3></Navbar.Brand>

     

      <div className='mr-2 refreshButton' onClick={OnRefresh} variant="dark" ><img src={refreshImage} alt='spinner' width={40} height={40}/></div>

     

    

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