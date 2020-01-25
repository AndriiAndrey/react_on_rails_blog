import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import {connect, Provider} from 'react-redux';
import { compose } from 'redux';
import Home from './Home';
import Posts from './Posts';
import PostContainer from './post/PostContainer';
import NewPost from './NewPost';
import UpdatePost from './UpdatePost';
import store from '../redux/store';


const App = () => {

        return (
        
        <div>
            <Router>
                <Provider store={store}>
                <withRouter>
                <Switch>
                 <Route path="/" exact component={Home} />
                 <Route path="/posts" component={Posts} />
                 <Route path="/post/:id" component={PostContainer} />
                 <Route path="/post" component={NewPost} />
                 <Route path="/update/:id" component={UpdatePost} />
                </Switch>
                </withRouter>
                </Provider>
            </Router>

        </div>
            
            
        )
    }
    


export default App;