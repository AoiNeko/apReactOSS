import React from "react"
import { render } from "react-dom"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DevTools from "mobx-react-devtools"

import './css/index.css';
import ApIndex from './components/ApIndex'
import Login from './components/Login'


render(
  <div>
    <DevTools />
    <BrowserRouter>
        <Switch>
          <Route exact path="/paycenter" component={ApIndex}></Route>
          <Route exact path="/paycenter/index" component={ApIndex}></Route>
          <Route path="/paycenter/login" component={Login}></Route>
          <Route path="/paycenter/p/:res" component={ApIndex}></Route>
        </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);

