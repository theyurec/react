import React from 'react';
import BlogComponent from "./BlogComponent/BlogComponent";
import Buttons from "./Buttons/Buttons";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



const App = () => {
    return (
        <Router>
            <div>
                <Link to="/BlogComponent">BlogComponent</Link>
                <Link to="/Buttons">Buttons</Link>
                <Switch>
                    <Route path="/BlogComponent">
                        <BlogComponent />
                    </Route>
                    <Route path="/Buttons">
                        <Buttons />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;