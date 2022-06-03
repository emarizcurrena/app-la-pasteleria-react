import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ data }) => {
    const { title, price, image, stock } = data;
    console.log("Data desde ItemDetail: ", data)
    return (
        <div className='detail'>
            <div>
                <img src={`/${data.image}`} alt={"producto"} />
            </div>
            <div className='detailText'>
                <h2>{data.title}</h2>
                <p>${data.price}</p>
                <ItemCount stock={data.stock} />
            </div>
        </div>
    )
}

export default ItemDetail