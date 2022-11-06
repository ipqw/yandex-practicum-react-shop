import { Reviews } from './Reviews';
import {useState} from 'react'
import { Catalog } from './Catalog';
import { data } from '../data'

export const Main = (props) => {

    const [name, setName] = useState('qwe')

    function asd(info) {
        setName(info)
        props.setData(1)
    }

    if(props.data === 0){
        props.setData(0)
        return <Catalog data={data} getInfo={asd}/>
    }
    if(props.data === 1){
        return <Reviews name={name}/>
    }
}