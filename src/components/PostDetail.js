import { Component } from "react";
import { connect } from "react-redux";
import {fetchPosts} from "../actions"
import apiPost from "../apis/apiPost";
import axios from "axios"
import { Redirect, Route  } from "react-router";
import { Link } from "react-router-dom";
import { read_cookie } from "sfcookies";
class PostDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            post: [],
            redirect:false,
            file: null,
            title:"",
            content:"",
            image:null,
            mess:"",
            imageUp:"",
        };
        this.uploadSingleFile = this.uploadSingleFile.bind(this)
    }
    componentDidMount() {
        var {match} = this.props; 
        var url = "/post/show?id="+match.params.id; 
        const call = async () =>{
            const res = await apiPost.get(url)
            this.setState({ post:res.data[0] });
        }
        call()
    }
    onChangeTitle =(e)=>{
         this.setState({
            title: e.target.value,
         })
    }
    onChangeContent = (e)=>{
        this.setState({
            content: e.target.value,
     })
    }
    uploadSingleFile(e) {
        this.setState({
            file: URL.createObjectURL(e.target.files[0]),
            imageUp:  e.target.files[0]
        })
    }
    deletePost = ()=>{
        var{match} =this.props
        const token = read_cookie("token")
        const call = async () =>{
            const res = await apiPost({
                method:"get",
                url:"/post/delete?id="+match.params.id,
                headers: { Authorization: "Bearer " + token },
            })
            if(res.data=="success"){
                this.setState({
                    redirect:true
                })
            }else{
                console.log("lỗi")
            }
        }
        call()
       
    }
    updatePost = (e) =>{
         e.preventDefault()
        console.log("update")
        const token = read_cookie("token")
        console.log(this.state.title)
        console.log(this.state.content)
        console.log(this.state.imageUp)
        let  bodyFormData = new FormData();
        bodyFormData.append("id",this.state.post.id)
        bodyFormData.append("title",this.state.title)
        bodyFormData.append("content",this.state.content)
        if(this.state.imageUp){
            bodyFormData.append("image",this.state.imageUp)
        }
        const call = async () =>{

            const res = await apiPost({
                method:"post",
                url:"/post/update",
                headers: { Authorization: "Bearer " + token },
                data:bodyFormData,
            })
            if(res.data=="success"){
                window.location.reload(false);
            }else{
                console.log("lỗi")
            }
        }
        call()
       
    }
    loadFormUpdate = () =>{
        console.log("hiện form")
        this.setState({
            title: this.state.post.title,
            content: this.state.post.content,
            image: this.state.post.image
        })

    }
    closeForm = () =>{
        window.location.reload(false);
    }
    render(){
        if(this.state.redirect){
            const location = {
                pathname: '/post',
                state: { id : this.state.post.id }
              }
            return <Redirect to={location}></Redirect>
        }
        let deletePost = []
        if(localStorage.getItem("Username")){
            deletePost.push(<div className="delete-post-wrapper">
            <div className="delete-post">
                 <button  type="button" className="btn btn-primary" data-toggle="modal" data-target="#delete-post">Xóa bài viết</button>
            </div>
            <div className="update-post">
                 <button  type="button" className="btn btn-primary" data-toggle="modal" data-target="#update-post" onClick={this.loadFormUpdate}>Sửa bài viết</button>
            </div>
        </div>)
        }
        let imgPreview;
        if (this.state.file) {
            imgPreview = <img src={this.state.file} alt='' style={{width:'100%'}} />;
        }else{
            imgPreview = <img src={this.state.image} alt='' style={{width:'100%'}} />;
        }
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
                {
                    deletePost.map((item)=>{
                        return item
                    })
                }
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
                    <div className="modal fade" id="update-post">
                        <div className="modal-dialog">
                            <div className="modal-content">           
                                <div className="modal-header">
                                    <h4 className="modal-title">Sửa bài viết</h4>
                                </div>          
                                <div className="modal-body">
                                <form action="#" onSubmitted={this.handleSubmitted} ref={form => this.form = form} >
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="title" placeholder="Tiêu đề ..." onChange={this.onChangeTitle} value={this.state.title}></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="comment">Nội dung:</label>
                                        <textarea className="form-control" rows="5" name="content" onChange={this.onChangeContent} value={this.state.content}></textarea>
                                    </div>
                                {/*  */}
                                    <div className="form-group preview">
                                        {imgPreview}
                                    </div>
                                    <div className="form-group">
                                        <label for="comment">Ảnh: </label>
                                        <input type="file" className="form-control input-image-update-post" onChange={this.uploadSingleFile}  />
                                    </div>
                                    <div className="mess-form text-center">{this.state.mess}</div>                              
                                {/*  */}
                                    <button type="submit" className="btn btn-success submit-update-post" onClick={this.updatePost}>Tạo</button>                             
                                </form>
                                </div>                  
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={this.closeForm}>Close</button>
                                </div>          
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default PostDetail