import classes from'./Header.module.css'

export const Header = ({setData}) => { 

    return (
        <header className={classes.wrapper}>
            <h1 onClick={setData} className={classes.shop}>Магазин</h1>
            <button className={classes.cart}><img src="#" alt="cart"/></button>
        </header>
    )
}