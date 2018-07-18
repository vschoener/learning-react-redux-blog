import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import PostIndex from '../containers/posts-index';
import PostNew from './post-new';
import PostShow from './post-show';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Blog on React :)</h1>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/posts/new" component={PostNew} />
              <Route path="/posts/:id" component={PostShow} />
              <Route path="/" component={PostIndex} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
