import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
    TextField,
    ButtonGroup
} from '@mui/material'
import { setPersonalDetails } from '../store/personalDetails'

function PersonalDetailsForm({activeStep, handleNext, handleBack, nextBtn}) {

    let personalDetails = useSelector(state => state.personal)

    let phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    //regex for phone no. validation

    let panRegex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/
    //regex for pan no. validation

    let aadharRegex = /^\d{4}\s\d{4}\s\d{4}$/
    //regex for aadhar no. validation
    

    const formik = useFormik({
        initialValues: {
            ...personalDetails
        },
        validationSchema: Yup.object({
            fName: Yup.string()
            .required('First Name is required'),
            
            mName: Yup.string(),

            lName: Yup.string()
            .required('Last Name is required'),
            
            age: Yup.number()
            .required('Age is required')
            .positive('Enter a valid age')
            .integer('Enter a valid age')
            .moreThan(17, 'Not eligibile if under 18'),
            
            mobile: Yup.string()
            .matches(phoneRegExp, 'Enter a valid mobile number')
            .required('Mobile No is required'),

            gender: Yup.string()
            .required('Gender is required'),

            aadhar: Yup.string()
            .matches(aadharRegex, 'Format: 2222 1111 3333')
            .required('Aadhar Number is required'),

            pan: Yup.string()
            .matches(panRegex, 'Enter valid Pan Number')
            .required('Pan Number is required'),

            income: Yup.number()
            .required('Annual Income is required'),

            address: Yup.string()
            .required('Addres is required')
        }),
        onSubmit: (values, {resetForm}) => {
            console.log(values);
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
                name='fName'
                label='First Name'
                variant='filled' color='secondary' InputLabelProps={{className: "textField_label"}}
                className='mx-10'
                {...formik.getFieldProps('fName')}
                {...errorHelper(formik,'fName')}
            />

            <TextField
                style={{width: '30%'}}
                name='mName'
                label='Middle Name'
                variant='filled' color='secondary' InputLabelProps={{className: "textField_label"}}
                className='mx-10'
                {...formik.getFieldProps('mName')}
                {...errorHelper(formik,'mName')}
            />

            <TextField
                style={{width: '30%'}}
                name='lName'
                label='Last Name'
                variant='filled' color='secondary' InputLabelProps={{className: "textField_label"}}
                {...formik.getFieldProps('lName')}
                {...errorHelper(formik,'lName')}
            />
        </FormGroup>
        
        <FormGroup className='my-4'>
            <TextField
                style={{width: '30%'}}
                name='gender'
                label='Gender'
                variant='filled' color='secondary' InputLabelProps={{className: "textField_label"}}
                className='mx-7'
                {...formik.getFieldProps('gender')}
                {...errorHelper(formik,'gender')}
            />

            <TextField
                style={{width: '30%'}}
                name='age'
                label='Age'
                variant='filled' color='secondary' InputLabelProps={{className: "textField_label"}}
                className='mx-7'
                {...formik.getFieldProps('age')}
                {...errorHelper(formik,'age')}
            />

            <TextField
                style={{width: '30%'}}  
                name='mobile'
                label='Mobile Number'
                variant='filled' color='secondary' InputLabelProps={{className: "textField_label"}}
                className='mx-7'
                {...formik.getFieldProps('mobile')}
                {...errorHelper(formik,'mobile')}
            />
        </FormGroup>

        <FormGroup className='my-4'>
            <TextField
                style={{width: '30%'}}
                name='aadhar'
                label='Aadhar Number (UAID)'
                variant='filled' color='secondary' InputLabelProps={{className: "textField_label"}}
                className='mx-7'
                {...formik.getFieldProps('aadhar')}
                {...errorHelper(formik,'aadhar')}
            />

            <TextField
                style={{width: '30%'}}
                name='pan'
                label='Pan Number'
                variant='filled' color='secondary' InputLabelProps={{className: "textField_label"}}
                className='mx-7'
                {...formik.getFieldProps('pan')}
                {...errorHelper(formik,'pan')}
            />

            <TextField
                style={{width: '30%'}}  
                name='income'
                label='Annual Income'
                variant='filled' color='secondary' InputLabelProps={{className: "textField_label"}}
                className='mx-7'
                {...formik.getFieldProps('income')}
                {...errorHelper(formik,'income')}
            />
        </FormGroup>

        <FormGroup className='my-4'>
            <TextField
                style={{width: '95%'}}
                name='address'
                label='Resident Address'
                variant='filled' color='secondary' InputLabelProps={{className: "textField_label"}}
                className='mx-7'
                {...formik.getFieldProps('address')}
                {...errorHelper(formik,'address')}
            />
        </FormGroup>
        { 
            formik.values.fName && !formik.errors.fName &&
            formik.values.mName && !formik.errors.mName &&
            formik.values.lName && !formik.errors.lName &&
            formik.values.age && !formik.errors.age &&
            formik.values.mobile && !formik.errors.mobile &&
            formik.values.gender && !formik.errors.gender&&
            formik.values.address && !formik.errors.address &&
            formik.values.aadhar && !formik.errors.aadhar &&
            formik.values.pan && !formik.errors.pan &&
            formik.values.income && !formik.errors.income
            //all fields are filled and have no errors
         ?
            <ButtonGroup className='d-flex justify-content-center align-items-center'>
                { nextBtn(formik, setPersonalDetails) }
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
export default PersonalDetailsForm