const ItemDetail = ({item}) => {
    return(
        <div>
            {item.name}
            <img src={item.img} alt = "juego de mesa" />
            <p>{item.description}</p>
        </div>
    );
};

export default ItemDetail