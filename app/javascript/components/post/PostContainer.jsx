import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Comments from './Comments';
import Post from './Post';

class PostContainer extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            post: {},
            comments: [],
        }
        this.deletePost = this.deletePost.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
        this.getPost = this.getPost.bind(this);
        this.getComments = this.getComments.bind(this);
     } 
     
     getPost() {
        const { match: { params: {id} } } = this.props;

        axios.get(`http://localhost:3000/api/v1/post/show/${id}`)
        .then( (data) => {
            this.setState({ post: data.data })
        })
        .catch( () => {
            this.props.history.push("/posts")
        });
     }

     getComments() {
        const { match: { params: {id} } } = this.props;

        axios.get(`http://localhost:3000/api/v1/post/${id}/comments/index`)
        .then( (data) => { 
        this.setState({ comments: data.data })
       } )
        .catch( () => console.log("error") )
     }

     componentDidMount() {
    this.getPost()
    this.getComments()
     }

     deletePost(){
        const { match: { params: {id} } } = this.props;
        const token = document.querySelector('meta[name="csrf-token"]').content;
        axios.defaults.headers.common['X-CSRF-TOKEN'] = token;

        axios.delete(`http://localhost:3000/api/v1/post/destroy/${id}`)
        .then( () => this.props.history.push("/posts") )
        .catch( (error) => console.log(error.message) );
     }

     onSubmit(e){
            e.preventDefault();
            const token = document.querySelector('meta[name="csrf-token"]').content;
            axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
    
            axios.post(`http://localhost:3000/api/v1/post/${this.state.post.id}/comments/create`, {
                commenter: e.target.commenter.value, body: e.target.body.value })
            .then( (data) => {
                this.setState({ comments: data.data })
            } )
            .catch( (error) =>{
                console.log(error.message)} )
    
        }

     deleteComment(id){
        const token = document.querySelector('meta[name="csrf-token"]').content;
        axios.defaults.headers.common['X-CSRF-TOKEN'] = token;

        axios.delete(`http://localhost:3000/api/v1/post/${this.state.post.id}/comments/destroy/${id}`)
        .then( (data) => {
            this.getComments() })
        .catch( (error) => console.log(error.message) );
     }

    render() {

        const { post, comments } = this.state;


        return (
            <>
                 
                <Post post={post} deletePost={this.deletePost} />

                <Comments postId={post.id} comments={comments} onSubmit={this.onSubmit} deleteComment={this.deleteComment} />

                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 col-md-3">
                        <Link to="/posts" className="btn btn-link">
                             Back to all posts
                        </Link>
                    </div>

                  </div>
                </div>
                 
            </>
        )
    }
}

export default PostContainer;