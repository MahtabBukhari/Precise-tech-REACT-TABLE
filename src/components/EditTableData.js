import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const EditTableData = () => {
  const navigate = useNavigate();


  // is used to store data from get api request
  const [productData, setProductData] = useState([]);


  // destructuring the coming data
  const { title, price, description } = productData;


  // for input fields
  const [upTitle, setUpTitle] = useState(title);
  const [upPrice, setUpPrice] = useState(title);
  const [upDescription, setUpDescription] = useState(description);


  // is used to fetch id from url
  const { id } = useParams();

  useEffect(() => {
    const getOneProductData = async (id) => {
      try {
        const response = await axios.get(
          `https://api.escuelajs.co/api/v1/products/${id}`
        );
        setProductData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOneProductData(id);
  }, [id]);
  console.log(productData);



  const updateData = async () => {
    try {

      // update the data with put request
      const res = await axios.put(
        `https://api.escuelajs.co/api/v1/products/${id}`,
        {
          title: upTitle,
          price: upPrice,
          description: upDescription,
        }
      );
      console.log(res);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    updateData();
  };

  return (
    <Container>
      <Row className="editForm shadow">
        <Col className="col-lg-6 col-md-6 col-sm-12">
          <h1 className="mb-3">Edit Product Info:</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>title </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                onChange={(e) => setUpTitle(e.target.value)}
                defaultValue={title}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
              <Form.Label>price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                onChange={(e) => setUpPrice(e.target.value)}
                defaultValue={price}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                onChange={(e) => setUpDescription(e.target.value)}
                defaultValue={description}
              />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="name">
              <Form.Label>name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" onChange={e=>setUpName(e.target.value)}  value={PName} />
            </Form.Group> */}
            {/* 
      
            <Form.Group className="mb-3" controlId="image">
              <Form.Label>image</Form.Label>
              <Form.Control type="file" placeholder="upload image" onChange={e=>setUpImage(e.target.value)}  value={image} />
            </Form.Group> */}

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
