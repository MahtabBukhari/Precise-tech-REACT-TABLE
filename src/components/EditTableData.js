import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const EditTableData = () => {
  const [productData, setProductData] = useState([]);

console.log(productData)

const {title,price,description}=productData;


console.log(title,price,description)


  const { id } = useParams();
    console.log(id)

  useEffect(() => {
    const getOneProductData = async (id) => {
      console.log(id);

      try {
        const response = await axios.get(
          `https://api.escuelajs.co/api/v1/products/${id}`
        ); //.then(response=> setData(response.data.products)).catch(e=>console.log(e))
        setProductData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOneProductData(id);
  }, [id]);
  console.log(productData);

  return (
    <Container>
      <Row className="editForm shadow">
        <Col className="col-lg-6 col-md-6 col-sm-12">
          <h1 className="mb-3">Edit Product Info:</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditTableData;
