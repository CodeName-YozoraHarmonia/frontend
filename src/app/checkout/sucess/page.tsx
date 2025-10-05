'use client'

import Link from 'next/link'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

export default function CheckoutSuccess() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="80vh"
            p={2}
        >
            <Card sx={{ maxWidth: 500, textAlign: 'center', p: 3 }}>
                <CardContent>
                    <CheckCircleOutlineIcon
                        color="success"
                        sx={{ fontSize: 60, mb: 2 }}
                    />
                    <Typography variant="h5" gutterBottom>
                        ¡Gracias por tu compra!
                    </Typography>
                    <Typography
                        variant="body1"
                        color="textSecondary"
                        gutterBottom
                    >
                        Tu pedido ha sido recibido y está siendo procesado.
                    </Typography>

                    <Typography variant="subtitle1" mt={2}>
                        Número de pedido: #123456
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Se enviará un correo con los detalles de tu compra.
                    </Typography>

                    <Box mt={4}>
                        <Link href="/">
                            <Button variant="contained" color="primary">
                                Volver a la tienda
                            </Button>
                        </Link>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}
