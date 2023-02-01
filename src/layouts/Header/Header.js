import {NavLink} from "react-router-dom";

import {urls} from "../../configs";
import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'/'}>Home page</NavLink>
            <NavLink to={`${urls.albums}`}>Albums page</NavLink>
            <NavLink to={`${urls.todos}`}>Todos page</NavLink>
            <NavLink to={`${urls.comments}`}>Comments page</NavLink>
        </div>
    )
}

export {
    Header
}
