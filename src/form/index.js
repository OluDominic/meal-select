import React, { useState } from "react"
import './index.scss'
import Select from "react-select";


const Form =()=> {

    const options = [
        {label:'Food', value: "food"},
    {label:'Drinks', value: "drinks"}
    ]

    const [selected, setSelected] = useState(null);

  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

    return (
        <div>
            <Select options={options} onChange={handleChange} value={selected} />
        </div>
    );
}

export default Form;