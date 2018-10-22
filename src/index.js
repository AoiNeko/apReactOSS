import React from "react"
import { render } from "react-dom"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DevTools from "mobx-react-devtools"

import './css/index.css';
import ApIndex from './components/ApIndex'
import Login from './components/Login'

 Date.prototype.format = function(format) {
        var date = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S+": this.getMilliseconds()
        };
        if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in date) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
            }
        }
        return format;
 }

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

