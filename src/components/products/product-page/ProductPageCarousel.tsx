'use client'

import { useEffect, useState, useCallback } from 'react'

import Image from 'next/image'

import Box from '@mui/material/Box'

import useEmblaCarousel from 'embla-carousel-react'

interface EmblaCarouselProps {
    images: string[]
}

export default function ProductPageCarousel({ images }: EmblaCarouselProps) {
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
        <Box className="relative flex size-full flex-col">
            <Box
                ref={emblaRef}
                className="relative w-full grow overflow-hidden"
            >
                <Box display="flex" className="h-full">
                    {images.map((src, i) => (
                        <Box
                            key={i}
                            flex="0 0 100%"
                            className="relative size-full"
                        >
                            <Image
                                src={src}
                                alt={`Producto ${i + 1}`}
                                fill
                                className="object-cover"
                            />
                        </Box>
                    ))}
                </Box>

                <Box
                    className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 rounded-full px-3 py-1"
                    sx={{
                        backgroundColor: 'rgba(0,0,0,0.4)',
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
                                backgroundColor:
                                    i === selectedIndex
                                        ? 'white'
                                        : 'rgba(255,255,255,0.5)',
                                transition: 'all 0.3s ease',
                                '&:hover': { transform: 'scale(1.2)' },
                            }}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    )
}
