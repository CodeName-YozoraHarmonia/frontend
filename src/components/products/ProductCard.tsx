import React from 'react'

import Link from 'next/link'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

interface ProductCardProps {
    title: string
    image: string
    price: number
    oldPrice?: number
    slug: string
}

export default function ProductCard({
    title,
    image,
    price,
    oldPrice,
    slug,
}: ProductCardProps) {
    return (
        <Link
            href={`/products/${slug}`}
            passHref
            style={{ textDecoration: 'none' }}
        >
            <Card
                sx={{
                    width: { xs: 150, sm: 190, md: 220 },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'transform 0.25s, box-shadow 0.25s',
                    '&:hover': {
                        boxShadow: 5,
                        transform: 'translateY(-4px)',
                    },
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        aspectRatio: '1 / 1',
                        overflow: 'hidden',
                    }}
                >
                    <CardMedia
                        component="img"
                        image={image}
                        alt={title}
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </Box>

                <CardContent
                    sx={{
                        py: 1.2,
                        px: 1.5,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        flexGrow: 1,
                    }}
                >
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontSize: { xs: '0.9rem', sm: '1rem' },
                            fontWeight: 600,
                            lineHeight: 1.3,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            color: 'text.primary',
                            minHeight: '2.4em',
                        }}
                    >
                        {title}
                    </Typography>

                    <Box
                        sx={{
                            mt: 0.8,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                        }}
                    >
                        {oldPrice && oldPrice > price && (
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'text.secondary',
                                    textDecoration: 'line-through',
                                    fontSize: { xs: '0.85rem', sm: '0.9rem' },
                                }}
                            >
                                ${oldPrice}
                            </Typography>
                        )}

                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                color: oldPrice ? 'error.main' : 'primary.main',
                                fontSize: { xs: '1rem', sm: '1.1rem' },
                            }}
                        >
                            ${price}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Link>
    )
}
