import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Comments extends Component {
    constructor(props){
        super(props);

        this.state = {
            commenter: "",
            body: "",
        }
        
        this.onChange = this.onChange.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
        // this.deleteComment = this.deleteComment.bind(this);
     } 



     onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    // onSubmit(e){
    //     e.preventDefault();
    //     const token = document.querySelector('meta[name="csrf-token"]').content;
    //     axios.defaults.headers.common['X-CSRF-TOKEN'] = token;

    //     axios.post(`http://localhost:3000/api/v1/post/${this.props.postId}/comments/create`, {
    //         commenter: this.state.commenter, body: this.state.body })
    //     .then( (data) => {
    //         console.log(data.data)} )
    //     .catch( (error) => console.log(error.message) )

    // }

    // deleteComment(id){
    //     debugger;
    //     const token = document.querySelector('meta[name="csrf-token"]').content;
    //     axios.defaults.headers.common['X-CSRF-TOKEN'] = token;

    //     axios.delete(`http://localhost:3000/api/v1/post/${this.props.postId}/comments/destroy/${id}`)
    //     .then( (data) => {
    //         debugger;
    //         console.log(data) })
    //     .catch( (error) => console.log(error.message) );
    //  }


    render() {
        const { commenter, body } = this.state;

        const comments = this.props.comments;
        const allComments = comments.map( (comment, index) =>(

            <div key={index} className="row mt-3" >
                <div className="col-sm-12 border-secondary table-bordered rounded-top bg-secondary">
                    <h5>{comment.commenter}</h5>
                </div>
                
                <div className="col-sm-12 border-secondary table-bordered rounded-bottom">
                 <p >{comment.body}</p>   
                </div>

                <div className="col-sm-12 col-md-3">
                        <button onClick={ () => this.props.deleteComment(comment.id)} type="button" className="btn btn-danger">
                                Delete comment
                        </button>
                 </div>
                
            </div>
        ) )

        return (

        <div className="container py-5">

            <div className="row">

            <div className="col-sm-12" >

                <h5 className="mb-2">Add new comment</h5>

                <form onSubmit={this.props.onSubmit}>
                <div className="form-group">
                    <label htmlFor="commenter">Commenter name</label>
                    <input value={commenter}
                            type="text"
                            name="commenter"
                            id="commenter"
                            className="form-control"
                            required
                            onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="comment">Commenter name</label>
                    <textarea value={body}
                            name="body"
                            id="comment"
                            className="form-control"
                            rows="5"
                            required
                            onChange={this.onChange}/>
                </div>

                <button type="submit" className="btn custom-button mt-3">
                    Add comment
                </button>

                </form>
                 </div>
                </div>

                <div className="row">

                    <div className="col-sm-12 mt-5">
                    <h2>All comments :</h2>

                  </div>
                </div>

                    {allComments}
                

        </div>
        )
    }
}

export default Comments;