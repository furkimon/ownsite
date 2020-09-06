import React from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './Assets/Styles/App.css'
import { Header, Home, Skills, Footer } from './components'

class App extends React.Component {

    render() {

        return (
            <div className="app">
                <React.Fragment>
                    <Header/>
                    <Home />
                    <Skills />
                    <Footer />
                </React.Fragment>
            </div>

        )
    }
}

export default App