import {Component} from "react";
import {postService} from "../services/postService";
import {Post} from "./Post";

class Posts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            posts:[]
        }
    }

    componentDidMount() {
        postService.getAll().then(value => value.data).then(value => this.setState({posts: [...value]}))
    }

    render() {
        return(
            <div>
                {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        )
    }
}

export {
    Posts
}
