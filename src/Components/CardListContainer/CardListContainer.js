import { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

import CardList from '../CardList/CardList';
import { products as mockProducts } from '../../utils/mockProducts';
import { useParams } from 'react-router-dom';

const CardListContainer = () => {
    const [productCategory, setproductCategory] = useState({})
    const [loader, setLoader] = useState(true)
    let { category } = useParams();

    const getProducts = () => {
        setLoader(true)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (category === "tortas") {
                    resolve(mockProducts.tortas)
                } else {
                    resolve(mockProducts.alfajores)
                }

            }, 2000)
        })
    }

    useEffect(() => {
        getProducts()
            .then((response) => {
                console.log("Then : Respuesta promes: ", response)
                setproductCategory(response)
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
        loader ? <LinearProgress color="secondary" />
            : <CardList productCategory={productCategory} />
    )

}

export default CardListContainer