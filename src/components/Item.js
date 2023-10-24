import React, { useState } from "react";

function Item({ name, category }) {
  const [item, setItem] = useState(false)

  function inCart() {
    setItem(!item)
  }
  const itemClass = item ? 'in-cart' : ''
  const itemInCart = item ? 'Remove from cart' : 'Add to Cart'

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={inCart} className={"add"}>{itemInCart}</button>
    </li>
  );
}

export default Item;
