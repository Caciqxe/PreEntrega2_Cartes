import { useParams } from "react-router-dom";
import ItemDetailContainer from "../components/ItemListContainer/ItemDetailContainer";

const ItemView = () => {
    const {id} = useParams();
    return (
        <ItemDetailContainer />
    );
};

export default ItemView;