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
        /*if(Object.keys(todo).length === 0 || todo.todo.trim()===''){
            alert('el campo no puede estar vacio')
            return
        }*/
        
        alert('estoy entrando a cambiar el valor' + todo.todo)
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