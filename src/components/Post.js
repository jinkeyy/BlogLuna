import { Component } from "react";
import { Link } from "react-router-dom";
import FormCreatePost from "./FormCreatePost";
import PostItem from "./PostItem";

class Post extends Component{
    render(){
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
                <PostItem />
                <PostItem />
                <PostItem />
                <div className="pagination-wrapp">
                    <ul class="pagination justify-content-center">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item active"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Post