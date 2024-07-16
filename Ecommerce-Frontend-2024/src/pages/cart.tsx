import { VscError } from "react-icons/vsc";
import CartItemCard from "../components/cart-item";
import { CartItem } from "../types/types";
import {  useState } from "react";

const Cart = () => {
  
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  const incrementHandler = (cartItem: CartItem) => {
    if (cartItem.quantity >= cartItem.stock) return;
  };
  const decrementHandler = (cartItem: CartItem) => {
    if (cartItem.quantity <= 1) return;
  };
  const removeHandler = (productId: string) => {
  };
  

  return (
    <div className="cart">
      <main>
        
            (<CartItemCard
              incrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
              removeHandler={removeHandler}
              key={'idx'}
              cartItem={'i'}
            />
         ): (
          <h1>No Items Added</h1>
        )
      </main>
      <aside>
        <p>Subtotal: ₹{9000}</p>
        <p>Shipping Charges: ₹{150}</p>
        <p>Tax: ₹{60}</p>
        <p>
          Discount: <em className="red"> - ₹{50}</em>
        </p>
        <p>
          <b>Total: ₹{10000}</b>
        </p>

        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />

        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{50} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}
      </aside>
    </div>
  );
};

export default Cart;
