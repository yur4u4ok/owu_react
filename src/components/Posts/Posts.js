import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Post} from "../Post/Post";
import {postActions} from "../../redux";

const Posts = () => {
    const dispatch = useDispatch()

    const {posts, selectedPost} = useSelector(state => state.postReducer);

    useEffect(() => {
        dispatch(postActions.getAll())
    }, [])

    return (
        <div>
            {selectedPost && <h2>{selectedPost.id}. {selectedPost.title}</h2>}
            {posts.map(post => <Post key={post.id} post={post} />)}
        </div>
    )
}

export {
    Posts
}
