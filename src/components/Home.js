import React from 'react'
import Banner from './Banner'
import Card from './Card'
import '../Assets/Styles/Home.css'

const Home = () => {
    

    return (
        <>
            <div id="home" className="home">
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
        </>
    )
}

export default Home
