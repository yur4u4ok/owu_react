import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {useEffect} from "react";
import {carValidator} from "../../validators";
import {carService} from "../../services";


const CarForm = ({setCars, updatedCar}) => {
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({mode:'all', resolver:joiResolver(carValidator)})

    useEffect(() => {
        if(updatedCar){
            setValue('brand', updatedCar.brand)
            setValue('price', updatedCar.price)
            setValue('year', updatedCar.year)

        }
    },[updatedCar])

    const submit = async (car) => {
        const {data} = await carService.create(car)
        setCars(prev => [...prev, data])
        reset()
    }

    const update = async (car) => {
        const {data} = await carService.updateById(updatedCar.id, car)
        if(Object.keys(data).length){
            const {data} = await carService.getAll()
            setCars([...data])
            reset()
        }
    }


    return (
        // <form onSubmit={handleSubmit(submit)}>
        //     <input type="text" placeholder={'brand'} {...register('brand', {
        //         pattern: {
        //             value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
        //             message: 'only letters'
        //         }
        //     })}/>
        //     {errors.brand && <span>{errors.brand.message}</span>}
        //
        //     <input type="text" placeholder={'price'} {...register('price', {
        //         valueAsNumber: true,
        //         min: {value: 0, message:'min 0'},
        //         max: {value: 1000000, message: 'max 1m'},
        //         required: {value:true, message: 'required'}
        //     })}/>
        //     {errors.price && errors.price.message}
        //
        //     <input type="text" placeholder={'year'} {...register('year', {
        //         valueAsNumber: true,
        //         min: {value:1990, message: 'min from 1990'},
        //         max: {value:new Date().getFullYear(), message:`max ${new Date().getFullYear()}`}
        //     })}/>
        //     {errors.year && errors.year.message}
        //
        //     <button>Create</button>
        // </form>
        <form onSubmit={handleSubmit(updatedCar ? update : submit) }>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}

            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price && errors.price.message}

            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.year && errors.year.message}

            <button disabled={!isValid}>{updatedCar? 'Update': 'Create'}</button>
        </form>
    )
}

export{
    CarForm
}
