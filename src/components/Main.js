import { Component } from "react";
import { Route, Router, Switch } from "react-router";
import Home from "./Home";
import Post from "./Post";
import PostDetail from "./PostDetail";

class Main extends Component{
    
    render(){
        let mainPost = ({ match}) => <Post match={match} />
        return(
            <div className="main" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/background.png'})`}}>      
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/post/:id" exact component={PostDetail}>
                    </Route>
                    <Route path='/post' component={mainPost}>
                    </Route>
                </Switch>
            </div>
        )
    }
}
export default Main