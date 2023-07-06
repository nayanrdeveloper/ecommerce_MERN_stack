import { Col, Row } from "react-bootstrap";
import products from "../products";
import ProductScreen from "./ProductScreen";

const HomeScreen = () => {
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
