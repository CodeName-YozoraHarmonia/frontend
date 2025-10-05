'use client'

import React, { ReactNode } from 'react'

import Box from '@mui/material/Box'

import useEmblaCarousel from 'embla-carousel-react'

import AutoScroll from 'embla-carousel-auto-scroll'

interface ReusableCarouselProps {
    children: ReactNode
    speed?: number
    gap?: number
    visible?: { xs: string; sm?: string; md?: string; lg?: string }
}

export default function ReusableCarousel({
    children,
    speed = 1,
    gap = 1,
}: ReusableCarouselProps) {
    const [emblaRef] = useEmblaCarousel(
        { loop: true, align: 'start', dragFree: true },
        [
            AutoScroll({
                speed,
                stopOnInteraction: false,
            }),
        ]
    )

    return (
        <Box ref={emblaRef} width="100%" overflow="hidden">
            <Box display="flex">
                {React.Children.map(children, (child, index) => (
                    <Box p={gap} boxSizing="border-box" key={index}>
                        {child}
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
