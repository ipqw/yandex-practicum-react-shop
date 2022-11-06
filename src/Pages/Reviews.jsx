import { Counter } from "../components/Counter/Counter";
import './Reviews.css'
import { Review } from "../components/Review/Review";

export const Reviews = (props) => {
    let data = props.name
    
    return(
        <div className="wrapper">
            <div className="top">
                <div className="box">
                    <div className="main">
                        <div>
                            <p className="main__text">{data.author}</p>
                        </div>
                        <div>
                            <h2 className="title">{data.title}</h2>
                        </div>
                        <div className="main__description">
                            <p className="main__text">{data.genre}</p>
                        </div>
                        <div className="main__price">
                            <h2 className="main__price-text">{data.price} ₽</h2>
                            <Counter /> 
                        </div>
                    </div>
                    <div className="annotation">
                        <h1 className="annotation__title">Аннотация</h1>
                        <p className="annotation__text">{data.annotation}</p>
                    </div>
                </div>
            </div>
            <div className="reviews">
                {data.reviews &&
                data.reviews.map((elem) => {
                    return <Review data={elem}/> 
                })
                }
            </div>
        </div>
    )
}