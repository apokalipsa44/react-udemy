import React from 'react';
import '../styles/App.css';
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Page from "./Page";
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="app">
                <header>
                    {<Header/>}
                </header>
                <main>
                    <aside>
                        <Navigation/>
                    </aside>
                    <section className="page">
                        <Page/>
                    </section>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </div>
        </Router>
    );
}

export default App;
