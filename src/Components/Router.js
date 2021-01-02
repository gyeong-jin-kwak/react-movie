import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from 'Routes/Home';
import TV from 'Routes/TV';
import Search from 'Routes/Search';

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={ Home } />
      <Route path="/tv" exact component={ TV } />
      <Route path="/tv/popular" render={()=><h1>Popular</h1>} />
      <Route path="/search" component={ Search } />
      <Redirect from="*" to="/" /> 
      {/* 일치하는 페이지가 없을 때 to="/" 로 보내줌 */}
    </Switch>
  </Router>
)