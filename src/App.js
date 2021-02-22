import LikeBox from './components/LikeBox';
import AddProductCount from './components/AddProductCount';
import ProductViewsWithPrice from './components/ProductViews';
import logo from './logo.svg';
import Product from './components/Product'
import Cart from './components/Cart'
import CartSummary from './components/CartSummary';
import { useEffect, useState } from 'react';

function App() {

  const initialListOfProducts = [
    {
      id: "1",
      title: "Product 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros leo, molestie vel nibh vitae, venenatis fringilla libero. Morbi pulvinar nunc nunc, sit amet gravida magna semper id. Etiam ut sagittis nisi. Nam nec aliquet nisl. Mauris iaculis dapibus augue a convallis. Proin vel dolor rhoncus, varius eros vitae, efficitur dui. Sed euismod aliquam laoreet. ",
      price: 0.1,
      quantity: 1

    },
    {
      id: "2",
      title: "Product 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros leo, molestie vel nibh vitae, venenatis fringilla libero. Morbi pulvinar nunc nunc, sit amet gravida magna semper id. Etiam ut sagittis nisi. Nam nec aliquet nisl. Mauris iaculis dapibus augue a convallis. Proin vel dolor rhoncus, varius eros vitae, efficitur dui. Sed euismod aliquam laoreet. ",
      price: 0.01,
      quantity: 1

    },
    {
      id: "3",
      title: "Product 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros leo, molestie vel nibh vitae, venenatis fringilla libero. Morbi pulvinar nunc nunc, sit amet gravida magna semper id. Etiam ut sagittis nisi. Nam nec aliquet nisl. Mauris iaculis dapibus augue a convallis. Proin vel dolor rhoncus, varius eros vitae, efficitur dui. Sed euismod aliquam laoreet. ",
      price: 0.02,
      quantity: 1
    }
  ];

  const [listOfProducts, setListOfProducts] = useState(initialListOfProducts);
  const [listOfProductsToBePassed, setListOfProductsToBePassed] = useState(listOfProducts);

  useEffect(() => {
    console.log('mpike');
    setListOfProductsToBePassed(listOfProducts);
  }, [listOfProducts]);

  const removeProduct = (productToBeRemovedId) => {
    let productToBeRemovedIndex;
    for(let i=0; i<listOfProducts.length; i++) {
      if(listOfProducts[i].id == productToBeRemovedId) {
        productToBeRemovedIndex = i;
      }
    }
    let reducedList = listOfProducts.filter(product => product.id !== productToBeRemovedId);
    setListOfProducts(reducedList);
  }

  const changeProductQuantity = (productToBeChangedId, newQuantity) => {
    for(let i=0; i<listOfProducts.length; i++) {
      if(listOfProducts[i].id == productToBeChangedId) {
        listOfProducts[i].quantity = newQuantity;
      }
    }
    let renewedList = [...listOfProducts];
    setListOfProducts(renewedList);
  }

  return (
    <div className="row justify-content-around mb-4">
      <CartSummary listOfProducts={listOfProductsToBePassed}></CartSummary>
      <Cart listOfProducts={listOfProductsToBePassed} removeProduct={removeProduct} changeProductQuantity={changeProductQuantity}></Cart>
    </div>

  );
}

export default App;
