import { observable, computed, action } from "mobx";


export default class LoginModel {
  
  @observable isLoginErr = false

  @computed
  get isErr () {
      return this.isLoginErr
  }

  @action
  verify(values) {
    console.log(values)
    this.isLoginErr = true
    return false
  }
}
