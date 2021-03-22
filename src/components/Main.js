import { Component } from "react";
import { Route, Router, Switch } from "react-router";
import Home from "./Home";
import Post from "./Post";

class Main extends Component{
    render(){
        return(
            <div className="main" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/background.png'})`}}>      
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path='/post'>
                        <Post/>
                    </Route>
                </Switch>
            </div>
        )
    }
}
export default Main