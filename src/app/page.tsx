import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import HeroCarousel from '@/components/index/HeroCarousel'
import ReusableCarousel from '@/components/index/ProductCarousel'
import ProductCard from '@/components/products/ProductCard'

const entity = 'e-comerce'

export default function Home() {
    const heroImages = [
        '/placeholder/kirby-placeholder-4.webp',
        '/placeholder/kirby-placeholder-5.webp',
        '/placeholder/kirby-placeholder-6.webp',
    ]

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

    return (
        <Container
            component="main"
            disableGutters
            className="min-h-svh w-full min-w-xs pb-4"
        >
            <Box component="section">
                <Typography component="h1" className="sr-only">
                    {entity}
                </Typography>
                <HeroCarousel images={heroImages} />
            </Box>

            <Box component="section" my={2} mx={1.5}>
                <Typography component="h2" variant="h6" gutterBottom>
                    Nuevos Productos
                </Typography>
                <ReusableCarousel speed={0.8}>
                    {products.map((p) => (
                        <ProductCard key={p.slug} {...p} />
                    ))}
                </ReusableCarousel>
            </Box>

            <Box component="section" my={2} mx={1.5}>
                <Typography component="h2" variant="h6" gutterBottom>
                    Los más Vendidos
                </Typography>
                <ReusableCarousel speed={0.7}>
                    {products.map((p) => (
                        <ProductCard key={p.slug} {...p} />
                    ))}
                </ReusableCarousel>
            </Box>

            <Box component="section" my={2} mx={1.5}>
                <Typography component="h2" variant="h6" gutterBottom>
                    Ofertas Destacadas
                </Typography>
                <ReusableCarousel speed={0.6}>
                    {products.map((p) => (
                        <ProductCard key={p.slug} {...p} />
                    ))}
                </ReusableCarousel>
            </Box>
        </Container>
    )
}
