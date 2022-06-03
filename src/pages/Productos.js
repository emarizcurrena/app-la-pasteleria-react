import CardListContainer from "../Components/CardListContainer/CardListContainer"
import { useState } from 'react';

const Products = () => {
    const [tipoProducto, setTipoProducto] = useState("Tortas")

    const onTypeChange = (type) => {
        setTipoProducto(type);
    }

    return (
        <div>
            <button onClick={() => { onTypeChange("Tortas") }}>Tortas</button>
            <button onClick={() => { onTypeChange("Alfajores") }}>Alfajores</button>
            <div className='general-container'>
                <CardListContainer type={tipoProducto} />
            </div>
        </div>
    );
}

export default Products