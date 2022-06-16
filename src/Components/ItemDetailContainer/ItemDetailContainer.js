import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css';
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore";
import db from '../../utils/fireBaseConfig'
import { useNavigate } from "react-router-dom";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const { id } = useParams();
    const navigate = useNavigate();

    const getItem = async () => {
        const docRef = doc(db, "Productos", `${id}`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap);
            setProduct(docSnap.data())
        } else {
            console.log("No such document!");
            navigate("/products")
        }
    }


    useEffect(() => {
        getItem()
    }, [])

    return (
        <>
            <div>Contenedor ITEM</div>
            <ItemDetail data={product} />
        </>
    )
}

export default ItemDetailContainer