import React, {useEffect, useState} from "react";


function CounterFunction(props) {

    const [count, setCount] = useState(props.count);

    // Só será atualizado quando uma vez
    useEffect(()=>{
        setCount(parseInt(localStorage.getItem("count")))

        return () => {
            console.log('não tem mais count')
        }

    }, [])

    // Quando o componente for:
    // Criado e Atualizado
    useEffect(() => {
        document.title = count
        localStorage.setItem("count", count);
    }, [count]);

    function add() {
        setCount(count + 1)
    }

    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={add}>add</button>
        </div>
    );
}

export default CounterFunction
