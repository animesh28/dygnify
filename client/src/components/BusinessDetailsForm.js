import React from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
    TextField,
    ButtonGroup
} from '@mui/material'
import { setBusinessDetails } from '../store/businessDetails'
import { useSelector } from 'react-redux'

function BusinessDetailsForm({nextBtn, backBtn}) {
    let gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/
    //regex for gst validation

    let phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    //regex for phone no. validation

    let urlRegex = /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/
    //regex for url validation

    const businessData = useSelector(state => state.business)

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            ...businessData
        },
        validationSchema: Yup.object({
            bName: Yup.string()
            .required('Business Name is required'),
            
            gst: Yup.string()
            .matches(gstRegex, 'Enter a valid GST Number')
            .required('GST Number is required'),

            established: Yup.number()
            .positive('Enter a valid year')
            .required('Established on is required')
            .max(new Date().getFullYear()),

            bMobile: Yup.string()
            .matches(phoneRegExp, 'Enter a valid mobile number')
            .required('Mobile number is required'),

            email: Yup.string()
            .email('Enter a valid e-mail')
            .required('E-mail is required'),

            bAddress: Yup.string()
            .required('Address is required'),

            url: Yup.string()
            .matches(urlRegex, 'Enter a valid URL'),

            category: Yup.string()
            .required('Category is required'),
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
                name='bName'
                label='Business Name'
                variant='filled' color='secondary' InputLabelProps={{className: "textField_label"}}
                className='mx-10'
                {...formik.getFieldProps('bName')}
                {...errorHelper(formik,'bName')}
            />

            <TextField
                style={{width: '30%'}}
                name='gst'
                label='GST Number'
                variant='filled' color='secondary' InputLabelProps={{className: "textField_label"}}
                className='mx-10'
                {...formik.getFieldProps('gst')}
                {...errorHelper(formik,'gst')}
            />

            <TextField
                style={{width: '30%'}}
                name='established'
                label='Established on (YYYY)'
                variant='filled' color='secondary' InputLabelProps={{className: "textField_label"}}
                {...formik.getFieldProps('established')}
                {...errorHelper(formik,'established')}
            />
        </FormGroup>
        
        <FormGroup className='my-4'>
            <TextField
                style={{width: '63%'}}
                name='email'
                label='E-mail'
                variant='filled' color='secondary' InputLabelProps={{className: "textField_label"}}
                className='mx-7'
                {...formik.getFieldProps('email')}
                {...errorHelper(formik,'email')}
            />

            <TextField
                style={{width: '30%'}}  
                name='bMobile'
                label='Business Mobile Number'
                variant='filled' color='secondary' InputLabelProps={{className: "textField_label"}}
                className='mx-7'
                {...formik.getFieldProps('bMobile')}
                {...errorHelper(formik,'bMobile')}
            />
        </FormGroup>

        <FormGroup className='my-4'>
            <TextField
                style={{width: '63%'}}
                name='url'
                label='Website URL'
                variant='filled' color='secondary' InputLabelProps={{className: "textField_label"}}
                className='mx-7'
                {...formik.getFieldProps('url')}
                {...errorHelper(formik,'url')}
            />

            <TextField
                style={{width: '30%'}}  
                name='category'
                label='Business Category'
                variant='filled' color='secondary' InputLabelProps={{className: "textField_label"}}
                className='mx-7'
                {...formik.getFieldProps('category')}
                {...errorHelper(formik,'category')}
            />
        </FormGroup>

        <FormGroup className='my-4'>
            <TextField
                style={{width: '95%'}}
                name='bAddress'
                label='Business Address'
                variant='filled' color='secondary' InputLabelProps={{className: "textField_label"}}
                className='mx-7'
                {...formik.getFieldProps('bAddress')}
                {...errorHelper(formik,'bAddress')}
            />
        </FormGroup>
        { 
            formik.values.bName && !formik.errors.bName &&
            formik.values.gst && !formik.errors.gst &&
            formik.values.established && !formik.errors.established &&
            formik.values.email && !formik.errors.email &&
            formik.values.bMobile && !formik.errors.bMobile &&
            formik.values.url && !formik.errors.url &&
            formik.values.category && !formik.errors.category &&
            formik.values.bAddress && !formik.errors.bAddress 
            //all fields are filled and have no errors
         ?
            <ButtonGroup className='d-flex justify-content-center align-items-center'>
                { backBtn(formik, setBusinessDetails) }
                { nextBtn(formik, setBusinessDetails) } 
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
export default BusinessDetailsForm