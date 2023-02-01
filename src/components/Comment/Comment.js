import css from './Comment.module.css'
import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    let {postId, name, email, body} = comment

    return (
        <div className={css.comment}>
            <div>postId: {postId}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <Link to={'/comments/'+postId}>View post</Link>
        </div>
    )
}

export{
    Comment
}
