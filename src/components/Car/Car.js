const Car = ({car, setUpdateCar, setDeleteCar}) => {
    let {id, brand, price, year} = car

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setUpdateCar(car)}>Update</button>
            <button onClick={() => setDeleteCar(car)}>Delete</button>
        </div>
    )
}

export {
    Car
}
