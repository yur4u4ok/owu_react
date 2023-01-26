import './App.css';
import {CarForm, Cars} from "./components";
import {useEffect, useState} from "react";
import {carService} from "./services";

function App() {
    const [cars, setCars] = useState([])
    const [updatedCar, setUpdateCar] = useState(null)
    const [deleteCar, setDeleteCar] = useState(null)

    if(deleteCar){
        for(let i=0; i<cars.length; i++){
            if(deleteCar.id === cars[i].id){
                cars.splice(i,1)
                setCars([...cars])
                carService.deleteById(deleteCar.id)
            }
        }
    }

    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars([...value]))
    }, [])

    return (
        <div className="App">
            <CarForm setCars={setCars} updatedCar={updatedCar}/>
            <hr/>
            <Cars cars={cars} setUpdateCar={setUpdateCar} setDeleteCar={setDeleteCar}/>
        </div>
    );
}

export default App;
