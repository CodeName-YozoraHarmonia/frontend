'use client'

import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'

import DeleteIcon from '@mui/icons-material/Delete'

interface WishlistItemProps {
    name: string
    price: number
    image: string
    onDelete: () => void
}

export default function WishlistItem({
    name,
    price,
    image,
    onDelete,
}: WishlistItemProps) {
    return (
        <ListItem
            divider
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={onDelete}>
                    <DeleteIcon color="error" />
                </IconButton>
            }
            className="w-full"
        >
            <ListItemAvatar>
                <Avatar
                    variant="square"
                    src={image}
                    alt={name}
                    sx={{ width: 56, height: 56 }}
                />
            </ListItemAvatar>

            <Box ml={2} flexGrow={1}>
                <ListItemText primary={name} secondary={`$${price}`} />
            </Box>
        </ListItem>
    )
}
