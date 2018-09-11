import { observable, computed, action } from "mobx";

import TodoModel from "./TodoModel";

export default class LoginModel {
  
  @observable isLoginErr = false

  @computed
  get isErr () {
      return this.isLoginErr
  }

  @action
  verify(values) {
    console.log(values)
    this.isLoginErr = false
    return true
  }
}
