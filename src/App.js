import {Cars} from "./components";
import {CarForm} from "./components";
import {useEffect, useState} from "react";
import {carService} from "./services";

function App() {
    const [cars, setCars] = useState([])
    const [updateCar, setUpdateCar] = useState(null)

    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars([...value]))
    }, [cars])

    return (
        <div className="App">
            <CarForm setCars={setCars} updateCar={updateCar}/>
            <hr/>
            <Cars cars={cars} setCars={setCars} setUpdateCar={setUpdateCar}/>
        </div>
    );
}

export default App;
