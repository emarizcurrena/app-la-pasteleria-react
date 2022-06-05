import { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

import CardList from '../CardList/CardList';
import { productos } from '../../utils/productsMock';
import { useParams } from 'react-router-dom';

const CardListContainer = () => {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)
    const { category } = useParams();
    console.log(products)

    const getProducts = () => {
        // setLoader(true)
        return new Promise((resolve, reject) => {
            // setTimeout(() => {
            resolve(productos)
            // }, 2000)
        })
    }

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
        getProducts()
            .then((response) => {
                console.log("Then : Respuesta promes: ", response)
                const filteredProducts = filterByCategory(response, category)
                console.log(filteredProducts)
                setProducts(filteredProducts)
            })
            .catch((err) => {
                console.log("Catch : Fallo la llamada.")
            })
            .finally(() => {
                console.log("Finally: Termino la promesa")
                setLoader(false)
            })
    }, [category])

    return (
        // loader ? <LinearProgress color="secondary" />
        //     : 
        <CardList products={products} />
    )

}

export default CardListContainer