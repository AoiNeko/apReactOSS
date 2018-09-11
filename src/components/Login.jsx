import React, { Component } from "react";
import { observer } from "mobx-react";
import { Form, Icon, Input, Button, Checkbox, Alert } from 'antd';
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
                let isUser = loginModel.verify(values)
                if (isUser) {
                    this.props.history.push("/")
                }
                else {

                }
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div id="loginForm">
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
                        loginModel.isErr ? (<Alert
                            message="Error"
                            description="用户名或密码错误"
                            type="error"
                            showIcon
                        />) : ""
                    }

                </Form>

            </div>

        );
    }
}

const WrappedNormalLogin = Form.create()(Login);

export default WrappedNormalLogin