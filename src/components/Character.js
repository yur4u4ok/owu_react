import "./character.css"

export default function Character({user}){
    let {id,name,status,species,gender,image} = user;
    return (
        <div className="character">
            <h5>{id} - {name}</h5>
            <h5>{status} - {species} - {gender}</h5>

            <img src={image} alt=""/>
        </div>
    )
}
