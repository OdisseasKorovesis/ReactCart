import AddProductCount from '../AddProductCount';
import ProductViewsWithPrice from '../ProductViews';

function Product(props) {
    const divImageStyle = {
        height: "25vh",
        backgroundImage: "url(https://picsum.photos/200/200)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    }

    return (
        <>
            <div className="mt-5 border border-dark rounded p-3 bg-light">
                <div className="text-center">
                    <h3>{props.title}</h3>
                </div>
                <div className='row justify-content-center'>
                    <div className="col-8" style={divImageStyle}>
                        
                    </div>
                    <div className='col-12'>
                        <div className='text-center'>
                            Price: <ProductViewsWithPrice price={props.price} />
                        </div>
                        <div className='mt-2 col-12 text-center'>
                            {props.description}
                        </div>
                        <div className='mt-2 col-12 text-center'>
                            <AddProductCount price={props.price} id={props.id} changeProductQuantity={props.changeProductQuantity} />
                        </div>
                        <div className='product-details__review'></div>
                        <div className='product-details__add-cart'></div>
                    </div>
                </div>
            </div>
            <div className='related-products'></div>
        </>
    );
}

export default Product;
