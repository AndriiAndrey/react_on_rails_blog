import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
    return (
        <div>
            <div className="hero position-relative d-flex align-items-center justify-content-center">
                    <img src={props.post.image 
                    || "https://preview.redd.it/vuz4ozvkrm021.jpg?width=960&crop=smart&auto=webp&s=3abd1fc1bfb813ce88b942377ea2ee1e9410fd2d"}
                    alt={`${props.post.title} image`}
                    className="img-fluid position-absolute"
                    />
                    <div className="overlay bg-dark position-absolute"/>
                    <h1 className="display-4 position-relative text-white" >
                        {props.post.title}
                    </h1>
                </div>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-sm-12" >
                            <h5 className="mb-2">Post text</h5>
                            
                                {props.post.text}
                            
                        </div>
                        <div className="col-sm-12 col-md-3 mt-4">
                            <button type="button" className="btn btn-danger"
                            onClick={props.deletePost} >
                                Delete post
                            </button>
                        </div>
                        <div className="col-sm-12 col-md-3 mt-4">
                        <Link to={`/update/${props.post.id}`} className="btn custom-button">
                            Edit Post
                        </Link>
                        </div>

                    </div>
                </div>
        </div>
    )
}

export default Post;