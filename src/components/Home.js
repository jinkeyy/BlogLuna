import { Component } from "react";
import SearchText from "./SearchText";
import PostHomeItem from "./PostHomeItem"
class Home extends Component{
    render(){
        return(
            <div className="main-home">
                <div className="home-title-wrapper"></div>
                <div className="home-search-wrapper">
                    <SearchText />
                </div>
                <div className="home-post-wrapper row">
                    <div className="col-xl-2"></div>
                    <PostHomeItem />
                    <PostHomeItem />
                    <PostHomeItem />
                </div>
            </div>
        )
    }
}
export default Home