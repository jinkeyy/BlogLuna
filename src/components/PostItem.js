import { Component } from "react";
import { Link } from "react-router-dom";

class PostItem extends Component{
    render(){
        console.log(this.props.url)
        return(
            <div className="item-post row">
                <div className="col-md-4 mb-4">
                    <div className="bg-image hover-overlay shadow-1-strong rounded ripple" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" className="img-fluid" />
                    {/* <a href="#!">
                        <div className="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                    </a> */}
                    </div>
                </div>
                <div className="col-md-8 mb-4">
                    <h5>{this.props.title}</h5>
                    <p className="content-post">
                        {this.props.content}
                    </p>
                    <Link to={this.props.url} props="datalink"><button type="button" className="btn btn-info">Đọc chi tiết</button></Link>
                </div>
            </div>
        )
    }
}
export default PostItem