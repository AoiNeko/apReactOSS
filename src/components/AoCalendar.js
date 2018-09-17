import { Calendar } from 'antd';
import PostTitle from './blog/PostTitle'
import React, { Component } from 'react';
import styled from 'styled-components';



const Ul = styled.ul`
  margin-left: 0em;
  padding-left: 0em;
`

function dateCellRender(value) {
    let dateData = [{ title: "biaoti", key: "1" }, { title: "我哦啊后ID骄傲囧", key: "2" }]
    return (
        <Ul>{
            dateData.map(data => (<PostTitle key={data.key} title={data.title} />))
        }</Ul>
    )
}

class AoCalendar extends Component {
    constructor(props) {
        super(props)
        this.onSelect = this.onSelect.bind(this)

    }

    onSelect(value) {
        // this.props.setMgtDispay("dayPage", value)
        console.log(this.props);
        this.props.history.push({
            "pathname": "/p/day",
            "state": { "time": "" + value }
        })

    }

    render() {
        return (<Calendar dateCellRender={dateCellRender} onSelect={this.onSelect} />)
    }

}

export default AoCalendar;