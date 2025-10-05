'use client'

import { useEffect, useState, useCallback } from 'react'

import Image from 'next/image'

import Box from '@mui/material/Box'

import useEmblaCarousel from 'embla-carousel-react'

interface HeroCarouselProps {
    images: string[]
}

export default function HeroCarousel({ images }: HeroCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [selectedIndex, setSelectedIndex] = useState(0)

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])

    return (
        <Box
            ref={emblaRef}
            sx={{
                width: '100%',
                overflow: 'hidden',
                position: 'relative',
                height: { xs: '100svh', md: 'auto' },
                aspectRatio: { md: '16/9' },
            }}
        >
            <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
                {images.map((src, i) => (
                    <Box
                        key={i}
                        sx={{
                            flex: '0 0 100%',
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <Image
                            src={src}
                            alt={`Slide ${i + 1}`}
                            fill
                            priority={i === 0}
                            sizes="100vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </Box>
                ))}
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    bottom: 12,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: 1.5,
                    px: 1.5,
                    py: 0.5,
                    borderRadius: '9999px',
                    bgcolor: 'rgba(0,0,0,0.4)',
                    backdropFilter: 'blur(6px)',
                }}
            >
                {images.map((_, i) => (
                    <Box
                        key={i}
                        onClick={() => emblaApi?.scrollTo(i)}
                        sx={{
                            width: 14,
                            height: 14,
                            borderRadius: '50%',
                            cursor: 'pointer',
                            bgcolor:
                                i === selectedIndex
                                    ? 'common.white'
                                    : 'rgba(255,255,255,0.5)',
                            transition: 'transform 0.3s ease',
                            '&:hover': { transform: 'scale(1.2)' },
                        }}
                    />
                ))}
            </Box>
        </Box>
    )
}
