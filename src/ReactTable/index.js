import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import RTable from './Table'
import {COLUMNS }from './columns'


const ReactTable = () => {





    const [Data,setData]=useState([])
    const columns = useMemo(()=> COLUMNS,[])
    const data = useMemo(()=> Data,[Data])
    // console.log(data)


    const getData=async()=>{

        try {
           const response = await axios.get('https://api.escuelajs.co/api/v1/products')//.then(response=> setData(response.data.products)).catch(e=>console.log(e))
            setData(response.data)
        } catch (error) {

            console.log(error)
            
        }

            
             
          }


    useEffect(()=>{
          
       getData()

    },[])

  return (
    <>
    <RTable columns={columns} data={data}/>
    </>
  )
}

export default ReactTable