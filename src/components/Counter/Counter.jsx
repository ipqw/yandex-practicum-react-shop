import classes from './Counter.module.css'
import { useState } from 'react'

export const Counter = () => {
    const [value, setValue] = useState(0)
    return(
        <div className={classes.counter}>
            <button onClick={() => setValue(value - 1)} className={classes.counter__btn} disabled={value === 0 ? true : false}>-</button>
                <p className={classes.counter__value}>{value}</p>
            <button onClick={() => setValue(value + 1)} className={classes.counter__btn}>+</button>
        </div>
    )
}