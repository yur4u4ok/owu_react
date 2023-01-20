const Post = ({post, setPostDetails}) => {
    let {id, userId, title, body} = post

    return (
        <div className='post'>
            <div>id - {id}</div>
            <div>userId - {userId}</div>
            <div>title - {title}</div>
            <div>body - {body}</div>
            <button onClick={() => setPostDetails(post)}>Detailed info</button>
        </div>
    )
}

export{
    Post
}
