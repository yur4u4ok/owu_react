import css from './Dog.module.css'

const Dog = ({dog, dispatch}) => {
    return (
        <div className={css.Dog}>
            <div>{dog.id} {dog.name}</div>
            <button onClick={() => dispatch({type: 'DELETE_DOG', payload: dog.id})}>Delete</button>
        </div>
    )
}

export{
    Dog
}
