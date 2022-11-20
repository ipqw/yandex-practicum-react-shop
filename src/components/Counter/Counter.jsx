import classes from './Counter.module.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectBookById } from '../../store/book/selectors'
import { selectBookCount } from '../../store/cart/selectors'
import { cartSlice } from '../../store/cart'

export const Counter = ({id}) => {
    const book = useSelector(state => selectBookById(state, id))   
    const value = useSelector(state => selectBookCount(state, id))
    const dispatch = useDispatch()

    return(
        <div className={classes.counter}>
            <button onClick={() => dispatch(cartSlice.actions.removeBook(book.id))} className={classes.counter__btn}  disabled={value === 0 ? true : false}>-</button>
                <p className={classes.counter__value}>{value ? value : 0}</p>
            <button onClick={() => dispatch(cartSlice.actions.addBook(book.id))} className={classes.counter__btn}>+</button>
        </div>
    )
}