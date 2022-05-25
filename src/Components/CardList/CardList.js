import CardItem from '../Card/Card';
import { Grid } from '@mui/material';

const CardList = ({ title }) => {
    const productos = [
        {
            title: "Torta Chocolate",
            price: 1500,
            image: "torta_choco.jpg",
            stock: 20,
        },
        {
            title: "Torta Alfajor",
            price: 1200,
            image: "torta_alfajor.jpg",
            stock: 10,
        },
        {
            title: "Lemon Pie",
            price: 1000,
            image: "lemon pie2.jpeg",
            stock: 5,
        },
        {
            title: "Torta Frutilla",
            price: 1500,
            image: "torta_frutillas.jpg",
            stock: 12,
        },
    ]
    return (
        <>
            <h2>{title}</h2>
            <Grid container>
                <Grid item md={3}>
                    <CardItem title={"Torta Chocolate"} price={1500} image={"torta_choco.jpg"} stock={20} />
                </Grid>
                <Grid item md={3}>
                    <CardItem title={"Torta Alfajor"} price={1200} image={"torta_alfajor.jpg"} stock={10} />
                </Grid>
                <Grid item md={3}>
                    <CardItem title={"Lemon Pie"} price={1000} image={"lemon pie2.jpeg"} stock={5} />
                </Grid>
                <Grid item md={3}>
                    <CardItem title={"Torta Frutilla"} price={1500} image={"torta_frutillas.jpg"} stock={12} />
                </Grid>
            </Grid>
        </>
    )
}

export default CardList