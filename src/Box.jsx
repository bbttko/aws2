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
            <input name="myInput" value={inputValue} onChange={handleChange}/>
            <button onClick={()=>console.log('haha')}>test</button>
            <button onClick={()=>log(inputValue)}>test2</button>
        </>
    );
}
