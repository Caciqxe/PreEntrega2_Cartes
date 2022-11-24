import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

import { item as itemMock } from "../../mocks/items";
import NavBar from "../NavBar/NavBar";

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        new Promise((resolve) => 
        setTimeout(() => {resolve(itemMock);
        }, 100)
        ).then((data) => {
            if(id) {
                const ides = data.find(
                    (item) => item.id === id
                );
                setItem(ides);
            }else{
                setItem(data);
            }
            
        });
}, [id]);

    if (!item) {
        return <p>Cargando</p>;
    }

    return (
    <div>
        <NavBar />
        <ItemDetail item={item} />
    </div>);
};

export default ItemDetailContainer;