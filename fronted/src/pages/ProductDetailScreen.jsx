import { useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import Rating from "../components/Rating";
import { useGetProductByIdQuery } from "../features/api/productApiSlice";

const ProductDetailScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetProductByIdQuery(id);
  const [qty, setQty] = useState(0);

  const gotoCartNavigate = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return null;
  }

  return (
    <div>
      <Link to="/" className="btn btn-light">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={data.image} alt={data.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
              <h3>{data.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={data.rating} reviews={data.numReviews} />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${data.price}</ListGroup.Item>
            <ListGroup.Item>{data.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>{data.countInStock > 0 ? "In Stock" : "Out of Stock"}</Col>
              </Row>
            </ListGroup.Item>
            {data.countInStock > 0 && (
              <ListGroup.Item>
                <Row>
                  <Col>Qty</Col>
                  <Form.Control
                    as="select"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                  >
                    {[...Array(data.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </Form.Control>
                </Row>
              </ListGroup.Item>
            )}
            <ListGroup.Item>
              <Button
                className="btn-block"
                type="button"
                onClick={gotoCartNavigate}
                disabled={data.countInStock <= 0}
              >
                Add to Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetailScreen;
