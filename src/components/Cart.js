import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../features/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul className="list-group mb-3">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between">
                <div>
                  <h6>{item.title}</h6>
                  <p>${item.price}</p>
                </div>
                <div>
                  <button
                    className="btn btn-sm btn-danger me-2"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    className="btn btn-sm btn-primary ms-2"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
