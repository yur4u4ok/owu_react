import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../../services";

const initialState = {
    posts: [],
    error: null,
    loading: false,
    selectedPost: null
}

const getAll = createAsyncThunk(
    'postSlice/setAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await postService.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        setSelectedPost: (state, action) => {
            state.selectedPost = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.posts = action.payload;
            })
});

const {reducer: postReducer, actions: {setSelectedPost}} = postSlice

const postActions = {
    setSelectedPost,
    getAll
}

export {
    postReducer,
    postActions
}
