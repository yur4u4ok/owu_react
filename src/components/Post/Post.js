import {postActions} from "../../redux";

import {useDispatch} from "react-redux";

const Post = ({post}) => {
    const {id, title, body} = post

    const dispatch = useDispatch()

    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <button onClick={() => dispatch(postActions.setSelectedPost(post))}>select this post</button>
        </div>
    )
}

export {
    Post
}
