import withPrice from '../withPrice';

const Views = ({ price }) => {
  return <>{price}</>;
};

const ProductViewsWithPrice = withPrice(Views);
export default ProductViewsWithPrice;
