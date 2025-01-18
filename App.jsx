import { useState } from 'react'
import Search from './Components/Search'
import FoodList from './Components/FoodList'
import Nav from './Components/Nav'
import "./App.css";
import Container from './Components/Container';
import InnerContainer from './Components/InnerContainer';
import FoodDetails from './Components/FoodDetails';

function App() {
  const [foodData,setfoodData] = useState([]);
  const [foodId,setfoodId] = useState("656329");
  return (
    <div className="App">
      <Nav/>
      <Search foodData={foodData} setfoodData={setfoodData}/>
      <Container>
        <InnerContainer>
          <FoodList setfoodId={setfoodId} foodData={foodData}/>
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId}/>
        </InnerContainer>
      </Container>
    </div>
  )
}

export default App
