import React, { useState, useEffect } from 'react'
import './Assets/Styles/App.css'
import { Header, Sidebar, Home, Skills, Footer } from './components'

import { useStateValue } from "./Reducer/StateProvider"

const App = () => {
    const [{ isSideBar }, dispatch] = useStateValue();
    const [shouldOverlay, setShouldOverlay] = useState('');
    const [shouldMove, setShouldMove] = useState('');

    useEffect(() => {
        if (isSideBar) {
            setShouldOverlay("overlay");
            setShouldMove("move")
        } else {
            setShouldOverlay('')
            setShouldMove('')
        }
    }, [isSideBar])

    const sidebar = () => {
        dispatch({ type: 'TOGGLE_SIDEBAR', payload: isSideBar });
    }



    return (
        <div className="app">
            <Header />
            <Sidebar />
            <div className="overflow">
                <div className={"back " + shouldMove}>
                    <div className={shouldOverlay} onClick={sidebar} />
                    <Home />
                    <Skills />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default App
