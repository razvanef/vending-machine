import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { COINS } from '../constants/Coins'
import { addMoney, buyProduct }  from '../actions'
import ConsoleButtons from '../components/ConsoleButtons'
import Display from '../components/Display'
import Keypad from '../components/Keypad'

const Console = ({ balance, addCoin, selectProduct, message , loading}) => {
    
    const [productCode, setProductCode] = useState('')
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (productCode) {
                selectProduct(productCode)
                setProductCode('')
            }
        }, 2000)
        return () => clearTimeout(timeout)
    }, [productCode])

    const keyPressed = (key) => {
        if (key === '#') {
            setProductCode('')
            return
        }
        setProductCode(productCode + key)
    }

    return (
        <div className="sidebar mx-auto">
            <Display value={balance} code={productCode} text={message} />
            <Keypad keyPressed={keyPressed}  loading={loading}/>
            <ConsoleButtons buttons={COINS} pressButton={(coinValue) => addCoin(coinValue)} />
        </div>
    )
    }


const mapStateToProps = state => ({
    balance: state.balance,
    loading: state.loading,
    message: state.console,
    buyProduct: buyProduct,
});

const mapDispatchToProps = dispatch => ({
    addCoin: amount =>  dispatch(addMoney(amount)),
    selectProduct: productId => dispatch(buyProduct(productId))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Console);