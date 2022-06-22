import React from 'react'
import { useContext } from 'react'
import CartContext from '../../store/CartContext'
import CartIcon from '../Cart/CartIcon'

import styles from './CartButton.module.css'

export default function CartButton(props) {

  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0)

  return (
    <button className={styles.button} onClick={props.onClick}>
        <span className={styles.icon}>
        <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>{numberOfCartItems}</span>
  </button>
  )
}
