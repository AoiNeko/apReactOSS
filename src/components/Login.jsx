import React, { Component } from "react";
import { observer } from "mobx-react";
import { Form, Icon, Input, Button, Checkbox, Alert, Card } from 'antd';
import LoginModel from '../models/LoginModel'

const FormItem = Form.Item;
const loginModel = new LoginModel()

@observer
class Login extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                let userName = values.userName
                let password = values.password
                let form = document.createElement("form")
                form.style = "display:none;";
                form.action = "/paycenter/login"
                form.method = "post"
                form.innerHTML = "<input name=\"username\" value=\"" + userName + "\"  />"
                    + "<input name=\"password\" value=\"" + password + "\"  />"
                document.getElementById("root").appendChild(form)
                form.submit()
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        let error = window.location.search.indexOf("error") >  0


        return (
            <div style={{ height: "100%", width: "100%" }}>
                <div id="loginTitle">支付中心管理平台</div>

                <div id="loginForm" >
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                        </Button>
                        </FormItem>

                        {
                            error ? (<Alert
                                message="错误"
                                description="用户名或密码错误"
                                type="error"
                                showIcon
                            />) : ""
                        }

                    </Form>

                </div>
            </div>

        );
    }
}

const WrappedNormalLogin = Form.create()(Login);

export default WrappedNormalLogin