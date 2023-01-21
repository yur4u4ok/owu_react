import {useEffect, useState} from "react";
import {userService} from "../../services/userService";
import {Post} from "../Post/Post";

const Posts = ({userId}) => {
    let [posts, setPosts] = useState([])

    useEffect(() => {
        userService.getPostByUserId(userId).then(value => value.data).then(value => setPosts([...value]))
    }, [userId])

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    )
}

export{
    Posts
}
