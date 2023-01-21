import React, { useState, useEffect } from "react"
import './index.scss'


const Form =()=> {
    const [selected, setSelected] = useState("selectMeal");

    const [food, setFood] = useState(false)
    const [drinks, setDrinks] = useState(false)

    useEffect(()=> {
        selected === "food"
        ? setFood(true)
        : setFood(false);
        selected === "drinks"
        ? setDrinks(true)
        : setDrinks(false)
    },[selected])

    const mealChange=(e)=> {
        setSelected(e.target.value)
    }

    return (
        <div>
        
        <div>
            <select value={selected} onChange={mealChange}>
                <option value="selectMeal">Select options</option>
                <option value="food">Food</option>
                <option value="drinks">Drinks</option>
            </select>
        </div>
        {food && <p style={{color: "white"}}>rice and beans </p>}
        {drinks && <h2> Hollandia yoghurt </h2>}
        </div>
    );
}

export default Form;