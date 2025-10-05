import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

export default function CustomerForm() {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Datos del comprador
                </Typography>
                <Box display="flex" flexDirection="column" gap={2}>
                    <TextField label="Nombre completo" fullWidth />
                    <TextField label="Email" fullWidth />
                    <TextField label="Teléfono" fullWidth />
                    <TextField label="Dirección" fullWidth />
                    <TextField label="Ciudad" fullWidth />
                    <TextField label="Código Postal" fullWidth />
                </Box>
            </CardContent>
        </Card>
    )
}
