import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    fName: '',
    mName: '',
    lName: '',
    gender: '',
    age: '',
    mobile: '',
    aadhar: '',
    pan: '',
    income: '',
    address: '',
}

const personalDetailsSlice = createSlice({
    name: 'personal',
    initialState,
    reducers: {
        setPersonalDetails: (state, action) => {
            state.fName = action.payload.fName
            state.mName = action.payload.mName
            state.lName = action.payload.lName
            state.gender = action.payload.gender
            state.age = action.payload.age
            state.mobile = action.payload.mobile
            state.aadhar = action.payload.aadhar
            state.pan = action.payload.pan
            state.income = action.payload.income
            state.address = action.payload.address
        }
    }
})

export const { setPersonalDetails } = personalDetailsSlice.actions

export default personalDetailsSlice.reducer