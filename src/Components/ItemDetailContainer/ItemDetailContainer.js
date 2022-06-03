import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { products } from '../../utils/mockProducts'
import './ItemDetailContainer.css';
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const { id } = useParams();
    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const productList = [...products.alfajores.items, ...products.tortas.items]
                const prrf = productList.find(item => parseInt(id) === item.id);
                console.log(prrf)
                resolve(prrf)
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