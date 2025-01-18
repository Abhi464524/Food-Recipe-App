import FoodItem from "./FoodItem";

function FoodList({foodData, setfoodId}){
    return(
        <div>
            {foodData.map((food)=> <FoodItem setfoodId={setfoodId} key={food.id} food={food}/>)}
        </div>
    )
}
export default FoodList;
