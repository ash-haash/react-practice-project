import React from 'react';

const SingleProduct = ({ product, handleCart }) => {
    return (
        <div>
            <div className="card w-[250px] p-6 space-y-4 text-center shadow-md">
                <img className="mx-auto w-48 h-56 items-center" src={product.image} alt="" />
                <h2 className="text-xl">{product.title.slice(0, 18)}</h2>
                <p className="text-gray-600">{product.description.slice(0, 60)}</p>
                <div className="card-footer flex justify-between items-center">
                    <h2 className="text-red-700 font-bold text-xl rounded-md">{product.price} $</h2>
                    <button onClick={() => handleCart(product)} className="add-btn bg-gray-300 p-2 rounded-md font-bold">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;