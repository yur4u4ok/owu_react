import './App.css';
import {useReducer, useRef} from "react";
import {Cats} from "./components/Cats";
import {Dogs} from "./components/Dogs";

const reducer = (state, action) => {
    switch (action.type) {
        case 'CAT':
            const [last] = state.cats.slice(-1);
            const id = last?last.id+1:0;
            return {...state, cats: [...state.cats, {id, name:action.payload}]};
        case 'DOG':
            const [end] = state.dogs.slice(-1);
            const idDog = end?end.id+1:0;
            return {...state, dogs: [...state.dogs, {idDog, name:action.payload}]}
        case 'DELETE_CAT':
            const index = state.cats.findIndex(cat => cat.id === action.payload)
            state.cats.splice(index, 1)
            return {...state}
        case 'DELETE_DOG':
            const index1 = state.dogs.findIndex(dog => dog.id === action.payload)
            state.dogs.splice(index1, 1)
            return {...state}
        default:
            return {...state}
    }
}

const App = () => {
    const inputCat = useRef()
    const inputDog = useRef()
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []}, (data)=>data)

    return (
        <div className="App">
            <div>
                Add cat -
                <input type="text" placeholder={'cat'} ref={inputCat}/>
                <button onClick={() => dispatch({type: 'CAT', payload: inputCat.current.value})}>Save</button>
                <Cats cats={state.cats} dispatch={dispatch}/>
            </div>

            <div>
                Add dog -
                <input type="text" placeholder={'dog'} ref={inputDog}/>
                <button onClick={() => dispatch({type: 'DOG', payload: inputDog.current.value})}>Save</button>
                <Dogs dogs={state.dogs} dispatch={dispatch}/>
            </div>

            {JSON.stringify(state)}
        </div>
    );
}

export default App;
