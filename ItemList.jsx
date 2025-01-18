import Item from "./Item";
import "./Item.css"

export default function ItemList({food, IsLoading}){
    return(
        <div>
            {IsLoading? <p>Loading...</p> : (food.extendedIngredients.map((item)=>(
                <Item key={item.id} item={item}/>)))
            }
            
        </div>
    )
}