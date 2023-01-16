import { Counter } from "../../components/Counter/Counter";
import './Reviews.css'
import { Review } from "../../components/Review/Review";
import { useDispatch, useSelector } from "react-redux";
import loadPic from '../../images/load.gif'
import { useEffect } from "react";
import { loadReviewsIfNotExist } from "../../store/reviews/loadReviewsIfNotExist";
import { selectIsReviewsLoading, selectReviews } from "../../store/reviews/selectors";
import { useParams } from "react-router-dom";
import { selectBookById } from "../../store/book/selectors";

export const Reviews = () => {
    const {id} = useParams()
    const data = useSelector((state) => selectBookById(state, id))
    
    const dispatch = useDispatch()
    const reviews = useSelector((state) => selectReviews(state))
    const isLoading = useSelector((state) => selectIsReviewsLoading(state))
    

    useEffect(() => {
        dispatch(loadReviewsIfNotExist)
    }, [])

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
                            <Counter id={data.id} /> 
                        </div>
                    </div>
                    <div className="annotation">
                        <h1 className="annotation__title">Аннотация</h1>
                        <p className="annotation__text">{data.annotation}</p>
                    </div>
                </div>
            </div>
            <div className="reviews">
                {reviews &&
                reviews.map((elem) => {
                    return <Review data={elem} ids={data.reviews}/> 
                })
                }
                {isLoading &&
                    <img style={{width: 100, height: 100}} src={loadPic} alt='Загрузка...'/>
                }
            </div>
        </div>
    )
}