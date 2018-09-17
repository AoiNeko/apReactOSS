import React, { Component } from 'react';
import styled from 'styled-components';

const Li = styled.li`
    list-style-type: none
    &:hover {
        box-shadow: inset 1px 1px 4px 2px rgba(16, 134, 36, 0.28);
        background-color: rgba(16, 134, 36, 0.28);
    }
`


class PostTitle extends Component {
    constructor (props) {
        super(props)
        this.state = {
            title: props.title,
            count: 0
        }
        this.titleClick = this.titleClick.bind(this)
    }

    titleClick(e) {
        // alert("1")
        e.stopPropagation()
        
        console.log(e)
        let increCount = this.state.count + 1
        this.setState({
            count: increCount,
            title: '点了' + increCount
        })
    }

    render() {
        return (<Li onClick={this.titleClick} >{this.state.title}</Li>)        
    }
    
}

export default PostTitle