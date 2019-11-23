import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
    return (
        <Router>
            <div>
                <NavBar></NavBar>
                <hr />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/about' component={About} />
                </Switch>
            </div>
        </Router>

        //
        // <div>
        //     <NavBar></NavBar>
        //     <Home></Home>
        // </div>
    );
}

export default App;
