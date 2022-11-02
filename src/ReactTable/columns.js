import axios from "axios"
import { Button, Col, Container, Row } from "react-bootstrap"
import {TfiPencil,TfiTrash} from 'react-icons/tfi'
import { Link } from "react-router-dom"



const onDelete=async(id)=>{
    console.log(id)
    

 try {
     
      await axios.delete(`https://api.escuelajs.co/api/v1/products/${id}`)
    //  console.log(respone)
 } catch (error) {
    console.log(error)
    
 }


    


}

 export const COLUMNS = [
      {
          Header:"Id",
          accessor:"id"
      },
      {
          Header:"Title",
          accessor:"title",
          Cell: (row) => {
            /* Add data-tip */
            console.log(row.value)
            return <span data-toggle="tooltip" data-placement="left" title={(row.value)}>{row.value}</span> ;
            
          }
      },
      {
        Header:"Price",
        accessor:"price"
    },
      {
          Header:"Description",
          accessor:"description", 

          // show tool tip in for specific column
          Cell: (row) => {
            /* Add data-tip */
            console.log(row.value)
            return <span data-toggle="tooltip" data-placement="left" title={(row.value)}>{row.value}</span> ;
            
          }
      },
    
      {
          Header:"Category",
          accessor: "category",
          columns:[
            {
                Header:"CategoryID",
                accessor:"category.id"
            },
            {
                Header:"Name",
                accessor:"category.name"
            },
            {
                Header:"Image",
                accessor: "category.image",
                 Cell:({cell:{value}})=><div> 
                
                     <img src={value} alt="imageProduct" height={100} width={100}/>    
                   
                 </div> 
                    
               
            }
          ]
      },
      {
        Header:"Actions",
        accessor:"actions",
        Cell:({row})=>{
          return ( <Container style={{margin:"2vmax 3vmax 0 0"}}>
          <Row className="ActionCol">
            <Col className="col-lg-5 col-md-5 col-sm-5">
          <Link to={`/edit/${row.values.id}`}>  <Button><TfiPencil/></Button></Link>
            

            </Col >
            <Col className="col-lg-5 col-md-5 col-sm-5">
          <Button variant="danger" onClick={()=>onDelete(row.values.id)}><TfiTrash/></Button></Col>
            
          </Row>
            
            </Container>)
        }
      }
    
    ]