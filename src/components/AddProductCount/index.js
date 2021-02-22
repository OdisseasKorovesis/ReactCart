import { useState, useEffect } from 'react';
import ProductViewsWithPrice from '../ProductViews';

const initialDiscounts = [
  { count: 4, discount: 10 },
  { count: 5, discount: 20 },
];

function AddProductCount(props) {
  let price = props.price;
  const [productCount, setProductCount] = useState(1);
  const [productPrice, setProductPrice] = useState(price);

  useEffect(() => {
    console.log('%c[Update] useEffect 🔁', 'color: aqua');

    const discounts = initialDiscounts;
    let calculatedPrice = price;
    if (discounts) {
      discounts.forEach((discount) => {
        if (productCount >= discount.count) {
          calculatedPrice = price - price * (discount.discount / 100);
        }
      });
    }
    setProductPrice(() => productCount * calculatedPrice);
    props.changeProductQuantity(props.id, productCount);

    return () => console.log('%c[Cleanup] the useEffect', 'color: tomato');
  }, [productCount]);

  const increaseProductQuantity = () => {
    setProductCount((count) => count + 1);
    
  }

  const reduceProductQuantity = () => {
    setProductCount((count) => count - 1);
  }

  return (
    <div className="row justify-content-center">
      <button
        className="btn btn-danger col-1 text-center"
        onClick={reduceProductQuantity}
        disabled={!(productCount - 1)}
      >
        -
      </button>
      <input className="col-5 input-group-text bg-white" value={productCount} readOnly />
      <button
        className="btn btn-primary col-1"
        onClick={increaseProductQuantity}
        disabled={productCount >= 5 ? true : false}
      >
        +
      </button>
      <div className="mt-2 mb-2">
        Total Price: <ProductViewsWithPrice price={productPrice} />
      </div>
      {productCount > 4 ? <div>You cannot order more than 5 items</div> : null}
      {initialDiscounts &&
        initialDiscounts.map((discount) => (
          <div>
            <em>
              {discount.count} and up: you have {discount.discount}% off
            </em>
          </div>
        ))}
    </div>
  );
};

export default AddProductCount;
