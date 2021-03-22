import { Component } from "react";

class FormCreatePost extends Component{
    constructor(props) {
        super(props)
        this.state = {
            file: null
        }
        this.uploadSingleFile = this.uploadSingleFile.bind(this)
        this.upload = this.upload.bind(this)
    }
    handleSubmitted = ({ res, fields, form }) => {
        form.reset()
    }
    handleButtonClick = () => {
        console.log("reset")
        this.form.reset() 
    }
    uploadSingleFile(e) {
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
        })
    }
    upload(e) {
        e.preventDefault()
    }
    render(){
        let imgPreview;
        if (this.state.file) {
            imgPreview = <img src={this.state.file} alt='' style={{width:'100%'}} />;
        }
        return(
            <div className="modal fade" id="create-post">
            <div className="modal-dialog">
                <div className="modal-content">           
                    <div className="modal-header">
                        <h4 className="modal-title">Tạo bài viết</h4>
                    </div>          
                    <div className="modal-body">
                    <form action="#" onSubmitted={this.handleSubmitted} ref={form => this.form = form}>
                        <div className="form-group">
                            <input type="text" className="form-control" name="title" placeholder="Tiêu đề ..."></input>
                        </div>
                        <div class="form-group">
                            <label for="comment">Nội dung:</label>
                            <textarea className="form-control" rows="5" name="content"></textarea>
                        </div>
                       {/*  */}
                        <div className="form-group preview">
                            {imgPreview}
                        </div>
                        <div className="form-group">
                            <label for="comment">Ảnh: </label>
                            <input type="file" className="form-control input-image-create-post" onChange={this.uploadSingleFile} />
                        </div>
                       {/*  */}
                        <button type="submit" className="btn btn-success submit-create-post">Tạo</button>
                    
                    </form>
                    </div>                  
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={()=>this.handleButtonClick()}>Close</button>
                    </div>
  
                </div>
            </div>
        </div>
        )
    }
}
export default FormCreatePost