import {
  Button,
  Card,
  Col,
  Form,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "../features/api/cartSlice";

// import { calculateTotals } from "../features/api/cartSummerySlice";

function CartScreen() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  console.log(cartItems);

  return (
    <>
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {cartItems.items.length === 0 ? (
            <p>
              Your Cart is Empty !<Link to="/">Go Back</Link>
            </p>
          ) : (
            <ListGroup variant="flush">
              {cartItems.items.map((item) => (
                <ListGroupItem key={item.product._id}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.product.image} alt={item.product.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product._id}`}>{item.product.name}</Link>
                    </Col>
                    <Col md={2}>${item.product.price}</Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addItemToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeItemFromCart(item.product._id)}
                      >
                        <i
                          className="fa fa-trash text-danger"
                          aria-hidden="true"
                        ></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h2>Subtotal : {cartItems.totalQuantity}</h2>$
                {cartItems.totalPrice}
              </ListGroupItem>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                // onClick={checkout}
              >
                Proceed to checkOut
              </Button>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default CartScreen;
