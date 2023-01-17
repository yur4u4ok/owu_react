export default function SimpsonComponent(props){
    let {name, img} = props
    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
        </div>
    )
}
