import React,{ Component } from "react";
import { connect } from "react-redux";
import {fetchPosts} from "../actions"
class ShowPost extends Component{
    componentDidMount() {
        this.props.fetchPosts();
    }
    render(){
        const posts = this.props.postsOfComponent
        console.log(posts)
        return(
            <div>HELLO</div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      postsOfComponent: state.posts
    }
}
export default connect(mapStateToProps, { fetchPosts })(ShowPost);