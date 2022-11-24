import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const CategoryView = () => {
    const {category} = useParams();

    return (<ItemListContainer />);
};

export default CategoryView;