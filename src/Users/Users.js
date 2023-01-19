// з jsonplaceholder отримати всіх юзерів в компоненту Users.js
// відобразити кожного інформацію (id,name) з кожного юзера (компонента User)
// Зробити кнопку вибора юзера, при натисканні на яку в Users.js ви покажете детальну інфомацію про користувача
// (довільно обрану інформацію)
import {useEffect, useState} from "react";
import {User} from "../User/User";
import {postService} from "../services/postService";

const Users = () => {
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
            {postDetails && <User post={postDetails}/>}

            <hr/>

            <h1>Posts</h1>
            {posts.map(post => <User key={post.id} post={post} setPostDetails={setPostDetails}/>)}
        </div>
    )
}

export {
    Users
}
