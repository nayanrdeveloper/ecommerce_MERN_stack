import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import ProductScreen from "./ProductScreen";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const fetProduct = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/products");
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetProduct();
  }, []);
  return (
    <>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product._id} md={4}>
              <ProductScreen key={product._id} product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeScreen;
