import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import personalReducer from './personalDetails'
import businessReducer from './businessDetails'
import loanReducer from './loanDetails'
import allReducer from './upload'

export default configureStore({
    reducer: {
        personal: personalReducer,
        business: businessReducer,
        loan: loanReducer,
        all: allReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
})