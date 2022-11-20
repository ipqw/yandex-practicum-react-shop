import classes from './Review.module.css'

export const Review = (props) => {
    let value = 0
    if(props.ids){
        props.ids.map((ids) => {
            if(props.data.id == ids){
                value = 1
            }
            else{
                return null
            }
        })
    }
    else{
        return null
    }
    if(value){
        return (
            <div className={classes.main}>
                <h1 className={classes.author}>{props.data.author}</h1>
                <p className={classes.text}>{props.data.text}</p>    
            </div>      
        )
    }
    
}