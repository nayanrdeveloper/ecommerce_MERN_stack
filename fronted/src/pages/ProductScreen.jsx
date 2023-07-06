import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";

function ProductScreen({ product }) {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">{product.name}</Card.Title>
          </Link>
        </Card.Body>
        <Card.Text as="div">
          <Rating value={product.rating} reviews={product.numReviews} />
        </Card.Text>
        <Card.Text as="div">$ {product.price}</Card.Text>
      </Card>
    </>
  );
}

ProductScreen.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductScreen;
