import { useState } from 'react'

export function useDrawer(initialOpen = false) {
    const [open, setOpen] = useState(initialOpen)

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen)
    }

    return { open, toggleDrawer }
}
