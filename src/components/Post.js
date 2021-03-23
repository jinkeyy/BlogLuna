import { Component } from "react";
import { Route ,Link, Router} from "react-router-dom"
import FormCreatePost from "./FormCreatePost";
import PostItem from "./PostItem";
import { connect } from "react-redux";
import {fetchPosts} from "../actions"
import PostDetail from "./PostDetail"
class Post extends Component{

    constructor(props) {
        super(props);
        this.state = {
            nowpage:1,
        };
    }
    componentDidMount() {
        this.props.fetchPosts();
    }
    setPage = (countpost)=>{
    
    }
    render(){
        const posts = this.props.postsOfComponent
        let { match } = this.props
        let url = match.url; 
        let result  = posts.map((post,index)=>{
            return(
                <PostItem title={post.title} idPost={post.id} content={post.content} image={post.image} createAt={post.createAt} url={`${url}/${post.id}`}/>         
            )
        })
        ////////Phân trang
        console.log("Bài viết: "+posts.length)
        console.log("Số trang là "+Math.ceil(posts.length/3))
        return(
            <div className="main-post container">
                <div className="row create-post-wrapper">
                    <div className="col-10">
                    </div>
                    <div className="create-post col-2">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#create-post">Thêm bài viết mới</button>
                    </div>
                </div>
                <FormCreatePost></FormCreatePost>
                {/* List Item */}
                {result}
                <Route path="/post/pagination/:page">

                </Route>
                <div className="pagination-wrapp">
                    <ul className="pagination justify-content-center">
                    <li className="page-item "><Link className="page-link" to='/post/pagination/1'>Trang đầu</Link></li>
                        <li className="page-item active"><Link className="page-link" to='/post/pagination/1'>1</Link></li>
                        <li className="page-item"><Link className="page-link" to='/post/pagination/2'>2</Link></li>
                        <li className="page-item"><Link className="page-link" to='/post/pagination/3'>3</Link></li>
                        <li className="page-item"><Link className="page-link" to='/post/pagination/3'>Trang cuối</Link></li>
                    </ul>
                </div>
            </div>
            
        )
    }
}
const mapStateToProps = (state) => {
    return {
      postsOfComponent: state.posts
    }
}
export default connect(mapStateToProps, { fetchPosts })(Post);
