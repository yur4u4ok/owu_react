import css from './Car.module.css'
import {carService} from "../../services";

const Car = ({car, cars, setCars, setUpdateCar}) => {
    let {id, brand, price, year} = car

    const deleteCar  = async (car) => {
        await carService.deleteById(car.id)
        for(let i = 0; i<cars.length; i++){
            if(cars[i].id === car.id){
                cars.splice(i, 1)
                setCars(cars)
            }
        }
    }

    return (
        <div className={css.Car}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setUpdateCar(car)}>Update</button>
            <button onClick={() => deleteCar(car)}>Delete</button>
        </div>
    )
}

export {
    Car
}
