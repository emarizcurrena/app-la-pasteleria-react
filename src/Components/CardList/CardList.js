import CardItem from '../Card/Card';
import { Grid } from '@mui/material';

const CardList = ({ productCategory }) => {
    const { title, items } = productCategory;
    return (
        <>
            <h2>{title}</h2>
            <Grid container>
                {
                    items.map((producto) => {
                        const { price, image, stock, id } = producto
                        return (
                            <Grid item md={3} key={id}>
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