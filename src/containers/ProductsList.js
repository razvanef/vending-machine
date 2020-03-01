import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ProductItem from '../components/ProductItem'

const ProductsList = ({ products }) => (
    <ul className="list-unstyled">
        {products.map(product =>
            <ProductItem
                key={product.id}
                product={product}
            />
        )}
    </ul>
  )

const mapStateToProps = state => ({
	products: state.products
});

// ProductsList.propTypes = {
//     products: PropTypes.arrayOf(PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired,
//       inventory: PropTypes.number.isRequired
//     })).isRequired,
//   }

export default connect(
	mapStateToProps,
)(ProductsList);