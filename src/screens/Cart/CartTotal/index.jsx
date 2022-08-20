import React from "react";
import { listProduct } from "constants/data";
import "../styles.css";
const ship = 10;

function HorizontalItem({ title, content, isBorder = true, isBold = false }) {
  const classHorizontalItem = !isBorder
    ? "unBorderHorizontalItem"
    : "horizontalItem";

  const classTitle = isBold ? "isBoldTitle" : "title";

  return (
    <div className={classHorizontalItem}>
      <p className={classTitle}>{title || ""}</p>
      <p className="content">{content || ""}</p>
    </div>
  );
}

function CartTotal() {
  const getSubtotal = () => {
    let subtotal = 0;
    listProduct.forEach((product) => {
      subtotal += product.price * product.quantity;
    });
    return subtotal;
  };
  const subtotal = `$${parseInt(getSubtotal()).toFixed(2)}`;
  const shippingFee = ship === 0 ? "FREE!!!" : `$${ship.toFixed(2)}`;
  const total = `$${parseInt(getSubtotal() + ship).toFixed(2)}`;

  return (
    <div className="cartTotal">
      <div className="title">Cart Totals</div>
      <HorizontalItem title={"Subtotal"} content={subtotal} />
      <HorizontalItem title={"Shipping Fee"} content={shippingFee} />
      <HorizontalItem
        title={"Total"}
        content={total}
        isBorder={false}
        isBold={true}
      />
      <button className="btnCheckout">PROCEED TO CHECKOUT</button>
    </div>
  );
}

export default React.memo(CartTotal);
