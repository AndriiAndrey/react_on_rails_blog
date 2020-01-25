import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class UpdatePost extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            text: "",
            image: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        const { match: { params: {id} } } = this.props;
    
        axios.get(`http://localhost:3000/api/v1/post/show/${id}`)
        .then( (data) => {
            this.setState(data.data)
        })
        .catch( () => {
            this.props.history.push("/posts")
        })
    
         }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const { match: { params: {id} } } = this.props;
        const token = document.querySelector('meta[name="csrf-token"]').content;
        axios.defaults.headers.common['X-CSRF-TOKEN'] = token;

        axios.put(`http://localhost:3000/api/v1/post/update/${id}`, {
            title: this.state.title, image: this.state.image, text: this.state.text})
        .then( (data) => this.props.history.push(`/post/${data.data.id}`) )
        .catch( (error) => console.log(error.message) )

    }

    render() {

        const { title, text, image, id } = this.state

        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12 col-lg-6 offset-lg-3">
                        <h1 className="font-weight-normal mb-5">
                            Add a new post to our blog
                        </h1>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="postTitle">Post title</label>
                                <input type="text"
                                        name="title"
                                        id="postTitle"
                                        className="form-control"
                                        required
                                        value={title}
                                        onChange={this.onChange}/>
                            </div>

                            <div className="form-group">
                            <label htmlFor="postImage">Post image</label>
                                <input type="text"
                                        name="image"
                                        id="postImage"
                                        className="form-control"
                                        value={image}
                                        onChange={this.onChange}/>
                                <small id="imageHelp" className="form-text text-muted">
                                Put URL of your picture
                                </small>
                            </div>
                            <label htmlFor="text">Post text</label>
                            <textarea className="form-control"
                                      id="text"
                                      name="text"
                                      rows="5"
                                      required
                                      value={text}
                                      onChange={this.onChange} />
                            <button type="submit" className="btn custom-button mt-3">
                                Edit post
                            </button>
                            <Link to={`/post/${id}`} className="btn btn-link mt-3" >
                                Back to post
                            </Link>

                        </form>

                    </div>

                </div>
                
            </div>
        )
    }
}

export default UpdatePost;
