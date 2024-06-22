import {configureStore} from '@reduxjs/toolkit'
import parkReducer from './parkSlice'

const store = configureStore({
    reducer: {
        park: parkReducer,
    },
})

export default store
