import {useForm} from "react-hook-form";
import {carService} from "../../services";
import {useEffect} from "react";

const CarForm = ({setCars, updateCar}) => {
    const {register, handleSubmit, reset, formState: {isValid}, setValue} = useForm({mode: "all"})

    const submit = async (car) => {
        const {data} = await carService.create(car)
        setCars(prev => [...prev, data])
        reset()
    }

    const update = async (car) => {
        const {data} = await carService.updateById(updateCar.id, car)
        if (Object.keys(data).length) {
            const {data} = await carService.getAll()
            setCars([...data])
            reset()
        }
    }


    useEffect(() => {
        if (updateCar) {
            setValue('brand', updateCar.brand)
            setValue('price', updateCar.price)
            setValue('year', updateCar.year)
        }
    }, [updateCar])

    return (
        <div>
            <form onSubmit={handleSubmit(updateCar ? update : submit)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button disabled={!isValid}>{updateCar ? 'Update' : 'Create'}</button>
            </form>
        </div>
    )
}

export {
    CarForm
}
