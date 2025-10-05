import Link from 'next/link'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

import CallIcon from '@mui/icons-material/Call'
import EmailIcon from '@mui/icons-material/Email'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import PlaceIcon from '@mui/icons-material/Place'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import XIcon from '@mui/icons-material/X'

const entity = 'e-comerce'
const developer = 'Yozora Harmonia'
const developerLink = 'https://github.com/CodeName-YozoraHarmonia'

const categories = [
    { href: '/', label: 'Inicio' },
    { href: '/products', label: 'Productos' },
    { href: '/contact', label: 'Contacto' },
    { href: '/faq', label: 'Preguntas Frecuentes' },
    { href: '/regret', label: 'Arrepentimiento de Compra' },
]

const contacts = [
    {
        href: 'https://wa.me/123456789',
        icon: WhatsAppIcon,
        label: '+54123456789',
    },
    { href: 'tel:+54123456789', icon: CallIcon, label: '+54123456789' },
    {
        href: 'mailto:ejemplo@email.com',
        icon: EmailIcon,
        label: 'ejemplo@email.com',
    },
    {
        href: 'https://goo.gl/maps/xxxx',
        icon: PlaceIcon,
        label: 'Calle 1234, Ciudad, Provincia.',
    },
]

export default function Footer() {
    return (
        <Box
            component="footer"
            py={2}
            px={{ xs: 2, sm: 0 }}
            sx={{
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                width: '100%',
                boxShadow: 3,
            }}
        >
            <Container maxWidth="lg">
                <Box display="flex" flexDirection="column" gap={2}>
                    <Box
                        display="flex"
                        flexDirection={{ xs: 'column', sm: 'row' }}
                        justifyContent="space-between"
                        alignItems={{ xs: 'center', sm: 'flex-start' }}
                        flexWrap="wrap"
                        gap={4}
                    >
                        <Box textAlign={{ xs: 'center', sm: 'left' }}>
                            <Typography variant="h6" gutterBottom>
                                Categorías
                            </Typography>
                            <List dense>
                                {categories.map(({ href, label }) => (
                                    <ListItem key={href} disableGutters>
                                        <ListItemText>
                                            <Link href={href}>{label}</Link>
                                        </ListItemText>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>

                        <Box textAlign={{ xs: 'center', sm: 'left' }}>
                            <Typography variant="h6" gutterBottom>
                                Contáctanos
                            </Typography>
                            <List dense>
                                {contacts.map(({ href, icon: Icon, label }) => (
                                    <ListItem key={href} disablePadding>
                                        <Link
                                            href={href}
                                            className="flex w-full items-center gap-2 py-1"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Icon />
                                            <Typography variant="body2">
                                                {label}
                                            </Typography>
                                        </Link>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>

                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                        >
                            <Typography
                                variant="h6"
                                gutterBottom
                                textAlign="center"
                            >
                                Síguenos en redes
                            </Typography>
                            <Box display="flex" gap={1}>
                                {[
                                    {
                                        icon: InstagramIcon,
                                        link: 'https://instagram.com',
                                        label: 'Instagram',
                                    },
                                    {
                                        icon: FacebookIcon,
                                        link: 'https://facebook.com',
                                        label: 'Facebook',
                                    },
                                    {
                                        icon: XIcon,
                                        link: 'https://x.com',
                                        label: 'X',
                                    },
                                ].map(({ icon: Icon, link, label }) => (
                                    <IconButton
                                        key={label}
                                        component="a"
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        color="inherit"
                                    >
                                        <Icon />
                                    </IconButton>
                                ))}
                            </Box>
                        </Box>
                    </Box>

                    <Box
                        display="flex"
                        flexDirection={{ xs: 'column', md: 'row' }}
                        justifyContent="space-between"
                        alignItems={{ xs: 'center', md: 'center' }}
                        gap={2}
                    >
                        <Box
                            display="flex"
                            flexDirection={{ xs: 'column', md: 'row' }}
                            gap={2}
                            textAlign={{ xs: 'center', md: 'left' }}
                        >
                            <Link href="/terms-conditions">
                                <Typography variant="body2">
                                    Términos y condiciones
                                </Typography>
                            </Link>
                            <Link href="/privacy">
                                <Typography variant="body2">
                                    Políticas de privacidad
                                </Typography>
                            </Link>
                        </Box>

                        <Box
                            display="flex"
                            flexDirection="column"
                            gap={0.5}
                            textAlign={{ xs: 'center', md: 'right' }}
                        >
                            <Typography variant="caption">
                                © {entity} - {new Date().getFullYear()}. Todos
                                los derechos reservados
                            </Typography>
                            <Typography variant="caption">
                                desarrollado por{' '}
                                <Link
                                    href={developerLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <strong>{developer}</strong>
                                </Link>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
