import React, { useState } from 'react'

import {useAsyncDebounce} from 'react-table'

const GlobalFilter = ({gFilter, setGfilter}) => {
    const [value,setValue]=useState(gFilter);

    const onChange=useAsyncDebounce((value)=>{

        setGfilter(value)


    },1000)


  return (
    <>
    <input className='p-2 GlobalSearch' value={value || undefined} onChange={e=>{
       setValue(e.target.value)
       onChange(e.target.value)
    }
      
    } placeholder='Search....'/>
    
    </>

  )
}

export default GlobalFilter;