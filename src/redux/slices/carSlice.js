import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    prev: null,
    next: null,
    carForUpdate: null,
    errors: null,
    loading: false
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await carService.getAll(page)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({newCar}, thunkAPI) => {
        try {
            await carService.create(newCar);
            thunkAPI.dispatch(getAll({}))
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const deleteCar = createAsyncThunk(
    'carSplice/deleteCar',
    async ({id}, thunkAPI) => {
        try {
            await carService.deleteById(id)
            thunkAPI.dispatch(getAll({}))
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const updateCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({updatedCar, id}, thunkAPI) => {
        try {
            await carService.updateById(id, updatedCar)
            thunkAPI.dispatch(getAll({}))
        }
        catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {prev, next, items} = action.payload
                state.cars = items
                state.prev = prev
                state.next = next
                state.loading = false
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getAll.rejected, (state, action) => {
                state.loading = false
            })

            .addCase(deleteCar.pending, (state, action) => {
                state.loading = true
            })
            .addCase(deleteCar.rejected, (state, action) => {
                state.loading = false
            })

            .addCase(createCar.pending, (state, action) => {
                state.loading = true
            })
            .addCase(createCar.rejected, (state, action) => {
                state.loading = false
            })

            .addCase(updateCar.pending, (state, action) => {
                state.loading = true
            })
            .addCase(updateCar.rejected, (state, action) => {
                state.loading = false
            })
})

const {reducer: carReducer, actions:{setCarForUpdate}} = carSlice

const carActions = {
    getAll,
    createCar,
    deleteCar,
    setCarForUpdate,
    updateCar
}

export {
    carReducer,
    carActions
}
