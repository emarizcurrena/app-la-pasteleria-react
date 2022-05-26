import { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

import CardList from '../CardList/CardList';
import { tortas, alfajores } from '../../utils/mockProducts';

const CardListContainer = ({ type }) => {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)

    const getProducts = () => {
        setLoader(true)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (type === "Tortas") {
                    resolve(tortas)
                } else {
                    resolve(alfajores)
                }

            }, 2000)
        })
    }

    useEffect(() => {
        getProducts()
            .then((response) => {
                console.log("Then : Respuesta promes: ", response)
                setProducts(response)
            })
            .catch((err) => {
                console.log("Catch : Fallo la llamada.")
            })
            .finally(() => {
                console.log("Finally: Termino la promesa")
                setLoader(false)
            })
    }, [type])
    console.log(products)
    return (
        loader ? <LinearProgress color="secondary" />
            : <CardList products={products} title={type} />
    )

}

export default CardListContainer