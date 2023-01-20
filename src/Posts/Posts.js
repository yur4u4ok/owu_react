// з jsonplaceholder отримати всіх юзерів в компоненту Posts.js
// відобразити кожного інформацію (id,name) з кожного юзера (компонента Post)
// Зробити кнопку вибора юзера, при натисканні на яку в Posts.js ви покажете детальну інфомацію про користувача
// (довільно обрану інформацію)
import {useEffect, useState} from "react";
import {Post} from "../Post/Post";
import {postService} from "../services/postService";

const Posts = () => {
    let [posts, setPosts] = useState([])
    let [postDetails, setPostDetails] = useState(null)

    useEffect(() => {
        postService.getAll()
            .then(value => value.data)
            .then(value => setPosts([...value]))
    }, [])

    return (
        <div>
            <h1>Post Details</h1>
            {postDetails && <Post post={postDetails}/>}

            <hr/>

            <h1>Posts</h1>
            {posts.map(post => <Post key={post.id} post={post} setPostDetails={setPostDetails}/>)}
        </div>
    )
}

export {
    Posts
}
