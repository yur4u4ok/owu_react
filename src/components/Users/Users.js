import {useEffect, useState} from "react";
import {userService} from "../../services/userService";
import {User} from "../User/User";

const Users = ({setUserId}) => {
    let [users, setUsers] = useState([])

    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setUsers([...value]))
    }, [])

    return (
        <div>
            {users.map(user => <User key={user.id} user={user} setUserId={setUserId}/>)}
        </div>
    )
}

export{
    Users
}
