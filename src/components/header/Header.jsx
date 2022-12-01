import { Link } from 'react-router-dom'
import classes from'./Header.module.css'
import cartImg from '../../images/cart.png'



export const Header = () => { 

    return (
        <header className={classes.wrapper}>
            <Link to='/react-shop' className={classes.shop}>Магазин</Link>
            <Link to='/cart' className={classes.cart}><img src={cartImg} alt="cart"/></Link>
        </header>
    )
}