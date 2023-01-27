import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services";
import {Post} from "../Post/Post";

const CommentDetail = () => {
    let {id} = useParams()

    let [post, setPost] = useState([])

    useEffect(() => {
        postService.getById(id).then(value => value.data).then(value => setPost({...value}))
    },[id])

    return (
        <div>
            {<Post key={post.id} post={post}/>}
        </div>
    )
}

export {
    CommentDetail
}
