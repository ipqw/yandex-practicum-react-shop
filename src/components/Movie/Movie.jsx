import React from 'react'
import { Counter } from '../Counter/Counter'
import classes from './Movie.module.css'

export const Movie = (props) => {
    const clickBook = () => {
        props.onClick(props)
    }
    
    return( 
        <div className={classes.movie}>
            <div className={classes.movie__info}>
                <h1 onClick={clickBook} className={classes.title}>{props?.title}</h1>
                <p className={classes.text}>{props?.author}</p>
                <p className={classes.text}>{props?.genre}</p>
                <p className={classes.value}>{props?.price} ₽</p>
                <p className={classes.annotation}>{props.annotation}</p>
            </div>
            <div className={classes.counter}>
                <Counter />
            </div>
        </div>
    )
}