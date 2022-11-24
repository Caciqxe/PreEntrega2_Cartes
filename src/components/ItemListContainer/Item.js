import {Link} from "react-router-dom"; 
const Item = ({product}) => {
    return (
        <div>
            <Link to={(`/item/${product.id}`)}><img src={product.img}/></Link>
            <li>{product.name}</li>
        </div>
    );
};

export default Item;