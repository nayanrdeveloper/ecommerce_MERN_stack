import { Col, Row } from "react-bootstrap";
import { useGetProductsQuery } from "../features/api/productApiSlice";
import ProductScreen from "./ProductScreen";

const HomeScreen = () => {
  const { data, isLoading, isError, error } = useGetProductsQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Row>
      {data && data.map((product) => (
        <Col key={product._id} md={4}>
          <ProductScreen product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default HomeScreen;