import {Component} from "react";

class Post extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div>
                <div>{this.props.post.id}</div>
                <div>{this.props.post.title}</div>
                <div>{this.props.post.body}</div>
            </div>
        )
    }
}

export {
    Post
}
