import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import { toast } from 'react-toastify';

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
    bName: '',
    gst: '',
    established: '',
    email: '',
    bMobile: '',
    url: '',
    category: '',
    bAddress: '',
    amount: '',
    tenure: '',
    interest: '',
    loanType: '',
    accountNo: '',
    ifsc: '',
    branch: ''
}

export const addNewDetails = createAsyncThunk('details/store', async (initialState) => {
    try {
        const resp = await axios.post('https://dygnify-server.herokuapp.com/api/details/store', initialState)
        console.log(resp.data);
        toast.success('Application Uploaded', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        return resp.data
    } catch(error) {
        toast.error('🦄 Wow so easy!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        return error.message  
    }
})

const allDetailsSlice = createSlice({
    name: 'all',
    initialState,
    reducers: {
        setAllDetails: (state, action) => {
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
            state.bName = action.payload.bName
            state.gst = action.payload.gst
            state.established = action.payload.established
            state.email = action.payload.email
            state.bMobile = action.payload.bMobile
            state.url = action.payload.url
            state.category = action.payload.category
            state.bAddress = action.payload.bAddress
            state.amount = action.payload.amount
            state.tenure = action.payload.tenure
            state.interest = action.payload.interest
            state.loanType = action.payload.loanType
            state.accountNo = action.payload.accountNo
            state.ifsc = action.payload.ifsc
            state.branch = action.payload.branch
        }
    }
})

export const { setAllDetails } = allDetailsSlice.actions

export default allDetailsSlice.reducer