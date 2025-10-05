'use client'

import { useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'

import CartSummary from '@/components/checkout/CartSummary'
import CustomerForm from '@/components/checkout/CustomerForm'
import ShippingPayment from '@/components/checkout/ShippingPayment'
import OrderReview from '@/components/checkout/OrderReview'

const steps = ['Carrito', 'Datos', 'Envío & Pago', 'Revisión']

export default function CheckoutPage() {
    const [activeStep, setActiveStep] = useState(0)

    const handleNext = () => setActiveStep((prev) => prev + 1)
    const handleBack = () => setActiveStep((prev) => prev - 1)

    return (
        <Container maxWidth="md" sx={{ py: 6 }} className="min-h-svh">
            <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <Box>
                {activeStep === 0 && <CartSummary />}
                {activeStep === 1 && <CustomerForm />}
                {activeStep === 2 && <ShippingPayment />}
                {activeStep === 3 && <OrderReview />}
            </Box>

            <Box display="flex" justifyContent="space-between" mt={4}>
                <Button disabled={activeStep === 0} onClick={handleBack}>
                    Atrás
                </Button>
                {activeStep < steps.length - 1 ? (
                    <Button variant="contained" onClick={handleNext}>
                        Siguiente
                    </Button>
                ) : (
                    <Button
                        variant="contained"
                        color="success"
                        href="/checkout/sucess"
                    >
                        Confirmar pedido
                    </Button>
                )}
            </Box>
        </Container>
    )
}
