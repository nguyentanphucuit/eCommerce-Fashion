import React, { useMemo } from "react";
import ProductItem from "./ProductItem";
import { listProduct } from "constants/data";
import "../styles.css";

function ListProduct() {
  const renderItem = (item) => {
    const total = item.price * item.quantity;
    return (
      <ProductItem
        key={item.id}
        name={item.nameProduct}
        price={item.price.toFixed(2)}
        quantity={item.quantity}
        total={total.toFixed(2)}
      />
    );
  };

  const renderHeader = useMemo(() => {
    return (
      <ProductItem
        isHeader={true}
        name="Product"
        price="Price"
        quantity="Quantity"
        total="Total"
      />
    );
  }, []);

  const renderListProduct = useMemo(() => {
    return listProduct.map(renderItem);
  }, []);

  return (
    <div className="listProduct">
      {renderHeader}
      {renderListProduct}
    </div>
  );
}

export default React.memo(ListProduct);
