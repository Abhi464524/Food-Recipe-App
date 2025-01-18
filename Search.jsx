import { useEffect, useState } from "react";
import "./Search.css";
const URL = `https://api.spoonacular.com/recipes/complexSearch`;
const API_KEY = "7285b8794dcd4a2dae546819108fbb80";

function Search({foodData,setfoodData}){
    const[query,setQuery] = useState("pizza");
    useEffect(()=>{
        async function fetchData(){
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data.results);
            setfoodData(data.results);
        }
        fetchData();
    },[query])
    return(
        <div className="searchContainer">
            <input className="input" value={query} onChange={(e)=>setQuery(e.target.value)} type="text"/>
        </div>
    )
}
export default Search;