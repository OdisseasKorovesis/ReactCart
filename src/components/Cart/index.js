import Product from '../Product';
import ProductViewsWithPrice from '../ProductViews';

function Cart(props) {

    const listOfProducts = props.listOfProducts;
    console.log(props.listOfProducts);

    return (

        <div className="row col-8">
            {listOfProducts.map((product) => (
                <div className="col-4">
                    <Product id={product.id} title={product.title} description={product.description} price={product.price} changeProductQuantity={props.changeProductQuantity}></Product>
                    <div className="text-center mt-2">
                        <button className="btn btn-warning" onClick={() => { props.removeProduct(product.id) }}>Remove</button>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default Cart;
