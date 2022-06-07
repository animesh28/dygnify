import React, { useState } from 'react';
import PersonalDetailsForm from './PersonalDetailsForm';
import {
    Button,
    Box,
    Stepper,
    Step,
    StepLabel
    
} from '@mui/material'
import BusinessDetailsForm from './BusinessDetailsForm';
import { useDispatch, useSelector } from 'react-redux';
import LoanDetailsForm from './LoanDetailsForm';
import { setAllDetails } from '../store/upload';
import {addNewDetails} from '../store/upload'
import styled from 'styled-components'

const steps = [
  'Personal Details',
  'Business Details',
  'Loan Application Details',
];

const SubmitWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function MyStepper() {

  let loanDetails = useSelector(state => state.loan)
  let personalDetails = useSelector(state => state.personal)
  let businessDetails = useSelector(state => state.business)
  let allDetails = {...personalDetails, ...businessDetails, ...loanDetails}

    const [activeStep, setActiveStep] = useState(0)
    const dispatch = useDispatch()

    const handleNext = (formik, handler) => {
        dispatch(
            handler({...formik.values})
        )
        setActiveStep((prevActiveStep) => prevActiveStep+1)
        allDetails = {...personalDetails, ...businessDetails, ...loanDetails}
        dispatch(setAllDetails(allDetails))
    }

    const handleBack = (formik, handler) => {
        dispatch(
            handler({...formik.values})
        )
        setActiveStep((prevActiveStep) => prevActiveStep-1)
        allDetails = {...personalDetails, ...businessDetails, ...loanDetails}
        dispatch(setAllDetails(allDetails))
    }

    const handleSubmit = () => {
        allDetails = {...personalDetails, ...businessDetails, ...loanDetails}
        dispatch(addNewDetails(allDetails)).unwrap()
    }

    const nextBtn = (formik, handler) => (
        <Button className='mt-3' variant='contained' color='primary' onClick={() => handleNext(formik, handler)} style={{
                width: '15vw',
                padding: '10px 0',
                borderRadius: '25px',
                marginLeft: '2vw'
        }}>
            Next
        </Button>
        )

    const backBtn = (formik, handler) => (
        <Button className='mt-3' variant='contained' color='primary' onClick={() => handleBack(formik, handler)} style={{
                width: '15vw',
                padding: '10px 0',
                borderRadius: '25px'
        }}>
            Back
        </Button>
    )
    

  return (
    <Box sx={{ width: '100%' }} className='container'>
      <Stepper activeStep={activeStep} alternativeLabel className='mt-5'>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {
          activeStep === 0 ?
            <PersonalDetailsForm 
                step={activeStep} 
                handleNext={handleNext} 
                handleBack={handleBack} 
                nextBtn={nextBtn}
            /> : null
      }
      {
          activeStep === 1 ?
            <BusinessDetailsForm 
                step={activeStep} 
                handleNext={handleNext} 
                handleBack={handleBack} 
                nextBtn={nextBtn}
                backBtn={backBtn}
            /> : null
      }
      {
          activeStep === 2 ?
            <LoanDetailsForm 
                step={activeStep} 
                handleNext={handleNext} 
                handleBack={handleBack} 
                nextBtn={nextBtn}
                backBtn={backBtn}
            /> : null
      }

      {
          activeStep === 3 ?
          <SubmitWrap>
            <Button className='mt-3 mx-3' variant='contained' color='primary' onClick={() => setActiveStep((prevActiveStep) => prevActiveStep-1)} style={{
                width: '15vw',
                padding: '10px 0',
                borderRadius: '25px'
            }}>
                Back
            </Button>

            <Button onClick={handleSubmit} className='mt-3 mx-3' variant='contained' color='primary' style={{
              width: '15vw',
              padding: '10px 0',
              borderRadius: '25px'
            }}>
              Submit
            </Button>
          </SubmitWrap>: null
      }
    </Box>
  );
}
