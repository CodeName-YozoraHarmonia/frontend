import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Typography from '@mui/material/Typography'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'

export default function ShippingPayment() {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Método de Envío
                </Typography>
                <FormControl>
                    <RadioGroup defaultValue="standard">
                        <FormControlLabel
                            value="standard"
                            control={<Radio />}
                            label="Envío estándar (3-5 días)"
                        />
                        <FormControlLabel
                            value="express"
                            control={<Radio />}
                            label="Envío express (24-48h)"
                        />
                    </RadioGroup>
                </FormControl>

                <Typography variant="h6" gutterBottom mt={3}>
                    Método de Pago
                </Typography>
                <FormControl>
                    <RadioGroup defaultValue="card">
                        <FormControlLabel
                            value="card"
                            control={<Radio />}
                            label="Tarjeta de crédito"
                        />
                        <FormControlLabel
                            value="paypal"
                            control={<Radio />}
                            label="PayPal"
                        />
                        <FormControlLabel
                            value="cash"
                            control={<Radio />}
                            label="Pago contra entrega"
                        />
                    </RadioGroup>
                </FormControl>
            </CardContent>
        </Card>
    )
}
