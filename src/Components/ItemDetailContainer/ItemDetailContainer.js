import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { producto1 } from '../../utils/mockProducts'
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(producto1)
            }, 2000)
        })
    }

    useEffect(() => {
        getItem()
            .then((res) => {
                console.log("Respuesta GetItem: ", res)
                setProduct(res)
            })
    }, [])

    return (
        <>
            <div>Contenedor ITEM</div>
            <ItemDetail data={product} />
        </>
    )
}

export default ItemDetailContainer