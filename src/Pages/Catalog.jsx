import React, {useState} from 'react'
import { Movie } from '../components/Movie/Movie'
import './Catalog.css'
import { Categories } from '../components/Categories/Categories'
import { upload } from '@testing-library/user-event/dist/upload'

export const Catalog = (props) => {
    const [render, setRender] = useState()

    const getInformation = (info) => {
        uploadData(info)
    }

    function uploadData(info) {
        props.getInfo(info)
    }

    const [name, setName] = useState('')
    let asd = 'Книги для детей'
    const handleNameChange = (name) => {
        setName(name)
        asd = name
        setRender(props.data.map((props) => {   
            if(props.category[0] == asd || props.category[1] == asd){
                return (
                    <Movie onClick={getInformation} reviews={props.reviews} annotation={props.annotation} title={props.title} author={props.author} genre={props.genre} key={props.key} price={props.price}/>
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