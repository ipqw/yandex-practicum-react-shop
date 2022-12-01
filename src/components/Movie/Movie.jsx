import React from 'react'
import { Link } from 'react-router-dom'
import { Counter } from '../Counter/Counter'
import classes from './Movie.module.css'

export const Movie = (props) => {
    
    return( 
        <div style={props.width ? {maxWidth: 793} : {}} id={props.width ? classes.min : classes.max} className={classes.movie}>
            <div className={classes.movie__info}>
                <Link to={`/book/${props.id}`} className={classes.title}>{props?.title}</Link>
                <p className={classes.text}>{props?.author}</p>
                <p className={classes.text}>{props?.genre}</p>
                <p className={classes.value}>{props?.price} ₽</p>
            </div>
            <div className={classes.counter}>
                <Counter id={props.id}/>
            </div>
        </div>
    )
}