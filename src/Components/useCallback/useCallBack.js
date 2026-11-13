import React,{useState, useCallback} from 'react'
import Todos from './Todos';
import Todos1 from './Todos1';

 const UseCallBackComponent = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
  
    const increment = () => {
      setCount(count + 1);
    };

    const addTodo = useCallback(() => {
      setTodos((t) => [...t, "New Todo"]);
    }, [todos]);
  

   


    return (
      <>
        <Todos todos={todos} addTodo={addTodo} />

        <hr />
        <Todos1/>

        <div>
          Count: {count}

          <button onClick={increment}>+</button>
        </div>
      </>
    );
  };

  export default UseCallBackComponent;