import React,{useState} from 'react';
import Todo from '../components/Todo';
const Form=() => {
    const [todo,setTodo] = useState({})
    const [todos,setTodos]=useState([])
    const [nameO,setNameO]=useState("")
    const [valueO,setValueO]=useState("")    
    const handleChange = e => {
        setNameO(e.target.name)
        setValueO(e.target.value)
    }
    const qty = e => {
        setTodo({[nameO]:e.target.value+"-"+valueO})
    }
    const handleClick = e => {
        if(valueO.length === 0 || valueO.trim()===''){
            alert('el campo no puede estar vacio')
            return
        }
        setTodos([...todos,todo])
    }

    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice,1)
        setTodos(newTodos)
    }
    
    return (
        <>
        <form onSubmit={e => e.preventDefault()} >
                <label>Agregar Producto</label><br />
                <input type="text" name="todo" onChange={handleChange} />
                <label>Agregar Cantidad</label><br />
                <input type="text" name="qty" onChange={qty} />
                <button onClick={handleClick}>Agregar</button>
        </form>
        {           
            todos.map((value,index) => (<Todo todo={value} key={index} index={index} deleteTodo={deleteTodo} />))
        }
        </>
    )
}


export default Form