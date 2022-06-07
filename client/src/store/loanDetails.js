import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    amount: '',
    tenure: '',
    interest: '',
    loanType: '',
    accountNo: '',
    ifsc: '',
    branch: ''
}

const loanDetailsSlice = createSlice({
    name: 'loan',
    initialState,
    reducers: {
        setLoanDetails: (state, action) => {
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

export const { setLoanDetails } = loanDetailsSlice.actions

export default loanDetailsSlice.reducer