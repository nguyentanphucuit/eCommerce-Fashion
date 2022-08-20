import React, { useMemo } from "react";
import CartTotal from "./CartTotal";
import ListProduct from "./ListProduct";
import "./styles.css";

function Cart() {
  const renderDirection = useMemo(() => {
    return <div className="direction">HOME / SHOPPING CART</div>;
  }, []);

  const renderCartTable = useMemo(() => {
    return <ListProduct />;
  }, []);

  const renderCartTotal = useMemo(() => {
    return <CartTotal />;
  }, []);

  return (
    <div className="cart">
      {renderDirection}
      {renderCartTable}
      {renderCartTotal}
    </div>
  );
}

export default React.memo(Cart);
