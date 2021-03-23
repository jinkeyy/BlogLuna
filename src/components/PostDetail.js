import { Component } from "react";
import { connect } from "react-redux";
import {fetchPosts} from "../actions"
import apiPost from "../apis/apiPost";
class PostDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {post: []};
    }
    componentDidMount() {
        var {match} = this.props; 
        var url = "/post/show?id="+match.params.id; 
        console.log(url)
        const call = async () =>{
            const res = await apiPost.get(url)
            this.setState({ post:res.data[0] });
        }
        call()
    }
    render(){
        console.log(this.state.post.title)
        return(
            <div>
                <div className="post-detail-image">
                    <img></img>
                </div>
                <div className="post-detail-main">
                    <div className="post-detail-title">
                        <h3>{this.state.post.title}</h3>
                    </div>
                    <div className="post-detail-content">
                        <p>{this.state.post.content}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default PostDetail