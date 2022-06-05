import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { productos } from '../../utils/productsMock'
import './ItemDetailContainer.css';
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const { id } = useParams();
    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos.find(item => parseInt(id) === item.id))
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