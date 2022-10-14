import React, { useEffect, useRef, useState } from 'react'

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
    <input className='p-2 GlobalSearch' ref={ref} value={value || undefined} onChange={e=>{
       setValue(e.target.value)
       onChange(e.target.value)
    }
      
    } placeholder='Search....'/>
    
    </>

  )
}

export default GlobalFilter;