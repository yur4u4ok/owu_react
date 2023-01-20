const Ship = ({ship}) => {
    console.log(ship);
    let {mission_name, launch_year} = ship

    return (
        <div className='ship'>
            <div>mission_name: {mission_name}</div>
            <div>launch_year: {launch_year}</div>
            <div><img src={ship.links.mission_patch_small} alt=""/></div>
        </div>
    )
}

export {
    Ship
}
