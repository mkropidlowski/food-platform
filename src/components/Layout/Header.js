import { Fragment } from 'react'
import styles from './Header.module.css'
import foodTable from '../../assets/food-table.jpeg'

import CartButton from './CartButton'

export default function Header(props) {
  return (
    <Fragment>
        <header className={styles.header}>
            <h1>FOODLINE</h1>
            <CartButton onClick={props.onShowCart}/>
        </header>
        <div className={styles['main-image']}>
            <img className={styles['foodTable-img']} src={foodTable} alt='Full table of food'/>
        </div>
    </Fragment>
  )
}
