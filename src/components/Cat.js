import css from './Cat.module.css'

const Cat = ({cat, dispatch}) => {
    return (
        <div className={css.Cat}>
            <div>{cat.name}</div>
            <button onClick={dispatch({type:'DELETE_CAT', payload:cat.id})}>Delete</button>
        </div>
    )
}

export{
    Cat
}
