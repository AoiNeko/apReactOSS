import React, {Component} from  'react'

class PostContent extends Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        return (<div>{this.props.data}</div>)
    }
}

export default PostContent