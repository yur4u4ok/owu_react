import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {userActions} from "../../redux";

import {User} from "../User/User";

const Users = () => {
    const dispatch = useDispatch();
    const {users, error, loading, userFromAPI} = useSelector(state => state.userReducer);

    useEffect(() => {
        // userService.getAll().then(value => value.data).then(value => dispatch(userActions.getAll(value)))
        dispatch(userActions.getAll())
    }, [])

    return (
        <div>
            {userFromAPI && userFromAPI.email}
            {loading && <h1>Loading.....</h1>}
            {error && JSON.stringify(error)}
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    )
}

export {
    Users
}
