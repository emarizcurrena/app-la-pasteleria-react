import { useEffect, useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

const Modal = ({ handleClose, open, children }) => {
    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     console.log("Fase Update/Actualizacion")
    // })

    // useEffect(() => {
    //    console.log("Fase Montaje")
    // }, [])

    // useEffect(() => {
    //    return () => {
    //        console.log("Fase Desmontaje/Unmount")
    //    }
    // }, [])

    // useEffect(() => {
    //    console.log("Fase Montaje")
    // }, [count])

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogContent>
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)}>+</button>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default Modal