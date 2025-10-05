import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export default function OrderReview() {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6">Revisión del pedido</Typography>
                <Typography>📦 Productos: 3</Typography>
                <Typography>💰 Total: $2500</Typography>
                <Typography>🚚 Envío: Estándar</Typography>
                <Typography>💳 Pago: Tarjeta de crédito</Typography>
            </CardContent>
        </Card>
    )
}
