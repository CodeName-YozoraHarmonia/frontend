'use client'

import * as React from 'react'

import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'

import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import LoopIcon from '@mui/icons-material/Loop'
import PaymentIcon from '@mui/icons-material/Payment'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'

const faqData = [
    {
        label: 'Gift Card',
        icon: <CardGiftcardIcon />,
        questions: [
            { question: 'Lorem ipsum dolor 1', answer: 'Respuesta gift 1' },
            { question: 'Lorem ipsum dolor 2', answer: 'Respuesta gift 2' },
        ],
    },
    {
        label: 'Cambios y Devoluciones',
        icon: <LoopIcon />,
        questions: [
            { question: 'Lorem ipsum dolor 1', answer: 'Respuesta cambios 1' },
            { question: 'Lorem ipsum dolor 2', answer: 'Respuesta cambios 2' },
        ],
    },
    {
        label: 'Envio y Seguimiento',
        icon: <LocalShippingIcon />,
        questions: [
            { question: 'Lorem ipsum dolor 1', answer: 'Respuesta envío 1' },
            { question: 'Lorem ipsum dolor 2', answer: 'Respuesta envío 2' },
        ],
    },
    {
        label: 'Formas de Pago',
        icon: <PaymentIcon />,
        questions: [
            { question: 'Lorem ipsum dolor 1', answer: 'Respuesta pago 1' },
            { question: 'Lorem ipsum dolor 2', answer: 'Respuesta pago 2' },
        ],
    },
    {
        label: 'Consultas Generales',
        icon: <QuestionAnswerIcon />,
        questions: [
            { question: 'Lorem ipsum dolor 1', answer: 'Respuesta consulta 1' },
            { question: 'Lorem ipsum dolor 2', answer: 'Respuesta consulta 2' },
        ],
    },
]

function TabPanel({
    children,
    value,
    index,
}: {
    children: React.ReactNode
    value: number
    index: number
}) {
    return (
        <Box maxWidth="sm" mx="auto" hidden={value !== index} py={1}>
            {value === index && <Box>{children}</Box>}
        </Box>
    )
}

function FAQList({
    questions,
}: {
    questions: { question: string; answer: string }[]
}) {
    return (
        <Box>
            {questions.map((q, i) => (
                <Box key={i} mb={2}>
                    <Typography
                        component="span"
                        variant="subtitle1"
                        fontWeight="bold"
                        textTransform="uppercase"
                    >
                        {q.question}
                    </Typography>
                    <Typography variant="body2" display="block">
                        {q.answer}
                    </Typography>
                </Box>
            ))}
        </Box>
    )
}

export default function FAQPage() {
    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    return (
        <Container component="main" className="min-h-svh w-full min-w-xs py-4">
            <Typography
                component="h1"
                variant="h6"
                textAlign="center"
                gutterBottom
            >
                Preguntas Frecuentes
            </Typography>

            <Box display={{ md: 'none' }}>
                {faqData.map((section, idx) => (
                    <Accordion key={idx}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Box display="flex" alignItems="center" gap={1}>
                                {section.icon}
                                <Typography component="span">
                                    {section.label}
                                </Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FAQList questions={section.questions} />
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>

            <Box display={{ xs: 'none', md: 'block' }}>
                <Tabs value={value} onChange={handleChange} centered>
                    {faqData.map((section, idx) => (
                        <Tab
                            key={idx}
                            icon={section.icon}
                            label={section.label}
                        />
                    ))}
                </Tabs>
                {faqData.map((section, idx) => (
                    <TabPanel key={idx} value={value} index={idx}>
                        <FAQList questions={section.questions} />
                    </TabPanel>
                ))}
            </Box>
        </Container>
    )
}
