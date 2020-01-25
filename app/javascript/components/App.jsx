import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Posts from './Posts';
import PostContainer from './post/PostContainer';
import NewPost from './NewPost';
import UpdatePost from './UpdatePost';


const App = () => {

        return (
        
        <div>
            <Router>
                <Switch>
                 <Route path="/" exact component={Home} />
                 <Route path="/posts" component={Posts} />
                 <Route path="/post/:id" component={PostContainer} />
                 <Route path="/post" component={NewPost} />
                 <Route path="/update/:id" component={UpdatePost} />
                </Switch>
            </Router>

        </div>
            
            
        )
    }
    


export default App;