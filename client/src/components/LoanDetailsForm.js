import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
    TextField,
    ButtonGroup
} from '@mui/material'
import { setLoanDetails } from '../store/loanDetails'
import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json'

function LoanDetailsForm({activeStep, handleNext, handleBack, nextBtn, backBtn}) {

    let loanDetails = useSelector(state => state.loan)
    let personalDetails = useSelector(state => state.personal)
    let businessDetails = useSelector(state => state.business)

    let allDetails = {...personalDetails, ...businessDetails, ...loanDetails}
    
    let accountRegex = /^\d{9,18}$/
    //regex for account No validation

    let ifscRegex = /^[^\s]{4}\d{7}$/
    //regex for IFSC validation

    const formik = useFormik({
        initialValues: {
            ...loanDetails
        },
        validationSchema: Yup.object({
            amount: Yup.number()
            .positive('Enter a valid amount')
            .required('Amount is required'),
            
            tenure: Yup.number()
            .positive('Enter a valid year')
            .required('Tenure is required'),

            interest: Yup.number()
            .positive('Enter a valid interest rate')
            .required('Interest rate is required'),

            loanType: Yup.string()
            .required('Loan Type is required'),

            accountNo: Yup.string()
            .matches(accountRegex, 'Enter a valid account number')
            .required('Account Number is required'),

            ifsc: Yup.string()
            .matches(ifscRegex, 'Enter a valid IFSC code')
            .required('IFSC code is required'),

            branch: Yup.string()
            .required('Branch Address is required')
        }),
        onSubmit: (values, {resetForm}) => {
            console.log(allDetails);
        }
    })

    const errorHelper = (formik, values) => {
        return({
            error: formik.errors[values] && formik.touched[values] ? true : false,
            helperText: formik.errors[values] && formik.touched[values] ? formik.errors[values] : null
        })
    }

  return (
    <Form>
        <FormGroup className='my-4'>
            <TextField
                style={{width: '30%'}}
                name='amount'
                label='Amount'
                variant='filled' color='secondary' InputLabelProps={{className: "textField_label"}}
                className='mx-10'
                {...formik.getFieldProps('amount')}
                {...errorHelper(formik,'amount')}
            />

            <TextField
                style={{width: '30%'}}
                name='tenure'
                label='Tenure (in yrs.)'
                variant='filled' color='secondary' InputLabelProps={{className: "textField_label"}}
                className='mx-10'
                {...formik.getFieldProps('tenure')}
                {...errorHelper(formik,'tenure')}
            />

            <TextField
                style={{width: '30%'}}
                name='interest'
                label='Interest'
                variant='filled' color='secondary' InputLabelProps={{className: "textField_label"}}
                {...formik.getFieldProps('interest')}
                {...errorHelper(formik,'interest')}
            />
        </FormGroup>

        <FormGroup className='my-4'>
            <TextField
                style={{width: '30%'}}
                name='loanType'
                label='Loan Type'
                variant='filled' color='secondary' InputLabelProps={{className: "textField_label"}}
                className='mx-7'
                {...formik.getFieldProps('loanType')}
                {...errorHelper(formik,'loanType')}
            />

            <TextField
                style={{width: '30%'}}
                name='accountNo'
                label='Account Number'
                variant='filled' color='secondary' InputLabelProps={{className: "textField_label"}}
                className='mx-7'
                {...formik.getFieldProps('accountNo')}
                {...errorHelper(formik,'accountNo')}
            />

            <TextField
                style={{width: '30%'}}  
                name='ifsc'
                label='IFSC Code'
                variant='filled' color='secondary' InputLabelProps={{className: "textField_label"}}
                className='mx-7'
                {...formik.getFieldProps('ifsc')}
                {...errorHelper(formik,'ifsc')}
            />
        </FormGroup>

        <FormGroup className='my-4'>
            <TextField
                style={{width: '95%'}}
                name='branch'
                label='Branch Address'
                variant='filled' color='secondary' InputLabelProps={{className: "textField_label"}}
                className='mx-7'
                {...formik.getFieldProps('branch')}
                {...errorHelper(formik,'branch')}
            />
        </FormGroup>
        { 
            formik.values.amount && !formik.errors.amount &&
            formik.values.tenure && !formik.errors.tenure &&
            formik.values.interest && !formik.errors.interest &&
            formik.values.loanType && !formik.errors.loanType &&
            formik.values.accountNo && !formik.errors.accountNo &&
            formik.values.ifsc && !formik.errors.ifsc&&
            formik.values.branch && !formik.errors.branch
            //all fields are filled and have no errors
         ?
            <ButtonGroup className='d-flex justify-content-center align-items-center'>
                { backBtn(formik, setLoanDetails) }
                { nextBtn(formik, setLoanDetails) }
            </ButtonGroup>
            :null
        }
        
    </Form>
  )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    padding: 0 15rem;
`

const FormGroup = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
`
export default LoanDetailsForm