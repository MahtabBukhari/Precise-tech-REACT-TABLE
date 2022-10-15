import axios from "axios"
import { Button, Col, Container, Row } from "react-bootstrap"
import {TfiPencil,TfiTrash} from 'react-icons/tfi'

const onEdite=()=>{
    alert('edit')
}

const onDelete=async({id})=>{

 try {
     
     const respone = await axios.delete(`https://dummyjson.com/products/${id}`)
     console.log(respone)
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
          accessor:"title"
      },
      {
          Header:"Description",
          accessor:"description"
      },
      {
          Header:"Price",
          accessor:"price"
      },
      {
          Header:"Discount",
          accessor:"discountPercentage"
      },
      {
          Header:"Rating",
          accessor:"rating"
      },
      {
          Header:"Stock",
          accessor: "stock"
      },
      {
          Header:"Brand",
          accessor:"brand"
      },
      {
          Header:"Category",
          accessor: "category"
      },
      {
          Header:"Image",
          accessor: "thumbnail",
        Cell:({row})=> <img src={row.values.thumbnail} alt="imageProduct" height={100} width={100}/>    
         
      },
      {
        Header:"Actions",
        accessor:"actions",
        Cell:({row})=>{
          return ( <Container style={{margin:"2vmax 3vmax 0 0"}}>
          <Row className="ActionCol">
            <Col className="col-lg-5 col-md-5 col-sm-5">
            <Button onClick={()=>onEdite(row.values)} ><TfiPencil/></Button>
            

            </Col >
            <Col className="col-lg-5 col-md-5 col-sm-5"><Button variant="danger" onClick={()=>onDelete(row.values)}><TfiTrash/></Button></Col>
            
          </Row>
            
            </Container>)
        }
      }
    
    ]