import {useState} from 'react'

function Boxer(props) {
    const [value, setValue] = useState("");

    function changeEvent(e) {
        setValue(e.target.value);
    }


    function showValue(v) {
        console.log(v);
    }


    function buttonClick() {
        const label = document.getElementById("labelId");
        label.textContent = value;
        console.log(value);
    }


    return (
        <>
            <h3>update label</h3>
            <input type="text" onChange={changeEvent} value={value} /><br/>
            <br/>
            <button onClick={buttonClick}>click me</button>
            <label id="labelId">somelabel</label>
        </>
    );
}


export default Boxer
