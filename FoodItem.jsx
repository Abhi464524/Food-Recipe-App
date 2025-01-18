import "./FoodItem.css"
function FoodItem({food, setfoodId}){
    return(
        <div className="itemContainer">
            <img className="itemImage" src={food.image} alt="" />
            <div className="itemContent">
                <p className="itemName">{food.title}</p>
            </div>
            <div className="ButtonContanier">
                <button onClick={()=>{console.log(food.id); setfoodId(food.id)}}
                        className="itemButton">View Recipe
                </button>
            </div>
        </div>
    )
}
export default FoodItem;