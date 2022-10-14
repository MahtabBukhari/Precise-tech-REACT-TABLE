import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import RTable from './Table'
import {COLUMNS }from './columns'




const dummyData =[
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
      "images": [
        "https://dummyjson.com/image/i/products/1/1.jpg",
        "https://dummyjson.com/image/i/products/1/2.jpg",
        "https://dummyjson.com/image/i/products/1/3.jpg",
        "https://dummyjson.com/image/i/products/1/4.jpg",
        "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
      ]
    }]

   

const ReactTable = () => {
    const [Data,setData]=useState(dummyData)
    const columns = useMemo(()=> COLUMNS,[])
    const data = useMemo(()=> Data,[Data])
    // console.log(data)


    const getData=async()=>{

        try {
           const response = await axios.get('https://dummyjson.com/products')//.then(response=> setData(response.data.products)).catch(e=>console.log(e))
            setData(response.data.products)
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