import AddProductCount from '../AddProductCount';
import ProductViewsWithPrice from '../ProductViews';

function CartSummary(props) {

    const calculateTotalPrice = () => {
        const listOfProducts = props.listOfProducts;
        let sum = 0;
        for (let i = 0; i < listOfProducts.length; i++) {
            sum += (listOfProducts[i].price * listOfProducts[i].quantity);
        }
        return sum;
    }


    return (
        <div className="col-3 border border-dark rounded mt-5 bg-secondary">
            <h2 className="h2 mt-2 text-center">My cart summary</h2>

            <table className="table table-striped table-dark mt-4">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                    </tr>

                </thead>
                <tbody>
                    {props.listOfProducts && props.listOfProducts.map((product) => (
                        <tr>
                            <td>{product.title}</td>
                            <td>{product.quantity}</td>
                            <td><ProductViewsWithPrice price={product.price}></ProductViewsWithPrice></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <table className="table table-striped table-dark mt-4">
                <thead className="justify-content-between">
                    <tr>
                        <th>Products</th>
                        <th><ProductViewsWithPrice price={calculateTotalPrice()} /></th>
                    </tr>
                </thead>
            </table>
            {calculateTotalPrice() >= 0.50 ? <div className="bg-warning rounded p-2">Order exceeds 50€, transport costs are on us!</div> :
                <div className="bg-warning rounded p-2">Extra transport cost of 10€ is automatically added to the order</div>}
            <table className="table table-striped table-dark mt-4">
                <thead className="justify-content-between">
                    <tr>
                        <th>Total Price</th>
                        <th><ProductViewsWithPrice price={calculateTotalPrice() >= 0.5 ? calculateTotalPrice()
                            : calculateTotalPrice() + 0.1} /></th>
                    </tr>
                </thead>
            </table>
        </div>
    );
}

export default CartSummary;
