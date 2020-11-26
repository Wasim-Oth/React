
import React, {useState} from 'react';

function Counter (){
const [count, setCount] = useState(0);
function incremntCount() {
    setCount (count + 1)
}
const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";
return (
    <div>
        <Button increment = {incremntCount}/>
        <Count currentNumber = {count}/>
        <h3>{feedback}</h3>
    </div>
)
};

function Count({currentNumber}) {
    return <h2>{currentNumber}</h2>;
};

function Button({increment}) {
    return <button onClick= {increment}> add 1 </button>
};

export default Counter;