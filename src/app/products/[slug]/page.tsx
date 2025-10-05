'use client'
import * as React from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Snackbar from '@mui/material/Snackbar'
import Typography from '@mui/material/Typography'

import ProductPageCarousel from '@/components/products/product-page/ProductPageCarousel'

export default function ProductPage() {
    const [formValues, setFormValues] = React.useState({
        color: '',
        talla: '',
        material: '',
        cantidad: '1',
    })

    const [snackbarOpen, setSnackbarOpen] = React.useState(false)

    const handleChange = (field: string) => (event: SelectChangeEvent) => {
        setFormValues((prev) => ({
            ...prev,
            [field]: event.target.value,
        }))
    }

    const handleAddToCart = () => {
        setSnackbarOpen(true)
    }

    const handleSnackbarClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === 'clickaway') return
        setSnackbarOpen(false)
    }

    const productImages = [
        '/placeholder/kirby-placeholder-1.webp',
        '/placeholder/kirby-placeholder-2.webp',
        '/placeholder/kirby-placeholder-3.webp',
    ]

    const variantOptions = {
        Color: ['Rojo', 'Azul', 'Verde'],
        Talle: ['S', 'M', 'L'],
        Material: ['Algodón', 'Poliéster', 'Lana'],
    }

    return (
        <Container component="main" className="min-h-svh w-full min-w-xs py-4">
            <Box display="flex" flexDirection="column" alignItems="center">
                <Box
                    display="flex"
                    flexDirection={{ xs: 'column', md: 'row' }}
                    mb={2}
                    gap={2}
                    width="100%"
                >
                    <Box
                        display="flex"
                        justifyContent="center"
                        width={{ xs: '100%', md: '50%' }}
                    >
                        <Box
                            width={{ xs: '100%', sm: '85%', md: '100%' }}
                            className="aspect-square"
                        >
                            <ProductPageCarousel images={productImages} />
                        </Box>
                    </Box>

                    <Box
                        display="flex"
                        flexDirection="column"
                        width={{ xs: '100%', md: '50%' }}
                    >
                        <Box width="100%" mb={2} textAlign="start">
                            <Typography component="h1" variant="h4">
                                Nombre del Producto
                            </Typography>
                            <Typography component="span" variant="h4">
                                $300
                            </Typography>
                        </Box>

                        <Box
                            display="flex"
                            flexDirection="column"
                            component="form"
                            gap={2}
                            width="100%"
                        >
                            <Box
                                display="flex"
                                flexWrap="wrap"
                                gap={2}
                                width="90%"
                            >
                                {Object.entries(variantOptions).map(
                                    ([field, options]) => (
                                        <FormControl
                                            key={field}
                                            fullWidth
                                            variant="outlined"
                                            className="w-full md:w-9/20"
                                        >
                                            <InputLabel id={`${field}-label`}>
                                                {field}
                                            </InputLabel>
                                            <Select
                                                labelId={`${field}-label`}
                                                id={`${field}-select`}
                                                value={
                                                    formValues[
                                                        field as keyof typeof formValues
                                                    ] || ''
                                                }
                                                onChange={handleChange(field)}
                                                label={field}
                                            >
                                                {options.map((opt) => (
                                                    <MenuItem
                                                        key={opt}
                                                        value={opt}
                                                    >
                                                        {opt}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    )
                                )}
                                <FormControl
                                    fullWidth
                                    variant="outlined"
                                    className="w-full md:w-9/20"
                                >
                                    <InputLabel id="cantidad-label">
                                        Cantidad
                                    </InputLabel>
                                    <Select
                                        labelId="cantidad-label"
                                        id="cantidad-select"
                                        value={formValues.cantidad}
                                        onChange={handleChange('cantidad')}
                                        label="Cantidad"
                                    >
                                        <MenuItem value="1">1</MenuItem>
                                        <MenuItem value="2">2</MenuItem>
                                        <MenuItem value="3">3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>

                            <Button variant="contained" className="md:w-9/10">
                                Comprar Ahora
                            </Button>
                            <Button
                                variant="outlined"
                                className="md:w-9/10"
                                onClick={handleAddToCart}
                            >
                                Agregar al Carrito
                            </Button>
                        </Box>
                    </Box>
                </Box>

                <Box>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit...
                    </Typography>
                </Box>
            </Box>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                message="Producto añadido al carrito"
                color="success"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            />
        </Container>
    )
}
