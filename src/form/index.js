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
        <div className="meal-select">
            <h3>Meal Select</h3>
            <div className="select">
                <label>Categories</label>
                <select value={selected} onChange={mealChange}>
                    <option value="selectMeal">Select an option</option>
                    <option value="food">Food</option>
                    <option value="drinks">Drinks</option>
                </select>
            </div>

            <div className="meal-list">
                <p>Items</p>
            {food && <ul>
                <li>Eba</li>
                <li>Mega pot lover</li>
                <li>Beans</li>
                </ul>}
            {drinks && <ul>
                <li>Hollandia yogurt</li>
                <li>Monster energy drink</li>
                </ul>}
            </div>
        </div>
    );
}

export default Form;