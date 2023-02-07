import {Dog} from "./Dog";

const Dogs = ({dogs, dispatch}) => {
    return (
        <div>
            {dogs.map(dog => <Dog dog={dog} key={dog.id} dispatch={dispatch}/>)}
        </div>
    )
}

export{
    Dogs
}
