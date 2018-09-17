import React, { Component } from 'react';
import { Layout, Button } from 'antd';
import PostContent from './PostContent'
const {Header, Content} = Layout

class Post extends Component {

    constructor(props) {
        super(props)
        this.backToCalendar=this.backToCalendar.bind(this)
        this.getPostData = this.getPostData.bind(this)
        this.state = {
            post: null
        }
        this.getPostData()
    }

    backToCalendar() {
        this.props.history.push("/")
    }

    getPostData(){
        let {id} = this.props.match.params
        var myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')
        const option = {
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        }
        let _this = this
        fetch('/post/get?id='+ id ,option).then((response) => {
            response.text().then((responseText) => {
                console.log(responseText)
                let res = JSON.parse(responseText)
                console.log(res)
                debugger
                _this.setState({post: res.result.content})
            })
        })
    }



    render() {
        
        return (<Layout>
            <Header>           <Button type="primary" onClick={this.backToCalendar}>首页</Button></Header>
            <Content>
                <PostContent data={this.state.post}/>
            </Content>
        </Layout>    )
    }

}

export default Post