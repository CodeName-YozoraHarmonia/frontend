import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

export default function RegretPage() {
    return (
        <Container component="main" className="min-h-svh w-full min-w-xs py-4">
            <Box
                component="section"
                display="flex"
                flexDirection="column"
                alignItems="center"
            >
                <Typography
                    component="h1"
                    variant="h6"
                    textAlign="center"
                    mb={2}
                >
                    Arrepentimiento de compra
                </Typography>

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
                        id="dni-order"
                        variant="outlined"
                        label="Numero de Pedido o DNI"
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
