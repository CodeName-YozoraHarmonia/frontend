'use client'

import { useState } from 'react'

import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Typography from '@mui/material/Typography'

import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import DeleteIcon from '@mui/icons-material/Delete'

interface CartItemProps {
    name: string
    price: number
    image: string
    initialQuantity?: number
    onDelete: () => void
}

export default function CartItem({
    name,
    price,
    image,
    initialQuantity = 1,
    onDelete,
}: CartItemProps) {
    const [quantity, setQuantity] = useState(initialQuantity)

    const increase = () => setQuantity((prev) => prev + 1)
    const decrease = () => setQuantity((prev) => Math.max(1, prev - 1))
    const subtotal = price * quantity

    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar
                    variant="square"
                    src={image}
                    alt={name}
                    sx={{ width: 64, height: 64 }}
                />
            </ListItemAvatar>

            <Box display="flex" flexDirection="column" ml={2} flexGrow={1}>
                <Typography variant="subtitle1">{name}</Typography>
                <Typography variant="body2" color="textSecondary">
                    ${price} • Subtotal: ${subtotal}
                </Typography>

                <Box display="flex" alignItems="center" mt={1} gap={1}>
                    <IconButton size="small" onClick={decrease}>
                        <RemoveIcon fontSize="small" />
                    </IconButton>
                    <Typography>{quantity}</Typography>
                    <IconButton size="small" onClick={increase}>
                        <AddIcon fontSize="small" />
                    </IconButton>

                    <Box flexGrow={1} />
                    <IconButton size="small" color="error" onClick={onDelete}>
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Box>
        </ListItem>
    )
}
