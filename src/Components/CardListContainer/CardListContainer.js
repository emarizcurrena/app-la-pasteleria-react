import { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

import CardList from '../CardList/CardList';
import { useParams } from 'react-router-dom';
//Firestore
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import db from '../../utils/fireBaseConfig'


const CardListContainer = () => {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)
    const { category } = useParams();

    const filterByCategory = (array, categoryName) => {
        // categoryName es false si es undefined y es true si tenemos alguna categoria en la URL
        if (categoryName) {
            return array.filter((item) => {
                return categoryName === item.category
            })
        } else {
            return array
        }
    }

    useEffect(() => {
        getProductsList().then((productos) => {
            const filteredProducts = filterByCategory(productos, category)
            setProducts(filteredProducts)
        })
    }, [category])

    const getProductsList = async () => {
        const productsRef = collection(db, "Productos")
        const productSnapshot = category ?
            await getDocs(query(productsRef, where("category", "==", category)))
            : await getDocs(query(productsRef, orderBy("category", "desc")));

        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
    }


    return (
        // loader ? <LinearProgress color="secondary" />
        //     : 
        <CardList products={products} />
    )

}

export default CardListContainer