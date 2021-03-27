import { Component } from "react";
import { connect } from "react-redux";
import {fetchPosts} from "../actions"
import apiPost from "../apis/apiPost";
import axios from "axios"
import { Redirect, Route  } from "react-router";
import { Link } from "react-router-dom";
class PostDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            post: [],
            redirect:false,
        };
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
    deletePost = ()=>{
        console.log("redirect")
        this.setState({
            redirect:true
        })
    }
    render(){
        if(this.state.redirect){
            return <Redirect to="/post" ></Redirect>
        }
        console.log(this.state.post.title)
        return(
            <div>
                <div className="post-detail-image" >
                    <img src={process.env.PUBLIC_URL + '/images/banner2.png'} className="image-post-detail" style={{backgroundImage: `url(${this.state.post.image})`}}></img>
                </div>
                <div className="post-detail-main">
                    <div className="post-detail-title">
                        <h3>{this.state.post.title}</h3>
                    </div>
                    <div className="post-detail-content">
                        <p>{this.state.post.content}</p>
                    </div>
                </div>
                <div className="delete-post-wrapper">
                    <div className="delete-post">
                         <button  type="button" className="btn btn-primary" data-toggle="modal" data-target="#delete-post">Xóa bài viết</button>
                    </div>
                </div>
                <div className="modal fade" id="delete-post">
                        <div className="modal-dialog modal-sm">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h4 className="modal-title">Bạn có chắc chắn xóa bài viết</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body justify-content-around" >    
                                    <div className="p-1">       
                                    <button type="button" className="btn btn-danger" onClick={this.deletePost} data-dismiss="modal">Xóa</button>
                                    </div>    
                                    <div className="p-1"> 
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Thoát</button>
                                    </div>
                            </div>                           
                        </div>
                        </div>
                    </div>
            </div>
        )
    }
}
export default PostDetail