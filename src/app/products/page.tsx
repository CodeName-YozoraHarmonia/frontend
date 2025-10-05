import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import ProductCard from '@/components/products/ProductCard'

const products = [
    {
        title: 'Producto 1',
        image: '/placeholder/kirby-placeholder-1.webp',
        price: 100,
        slug: 'producto-1',
    },
    {
        title: 'Producto 2',
        image: '/placeholder/kirby-placeholder-2.webp',
        price: 200,
        oldPrice: 250,
        slug: 'producto-2',
    },
    {
        title: 'Producto 3',
        image: '/placeholder/kirby-placeholder-3.webp',
        price: 300,
        slug: 'producto-3',
    },
    {
        title: 'Producto 4',
        image: '/placeholder/kirby-placeholder-1.webp',
        price: 350,
        oldPrice: 400,
        slug: 'producto-4',
    },
    {
        title: 'Producto 5',
        image: '/placeholder/kirby-placeholder-2.webp',
        price: 500,
        slug: 'producto-5',
    },
    {
        title: 'Producto 6',
        image: '/placeholder/kirby-placeholder-3.webp',
        price: 550,
        oldPrice: 600,
        slug: 'producto-6',
    },
    {
        title: 'Producto 7',
        image: '/placeholder/kirby-placeholder-1.webp',
        price: 700,
        slug: 'producto-7',
    },
    {
        title: 'Producto 8',
        image: '/placeholder/kirby-placeholder-2.webp',
        price: 800,
        oldPrice: 1000,
        slug: 'producto-8',
    },
    {
        title: 'Producto 9',
        image: '/placeholder/kirby-placeholder-3.webp',
        price: 900,
        slug: 'producto-9',
    },
]

export default function ProductsPage() {
    return (
        <Container component="main" className="min-h-svh w-full min-w-xs py-4">
            <Box display="flex" flexDirection="column" alignItems="center">
                <Typography
                    component="h1"
                    variant="h6"
                    textAlign="center"
                    gutterBottom
                >
                    Todos los Productos
                </Typography>

                <Box
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                    gap={2}
                >
                    {products.map((product, index) => (
                        <Box key={index} display="flex" justifyContent="center">
                            <ProductCard {...product} />
                        </Box>
                    ))}
                </Box>
            </Box>
        </Container>
    )
}
