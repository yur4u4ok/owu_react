const User = ({user, setUserId}) => {
    const  {id, name, username} = user

    return (
        <div className="user">
            <div>
                id: {id}
            </div>
            <div>
                name: {name}
            </div>
            <div>
                username: {username}
            </div>
            <button onClick={() => setUserId(id)}>Posts of this user</button>

        </div>
    )
}

export{
    User
}
