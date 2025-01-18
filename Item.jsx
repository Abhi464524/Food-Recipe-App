export default function Item({item}){
    return(
        <div>
            <div className="ItemContainer">
                <div className="imageContainer"><img src={`https://spoonacular.com/cdn/ingredients_100x100/`+item.image} alt="" className="image"/></div>
                <div className="nameContainer">
                    <div className="name">{item.name}</div>
                    <div className="amount">{item.amount} {item.unit}</div>
                </div>
            </div>
        </div>
    )
}