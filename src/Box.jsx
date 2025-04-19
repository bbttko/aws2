export default function Box() {
    function log(msg) {
        console.log(msg);
    }
    const theinput = 'testing';
    return (
        <>
            <textarea name="myInput" />
            <button onClick={()=>console.log('haha')}>test</button>
            <button onClick={()=>log({myInput})}>test2</button>
        </>
    );
}
