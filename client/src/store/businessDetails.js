import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    bName: '',
    gst: '',
    established: '',
    email: '',
    bMobile: '',
    url: '',
    category: '',
    bAddress: '',
}

const businessDetailsSlice = createSlice({
    name: 'business',
    initialState,
    reducers: {
        setBusinessDetails: (state, action) => {
            state.bName = action.payload.bName
            state.gst = action.payload.gst
            state.established = action.payload.established
            state.email = action.payload.email
            state.bMobile = action.payload.bMobile
            state.url = action.payload.url
            state.category = action.payload.category
            state.bAddress = action.payload.bAddress
        }
    }
})

export const { setBusinessDetails } = businessDetailsSlice.actions

export default businessDetailsSlice.reducer