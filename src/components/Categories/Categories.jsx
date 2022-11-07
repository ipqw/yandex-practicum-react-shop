import { useState, useEffect } from 'react'
import './Categories.css'
export const Categories = ({onChange}) => {
    const [activeFirst, setActiveFirst] = useState(false)
    const [activeSecond, setActiveSecond] = useState(false)
    const [activeThird, setActiveThird] = useState(false)
    const [activeFourth, setActiveFourth] = useState(false)
    const [activeFifth, setActiveFifth] = useState(false)
    const [activeSixth, setActiveSixth] = useState(false)
    const [activeSeventh, setActiveSeventh] = useState(false)

    useEffect(() => {
        changeFirst();
      }, []);

    function changeFirst() {
        onChange('Художественная литература')
        setActiveFirst(true)
        setActiveSecond(false)
        setActiveThird(false)
        setActiveFourth(false)
        setActiveFifth(false)
        setActiveSixth(false)
        setActiveSeventh(false)
    }
    function changeSecond(){
        onChange('Нехудожественная литература')
        setActiveFirst(false)
        setActiveSecond(true)
        setActiveThird(false)
        setActiveFourth(false)
        setActiveFifth(false)
        setActiveSixth(false)
        setActiveSeventh(false)
    }
    function changeThird(){
        onChange('Книги для детей')
        setActiveFirst(false)
        setActiveSecond(false)
        setActiveThird(true)
        setActiveFourth(false)
        setActiveFifth(false)
        setActiveSixth(false)
        setActiveSeventh(false)
    }
    function changeFourth(){
        onChange('Периодические издания')
        setActiveFirst(false)
        setActiveSecond(false)
        setActiveThird(false)
        setActiveFourth(true)
        setActiveFifth(false)
        setActiveSixth(false)
        setActiveSeventh(false)
    }
    function changeFifth(){
        onChange('Религия')
        setActiveFirst(false)
        setActiveSecond(false)
        setActiveThird(false)
        setActiveFourth(false)
        setActiveFifth(true)
        setActiveSixth(false)
        setActiveSeventh(false)
    }
    function changeSixth(){
        onChange('Учебная литература')
        setActiveFirst(false)
        setActiveSecond(false)
        setActiveThird(false)
        setActiveFourth(false)
        setActiveFifth(false)
        setActiveSixth(true)
        setActiveSeventh(false)
    }
    function changeSeventh(){
        onChange('Комиксы')
        setActiveFirst(false)
        setActiveSecond(false)
        setActiveThird(false)
        setActiveFourth(false)
        setActiveFifth(false)
        setActiveSixth(false)
        setActiveSeventh(true)
    }
    
    return(
        <div className="category">
            <p className={`category__text ${activeFirst ? 'category__active' : null}`} onClick={changeFirst}>Художественная литература</p>
            <p className={`category__text ${activeSecond ? 'category__active' : null}`} onClick={changeSecond}>Нехудожественная литература</p>
            <p className={`category__text ${activeThird ? 'category__active' : null}`} onClick={changeThird}>Книги для детей</p>
            <p className={`category__text ${activeFourth ? 'category__active' : null}`} onClick={changeFourth}>Периодические издания</p>
            <p className={`category__text ${activeFifth ? 'category__active' : null}`} onClick={changeFifth}>Религия</p>
            <p className={`category__text ${activeSixth ? 'category__active' : null}`} onClick={changeSixth}>Учебная литература</p>
            <p className={`category__text ${activeSeventh ? 'category__active' : null}`} onClick={changeSeventh}>Комиксы</p>
        </div>
    )
    
}