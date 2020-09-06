import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import Card from './Card'
import { useStateValue } from "../Reducer/StateProvider"
import '../Assets/Styles/Home.css'

const Home = () => {
    const [animateSidebar, setAnimateSideBar] = useState('')
    const [shouldOverlay, setShouldOverlay] = useState('')
    const [{ isSideBar }] = useStateValue();
    const [shouldMove, setShouldMove] = useState('');

    useEffect(() => {
        if (isSideBar) {
            setAnimateSideBar('animate__sidebar')
            setShouldMove('move__home')
            setShouldOverlay('overlay__home')
        } else {
            setAnimateSideBar('')
            setShouldMove('')
            setShouldOverlay('')
        }
    }, [isSideBar])

    return (
        <>
            <div id="home" className="home">
                <div className={"sidebar " + animateSidebar}>
                    <h3>LISTE</h3>
                    <h3>LISTE</h3>
                    <h3>LISTE</h3>
                    <h3>LISTE</h3>
                    <h3>LISTE</h3>
                    <h3>LISTE</h3>
                </div>
                <div className={shouldMove}>

                    <div className={shouldOverlay} />
                    <div className="home__banner">
                        <Banner />
                    </div>
                    <div className="home__cards">
                        <div className="home__cardsRow1">
                            <div className="home__cardsRow">
                                <Card />
                                <Card />
                            </div>
                            <div className="home__cardsRow">
                                <Card />
                                <Card />
                            </div>
                        </div>
                        <div className="home__cardsRow2">
                            <div className="home__cardsRow">
                                <Card />
                                <Card />
                                <Card />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home
