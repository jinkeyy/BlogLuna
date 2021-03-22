import { Component } from "react";

class PostHomeItem extends Component{
    render(){
        return(
            <div className="card col-xl-2 home-post-item">
                <img  className="card-img-top"></img>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        )
    }
}
export default PostHomeItem