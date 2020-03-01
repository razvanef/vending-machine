import React from 'react'

const ProductItem = ({ product }) => (
    <li className="col-sm-6 col-md-4 float-left mb-3 px-1">
        <div className="card border-dark">
            <div className="card-header">
                <span>Code: <b>{product.id}</b></span>
            </div>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Stoc: {product.inventory}</p>
            </div>
            <div className="card-footer text-center">
                <b className="text-muted">{product.price} RON</b>
            </div>
        </div>
    </li>
)

export default ProductItem