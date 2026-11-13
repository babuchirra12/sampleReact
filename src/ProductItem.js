import React, {useState} from 'react';

let ProductItem = () => {

    let [state , setState] = useState({
        product : {
            sno : 'AA001',
            image : 'https://www.bhphotovideo.com/images/images2500x2500/apple_mlch2ll_a_watch_sport_smartwatch_38mm_1187204.jpg',
            name : 'Mi Watch',
            price : 1500,
            qty : 2
        }
    });

    let {product} = state;

    let incrQty = () => {
        setState((state) => ({
            product : {
                ...state.product,
                qty : state.product.qty + 1
            }
        }));
    };

    let decrQty = () => {
        setState((state) => ({
            product : {
                ...state.product,
                qty : state.product.qty - 1 > 0 ? state.product.qty - 1 : 1
            }
        }));
    };

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">Product Item</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eum laborum explicabo eligendi assumenda aliquam iste ratione deleniti sapiente corporis hic quidem, sit quaerat, excepturi saepe quasi sequi. Officia, adipisci.</p>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row">
                    <table className="table table-striped text-center table-hover">
                        <thead className="table-dark text-white">
                            <tr>
                                <th>SNO</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                           <tr>
                                <td>{product.sno}</td>
                                <td>
                                    <img src={product.image} alt="" width={50} height={50}/>
                                </td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>
                                    <i onClick={decrQty} className="fa fa-minus-square mx-1"/>
                                    {product.qty}
                                    <i onClick={incrQty} className="fa fa-plus-square mx-1"/>
                                </td>
                                <td>{product.qty * product.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    )
};
export default ProductItem;
