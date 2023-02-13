import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carActions} from "../../redux";
import {Car} from "../Car/Car";
import {useSearchParams} from "react-router-dom";

const Cars = () => {
    const {cars, loading, prev, next} = useSelector(state => state.carReducer)
    const dispatch = useDispatch()

    const [query, setQuery] = useSearchParams({page:'1'});

    useEffect(() => {
        dispatch(carActions.getAll({page:query.get('page')}))
    }, [dispatch, query])

    return (
        <div>
            {loading && <h3>Loading...</h3>}
            <button disabled={!prev} onClick={() => setQuery(query => ({page:query.get('page')-1}))}>Prev Page</button>
            <button disabled={!next} onClick={() => setQuery(query => ({page:+query.get('page')+1}))}>Next Page</button>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    )
}

export {
    Cars
}
