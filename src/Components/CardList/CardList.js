import './CardList.css'
import CardItem from '../Card/Card';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

const CardList = ({ products }) => {
    const { category } = useParams()
    return (
        <>
            {/* <h2>{title}</h2> */}
            <Grid container className='cardListContainer'>
                {
                    products.map((producto) => {
                        const { title, price, image, stock, id } = producto
                        return (
                            <Grid item md={3} key={id} className="cardContainer">
                                <CardItem title={title} price={price} image={image} stock={stock} id={id} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}

export default CardList