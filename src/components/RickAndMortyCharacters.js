import {useState} from "react";
import Character from "./Character";
import "./character.css"

export default function RickAndMortyCharacter(){
    let [users, setUsers] = useState([])
    fetch("https://rickandmortyapi.com/api/character")
        .then(value => value.json())
        .then(characters => {
            setUsers(characters.results)
        })
    return (
        <div className="rickis">
            {users.map(user => <Character user={user} key={user.id}/>)}
        </div>
    )
}
