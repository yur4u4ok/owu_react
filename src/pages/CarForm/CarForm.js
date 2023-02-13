import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";
import {useEffect} from "react";

const CarForm = () => {
    const {register, handleSubmit, reset, setValue} = useForm()
    const dispatch = useDispatch()

    const {carForUpdate} = useSelector(state => state.carReducer)

    useEffect(() => {
        if(carForUpdate){
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [setValue,carForUpdate])

    const create = async (newCar) => {
        await dispatch(carActions.createCar({newCar}))
        reset()
    }

    const update = async (updatedCar) => {
        await dispatch(carActions.updateCar({updatedCar, id:carForUpdate.id}))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : create)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate ? 'Update':'Create'}</button>
        </form>
    )
}

export{
    CarForm
}
