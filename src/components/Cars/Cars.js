import {Car} from "../Car/Car";

const Cars = ({cars, setCars, setUpdateCar}) => {

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCars={setCars} cars={cars} setUpdateCar={setUpdateCar}/>)}
        </div>
    )
}

export {
    Cars
}
