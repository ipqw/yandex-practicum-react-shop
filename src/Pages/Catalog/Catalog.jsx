import React, {useState} from 'react'
import { Movie } from '../../components/Movie/Movie'
import './Catalog.css'
import { Categories } from '../../components/Categories/Categories'
import { upload } from '@testing-library/user-event/dist/upload'
import { useDispatch, useSelector } from 'react-redux'
import { selectBooks } from '../../store/book/selectors'
import { useEffect } from 'react'
import { loadBookIfNotExist } from '../../store/book/loadBookIfNotExist'

export const Catalog = (props) => {
    
    const dispatch = useDispatch()
    const data = useSelector((state) => selectBooks(state))

    useEffect(() => {
        dispatch(loadBookIfNotExist)
    }, [])

    const [render, setRender] = useState()
    

    const [name, setName] = useState('')
    let asd = 'Книги для детей'
    const handleNameChange = (name) => {
        setName(name)
        asd = name
        setRender(data.map((props) => {   
            if(props.category[0] == asd || props.category[1] == asd){
                return (
                    <Movie reviews={props?.reviews} annotation={props.annotation} title={props.title} author={props.author} genre={props.genre} id={props.id} price={props.price}/>
                )
            }
            else {
                return null
            }
        }))
    }



    return(
        <>
            <Categories onChange={handleNameChange}/>
            <div className='catalog'>
                {render}
            </div>
        </>
    )
}