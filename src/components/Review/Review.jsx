import classes from './Review.module.css'

export const Review = (props) => {
    return (
        <div className={classes.main}>
            <h1 className={classes.author}>{props.data.author}</h1>
            <p className={classes.text}>{props.data.text}</p>    
        </div>      
    )
}