import {useState} from 'react';


export default function Box() {
    const [inputValue, setInputValue] = useState('');


    function handleChange(event) {
        setInputValue(event.target.value);
    }

    function log(msg) {
        console.log(msg);
    }

    return (
        <>
            <h3>check console.log</h3>
            <input name="myInput" value={inputValue} onChange={handleChange}/>
            <br/>
            <button onClick={()=>console.log('haha')}>log haha</button>
            <button onClick={()=>log(inputValue)}>log input value</button>
        </>
    );
}
