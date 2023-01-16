import { useSelector } from "react-redux";
import { Movie } from "../../components/Movie/Movie";
import { selectBooks } from "../../store/book/selectors";
import { selectBookCount } from "../../store/cart/selectors";
import './Cart.css'

export const Cart = () => {
    const data = useSelector((state) => selectBooks(state))
    let counterValue
    let countValues = []
    function GetValue(id){
        counterValue = useSelector((state) => selectBookCount(state, id))
        countValues.push(counterValue)
    }
    let isEmpty = true
    let render = data.map((props) => {
        GetValue(props.id)
        countValues.map((el) => {
            if(el){
                isEmpty = false
            }
        })
        if(counterValue){
            return <Movie width={1} reviews={props?.reviews} annotation={props.annotation} title={props.title} author={props.author} genre={props.genre} id={props.id} price={props.price}/>
        }
        if(isEmpty){
            return 
        }
    })
    let orderSum = 0
    let orderRender = data.map((props) => {
        GetValue(props.id)
        if(counterValue){
            orderSum += props.price * counterValue
            return(
                <div className="order__list-book">
                    <p className="order__list-text">{props.title}</p>
                    <p className="order__list-price">{`${props.price * counterValue} ₽`}</p>
                </div>
            )
        }
    })

    return(<div className="block">
        <div className="order">
            <div className="order__list">
                <h2 className="order__list-h2">Ваш заказ:</h2>
                <div>
                    {isEmpty ? <><p>Вы еще ничего не выбрали!</p></> : <></>}
                    {orderRender}
                </div>
            </div>
            <div className="order__buy">
                <h1 className="order__sum">{`Итого:   ${orderSum} ₽`}</h1>
                <button className="order__btn">Купить</button>
            </div>
        </div>
        <div className="book">
            {render}
        </div>
        
    </div>)
}