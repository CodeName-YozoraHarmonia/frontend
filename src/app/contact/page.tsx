import Link from 'next/link'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import CallIcon from '@mui/icons-material/Call'
import EmailIcon from '@mui/icons-material/Email'
import PlaceIcon from '@mui/icons-material/Place'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

const contactLinks = [
    {
        href: 'https://wa.me/123456789',
        icon: WhatsAppIcon,
        label: '+54123456789',
    },
    {
        href: 'tel:+54123456789',
        icon: CallIcon,
        label: '+54123456789',
    },
    {
        href: 'mailto:ejemplo@email.com',
        icon: EmailIcon,
        label: 'ejemplo@email.com',
    },
    {
        href: 'https://goo.gl/maps/xxxx',
        icon: PlaceIcon,
        label: 'Calle 1234, Ciudad, Provincia.',
    },
]

export default function ContactPage() {
    return (
        <Container component="main" className="min-h-svh w-full min-w-xs py-4">
            <Typography component="h1" variant="h5" textAlign="center" mb={2}>
                Contacto
            </Typography>
            <Box
                component="section"
                display="flex"
                flexDirection={{ xs: 'column', md: 'row' }}
                justifyContent="center"
                gap={2}
            >
                <Box
                    component="address"
                    display="flex"
                    flexDirection="column"
                    gap={2}
                    width={{ md: '30%' }}
                >
                    {contactLinks.map(({ href, icon: Icon, label }, index) => (
                        <Link key={index} href={href} target="_blank">
                            <Box display="flex" alignItems="center" gap={1}>
                                <Icon />
                                <Typography component="span">
                                    {label}
                                </Typography>
                            </Box>
                        </Link>
                    ))}
                </Box>

                <Box
                    component="form"
                    display="flex"
                    flexDirection="column"
                    width={{ md: '50%' }}
                    maxWidth="md"
                    gap={2}
                >
                    <TextField
                        id="name"
                        variant="outlined"
                        label="Nombre"
                        fullWidth
                    />
                    <TextField
                        id="email"
                        variant="outlined"
                        label="Email"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        id="telphone"
                        variant="outlined"
                        label="Teléfono"
                        type="tel"
                        fullWidth
                    />
                    <TextField
                        id="message"
                        variant="outlined"
                        label="Mensaje"
                        multiline
                        rows={4}
                    />

                    <Button variant="contained" size="large" type="submit">
                        Enviar
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}
