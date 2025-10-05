'use client'

import { useState, useEffect } from 'react'

import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import Paper from '@mui/material/Paper'
import Toolbar from '@mui/material/Toolbar'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import MenuIcon from '@mui/icons-material/Menu'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import CartItem from '@/components/layout/header/CartItem'
import WishlistItem from '@/components/layout/header/WishListItem'
import { useDrawer } from '@/hooks/useDrawer'

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const menuDrawer = useDrawer()
    const cartDrawer = useDrawer()
    const wishlistDrawer = useDrawer()
    const userDrawer = useDrawer()

    const [cartProducts, setCartProducts] = useState([
        {
            name: 'Producto 1',
            image: '/placeholder/kirby-placeholder-1.webp',
            price: 100,
            quantity: 1,
            id: 1,
        },
        {
            name: 'Producto 2',
            image: '/placeholder/kirby-placeholder-2.webp',
            price: 200,
            quantity: 1,
            id: 2,
        },
        {
            name: 'Producto 3',
            image: '/placeholder/kirby-placeholder-3.webp',
            price: 300,
            quantity: 1,
            id: 3,
        },
        {
            name: 'Producto 4',
            image: '/placeholder/kirby-placeholder-1.webp',
            price: 400,
            quantity: 1,
            id: 4,
        },
        {
            name: 'Producto 5',
            image: '/placeholder/kirby-placeholder-2.webp',
            price: 500,
            quantity: 1,
            id: 5,
        },
        {
            name: 'Producto 6',
            image: '/placeholder/kirby-placeholder-3.webp',
            price: 600,
            quantity: 1,
            id: 6,
        },
        {
            name: 'Producto 7',
            image: '/placeholder/kirby-placeholder-1.webp',
            price: 700,
            quantity: 1,
            id: 7,
        },
        {
            name: 'Producto 8',
            image: '/placeholder/kirby-placeholder-2.webp',
            price: 800,
            quantity: 1,
            id: 8,
        },
        {
            name: 'Producto 9',
            image: '/placeholder/kirby-placeholder-3.webp',
            price: 900,
            quantity: 1,
            id: 9,
        },
    ])

    const total = cartProducts.reduce((acc, p) => acc + p.price * p.quantity, 0)

    const [wishlistProducts, setWishlistProducts] = useState([
        {
            id: 1,
            name: 'Producto 1',
            image: '/placeholder/kirby-placeholder-1.webp',
            price: 100,
        },
        {
            id: 2,
            name: 'Producto 2',
            image: '/placeholder/kirby-placeholder-2.webp',
            price: 200,
        },
        {
            id: 3,
            name: 'Producto 3',
            image: '/placeholder/kirby-placeholder-3.webp',
            price: 300,
        },
        {
            id: 4,
            name: 'Producto 4',
            image: '/placeholder/kirby-placeholder-1.webp',
            price: 400,
        },
        {
            id: 5,
            name: 'Producto 5',
            image: '/placeholder/kirby-placeholder-2.webp',
            price: 500,
        },
        {
            id: 6,
            name: 'Producto 6',
            image: '/placeholder/kirby-placeholder-3.webp',
            price: 600,
        },
        {
            id: 7,
            name: 'Producto 7',
            image: '/placeholder/kirby-placeholder-1.webp',
            price: 700,
        },
        {
            id: 8,
            name: 'Producto 8',
            image: '/placeholder/kirby-placeholder-2.webp',
            price: 800,
        },
        {
            id: 9,
            name: 'Producto 9',
            image: '/placeholder/kirby-placeholder-3.webp',
            price: 900,
        },
    ])

    return (
        <>
            <AppBar position="sticky" className="w-full min-w-xs">
                <Toolbar>
                    <Box display="flex" alignItems="center" flexGrow={1}>
                        <IconButton
                            color="inherit"
                            onClick={menuDrawer.toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    <Box>
                        <IconButton
                            color="inherit"
                            onClick={cartDrawer.toggleDrawer(true)}
                        >
                            {mounted && isLoggedIn ? (
                                <Badge
                                    badgeContent={cartProducts.length}
                                    color="error"
                                >
                                    <ShoppingCartIcon />
                                </Badge>
                            ) : (
                                <ShoppingCartIcon />
                            )}
                        </IconButton>

                        <IconButton
                            color="inherit"
                            onClick={wishlistDrawer.toggleDrawer(true)}
                        >
                            <FavoriteIcon />
                        </IconButton>

                        <IconButton
                            color="inherit"
                            onClick={userDrawer.toggleDrawer(true)}
                        >
                            <AccountCircleIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="left"
                open={menuDrawer.open}
                onClose={menuDrawer.toggleDrawer(false)}
            >
                <Box
                    sx={{
                        width: { xs: '80vw', sm: 280 },
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                    }}
                >
                    <Paper
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            overflowY: 'auto',
                        }}
                    >
                        <ListSubheader
                            sx={{
                                position: 'sticky',
                                top: 0,
                                bgcolor: 'background.paper',
                                pt: 2,
                                pb: 1,
                                px: 2,
                                color: 'text.primary',
                                typography: 'h6',
                                fontWeight: 'bold',
                                borderBottom: 1,
                                borderColor: 'divider',
                                zIndex: 1,
                            }}
                        >
                            Menu Principal
                        </ListSubheader>
                        <List sx={{ p: 0 }}>
                            <ListItem disablePadding component="a" href="/">
                                <ListItemButton>
                                    <ListItemText primary="Inicio" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem
                                disablePadding
                                component="a"
                                href="/products"
                            >
                                <ListItemButton>
                                    <ListItemText primary="Productos" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem
                                disablePadding
                                component="a"
                                href="/contact"
                            >
                                <ListItemButton>
                                    <ListItemText primary="Contacto" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding component="a" href="/faq">
                                <ListItemButton>
                                    <ListItemText primary="Preguntas Frecuentes" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Paper>
                </Box>
            </Drawer>

            <Drawer
                anchor="right"
                open={cartDrawer.open}
                onClose={cartDrawer.toggleDrawer(false)}
            >
                <Box
                    sx={{
                        width: { xs: '80vw', sm: 360 },
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                    }}
                >
                    <Paper
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            overflowY: 'auto',
                        }}
                    >
                        <ListSubheader
                            sx={{
                                position: 'sticky',
                                top: 0,
                                bgcolor: 'background.paper',
                                pt: 2,
                                pb: 1,
                                px: 2,
                                color: 'text.primary',
                                typography: 'h6',
                                fontWeight: 'bold',
                                borderBottom: 1,
                                borderColor: 'divider',
                                zIndex: 1,
                            }}
                        >
                            Carrito
                        </ListSubheader>
                        <List sx={{ p: 0 }}>
                            {isLoggedIn ? (
                                cartProducts.length > 0 ? (
                                    cartProducts.map((p) => (
                                        <CartItem
                                            key={p.id}
                                            name={p.name}
                                            price={p.price}
                                            image={p.image}
                                            initialQuantity={p.quantity}
                                            onDelete={() =>
                                                setCartProducts((prev) =>
                                                    prev.filter(
                                                        (prod) =>
                                                            prod.id !== p.id
                                                    )
                                                )
                                            }
                                        />
                                    ))
                                ) : (
                                    <ListItem>
                                        <ListItemText primary="El carrito está vacío" />
                                    </ListItem>
                                )
                            ) : (
                                <ListItem>
                                    <ListItemText primary="Inicia sesión para comenzar a comprar" />
                                </ListItem>
                            )}
                        </List>
                    </Paper>
                    {isLoggedIn && cartProducts.length > 0 && (
                        <Box
                            sx={{
                                p: 2,
                                position: 'sticky',
                                bottom: 0,
                                bgcolor: 'background.paper',
                                borderTop: 1,
                                borderColor: 'divider',
                            }}
                        >
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                mb={1}
                            >
                                <Typography variant="subtitle1">
                                    Total:
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    fontWeight="bold"
                                >
                                    ${total.toFixed(2)}
                                </Typography>
                            </Box>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                            >
                                Finalizar compra
                            </Button>
                        </Box>
                    )}
                </Box>
            </Drawer>

            <Drawer
                anchor="right"
                open={wishlistDrawer.open}
                onClose={wishlistDrawer.toggleDrawer(false)}
            >
                <Box
                    sx={{
                        width: { xs: '80vw', sm: 360 },
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                    }}
                >
                    <Paper
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            overflowY: 'auto',
                        }}
                    >
                        <ListSubheader
                            sx={{
                                position: 'sticky',
                                top: 0,
                                bgcolor: 'background.paper',
                                pt: 2,
                                pb: 1,
                                px: 2,
                                color: 'text.primary',
                                typography: 'h6',
                                fontWeight: 'bold',
                                borderBottom: 1,
                                borderColor: 'divider',
                                zIndex: 1,
                            }}
                        >
                            Lista de Deseos
                        </ListSubheader>
                        <List sx={{ p: 0 }}>
                            {isLoggedIn ? (
                                wishlistProducts.length > 0 ? (
                                    wishlistProducts.map((p) => (
                                        <WishlistItem
                                            key={p.id}
                                            name={p.name}
                                            price={p.price}
                                            image={p.image}
                                            onDelete={() =>
                                                setWishlistProducts((prev) =>
                                                    prev.filter(
                                                        (item) =>
                                                            item.id !== p.id
                                                    )
                                                )
                                            }
                                        />
                                    ))
                                ) : (
                                    <ListItem>
                                        <ListItemText primary="Tu lista de deseos está vacía" />
                                    </ListItem>
                                )
                            ) : (
                                <ListItem>
                                    <ListItemText primary="Inicia sesión para guardar tus productos favoritos" />
                                </ListItem>
                            )}
                        </List>
                    </Paper>
                </Box>
            </Drawer>

            <Drawer
                anchor="right"
                open={userDrawer.open}
                onClose={userDrawer.toggleDrawer(false)}
            >
                <Box
                    sx={{
                        width: { xs: '80vw', sm: 360 },
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                    }}
                >
                    <Paper
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            overflowY: 'auto',
                        }}
                    >
                        {isLoggedIn ? (
                            <List sx={{ p: 1 }}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar alt="Usuario" src="" />
                                    </ListItemAvatar>
                                    <ListItemText primary="Bienvenido, Usuario" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="Perfil" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="Mis Compras" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="Lista de Deseos" />
                                    </ListItemButton>
                                </ListItem>
                                <Divider sx={{ my: 1 }} />
                                <ListItem>
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        fullWidth
                                        onClick={() => setIsLoggedIn(false)}
                                    >
                                        Cerrar Sesión
                                    </Button>
                                </ListItem>
                            </List>
                        ) : (
                            <List sx={{ p: 0 }}>
                                <ListSubheader
                                    sx={{
                                        position: 'sticky',
                                        top: 0,
                                        bgcolor: 'background.paper',
                                        pt: 2,
                                        pb: 1,
                                        px: 2,
                                        color: 'text.primary',
                                        typography: 'h6',
                                        fontWeight: 'bold',
                                        borderBottom: 1,
                                        borderColor: 'divider',
                                        zIndex: 1,
                                    }}
                                >
                                    Inicia sesión o crea tu cuenta
                                </ListSubheader>
                                <ListItem>
                                    <TextField
                                        id="email"
                                        type="email"
                                        label="Correo Electrónico"
                                        fullWidth
                                        variant="outlined"
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        id="password"
                                        type="password"
                                        label="Contraseña"
                                        fullWidth
                                        variant="outlined"
                                    />
                                </ListItem>
                                <ListItem>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        onClick={() => setIsLoggedIn(true)}
                                    >
                                        Iniciar Sesión
                                    </Button>
                                </ListItem>
                                <Divider sx={{ my: 1 }} />
                                <ListItem>
                                    <Button variant="outlined" fullWidth>
                                        Iniciar Sesión con Google
                                    </Button>
                                </ListItem>
                                <ListItem
                                    component="a"
                                    href="/"
                                    sx={{ textAlign: 'center' }}
                                >
                                    <ListItemText primary="¿No tienes cuenta? Regístrate" />
                                </ListItem>
                                <ListItem
                                    component="a"
                                    href="/"
                                    sx={{ textAlign: 'center' }}
                                >
                                    <ListItemText primary="Restablecer Contraseña" />
                                </ListItem>
                            </List>
                        )}
                    </Paper>
                </Box>
            </Drawer>
        </>
    )
}
