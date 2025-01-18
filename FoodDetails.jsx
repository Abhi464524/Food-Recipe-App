import { useEffect, useState } from "react";
import "./FoodDetails.css";
import ItemList from "./ItemList";

export default function FoodDetails({ foodId }){
    const [food, setFood] = useState({});  
    const [IsLoading,setIsLoading] = useState(true);
    const URL=`https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = "7285b8794dcd4a2dae546819108fbb80";
    useEffect(()=>{
        async function fetchFood(){
            const res = await fetch(`${URL}?apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data);
            setFood(data);
            setIsLoading(false);
        }
        fetchFood();
    },[foodId])
    return(
        <div>
            <div className="recipeCard">
                <h1 className="recipeName">{ food.title }</h1>
                <img src={food.image} alt="" className="recipeImage"/>
                <div className="recipeDetails-1">
                    <span><strong>⏱️{food.readyInMinutes } Minutes</strong></span>
                    <span><strong>{food.vegetarian ? "🟢Vegetarian" : "🔴Non-Vegetraian"}</strong></span>
                    <span><strong>{food.vegan ? "🥬Vegan" : "🍶Non-Vegan"}</strong></span>
                </div>
                <div className="recipeDetails-2">
                    <span><strong>Servers: {food.servings} Members</strong></span>
                    <span><strong>Price per serving:💲{food.pricePerServing/100}</strong></span>
                </div>
                <h2>Ingredients</h2>
                <ItemList food={food} IsLoading={IsLoading}/>
                <h2>Instructions</h2>
                <div className="recipeInstructions">
                    <ol>{IsLoading? <p>Loading...</p> : food.analyzedInstructions[0].steps.map((step)=><li>{step.step}</li>)}</ol>
                </div>
            </div>  
        </div>
    )
}