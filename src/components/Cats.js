import {Cat} from "./Cat";

const Cats = ({cats, dispatch}) => {
    return (
        <div>
            {cats.map(cat => <Cat cat={cat} key={cats.indexOf(cat)} dispatch={dispatch}/>)}
        </div>
    )
}

export{
    Cats
}
