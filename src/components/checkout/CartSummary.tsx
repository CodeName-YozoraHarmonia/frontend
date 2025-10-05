'use client'

import { useState } from 'react'

import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Typography from '@mui/material/Typography'

import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import RemoveIcon from '@mui/icons-material/Remove'

interface Product {
    id: number
    name: string
    image: string
    price: number
    quantity: number
}

export default function CartSummary() {
    const [cartProducts, setCartProducts] = useState<Product[]>([
        {
            id: 1,
            name: 'Producto 1',
            image: '/placeholder/kirby-placeholder-1.webp',
            price: 100,
            quantity: 1,
        },
        {
            id: 2,
            name: 'Producto 2',
            image: '/placeholder/kirby-placeholder-2.webp',
            price: 200,
            quantity: 1,
        },
        {
            id: 3,
            name: 'Producto 3',
            image: '/placeholder/kirby-placeholder-3.webp',
            price: 300,
            quantity: 1,
        },
    ])

    const increase = (id: number) => {
        setCartProducts((prev) =>
            prev.map((p) =>
                p.id === id ? { ...p, quantity: p.quantity + 1 } : p
            )
        )
    }

    const decrease = (id: number) => {
        setCartProducts((prev) =>
            prev.map((p) =>
                p.id === id
                    ? { ...p, quantity: Math.max(1, p.quantity - 1) }
                    : p
            )
        )
    }

    const remove = (id: number) => {
        setCartProducts((prev) => prev.filter((p) => p.id !== id))
    }

    const total = cartProducts.reduce((acc, p) => acc + p.price * p.quantity, 0)

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Carrito
                </Typography>
                <List>
                    {cartProducts.map((item) => {
                        const subtotal = item.price * item.quantity
                        return (
                            <Box key={item.id}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar
                                            variant="square"
                                            src={item.image}
                                            alt={item.name}
                                            sx={{ width: 64, height: 64 }}
                                        />
                                    </ListItemAvatar>

                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        ml={2}
                                        flexGrow={1}
                                    >
                                        <Typography variant="subtitle1">
                                            {item.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                        >
                                            ${item.price} • Subtotal: $
                                            {subtotal}
                                        </Typography>

                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            mt={1}
                                            gap={1}
                                        >
                                            <IconButton
                                                size="small"
                                                onClick={() =>
                                                    decrease(item.id)
                                                }
                                            >
                                                <RemoveIcon fontSize="small" />
                                            </IconButton>
                                            <Typography>
                                                {item.quantity}
                                            </Typography>
                                            <IconButton
                                                size="small"
                                                onClick={() =>
                                                    increase(item.id)
                                                }
                                            >
                                                <AddIcon fontSize="small" />
                                            </IconButton>

                                            <Box flexGrow={1} />
                                            <IconButton
                                                size="small"
                                                color="error"
                                                onClick={() => remove(item.id)}
                                            >
                                                <DeleteIcon fontSize="small" />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </ListItem>
                                <Divider />
                            </Box>
                        )
                    })}
                </List>

                <Typography variant="h6" component="span" mt={2}>
                    Total: ${total}
                </Typography>
            </CardContent>
        </Card>
    )
}
