import { Component } from "react";

class PostItem extends Component{
    render(){
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
                    <h5>Very long post title</h5>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ratione
                    necessitatibus itaque error alias repellendus nemo reiciendis aperiam quisquam minus
                    ipsam reprehenderit commodi ducimus, in dicta aliquam eveniet dignissimos magni.
                    </p>
                    <button type="button" className="btn btn-info">Đọc chi tiết</button>
                </div>
            </div>
        )
    }
}
export default PostItem