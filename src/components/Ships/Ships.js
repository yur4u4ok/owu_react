// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)

import {useEffect, useState} from "react";
import {shipService} from "../../services/shipService";
import {Ship} from "../Ship/Ship";

const Ships = () => {
    let [ships, setShips] = useState([])

    useEffect(() => {
        shipService.getAll().then(value => value.data).then(value => setShips([...value]))
    }, [])

    return (
        <div>
            {ships.map(ship => <Ship key={ship.flight_number} ship={ship}/>)}
        </div>
    )
}

export{
    Ships
}
