import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";


export const Posts = () =>{
    const [todos, setTodos] = useState([]);
    const [errores, setErrores] = useState("");
    const host = "https://jsonplaceholder.typicode.com/";

    const fetchTodo = async  () => {
        console.log(host);
        const url = host + "todos/";
        const request={
            method: "GET"
        }

        const responses = await fetch (url, request)
          console.log(responses);
        if (responses.ok) {
            const data = await responses.json()
            console.log(data);
            setTodos(data);

        }  else {
            console.log("error: ", responses.status, responses.statusText);
            setErrores("error: " + responses.status + " " + responses.statusText);
        }

        
        

    }
    useEffect(() => {
        fetchTodo();
        console.log(todos.completed)
    }, [])

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

    return (
<>
        <h1 className= "text-primary"> Post </h1>
<hr></hr>
    {errores ? <p>{errores}</p> :

    <ul > 
        {todos.map((todo, index) => {
            const todoClassName = todo.completed ? "completed" : "pending";
            return (
              <li key={index} className={todoClassName}>
                <strong>{todo.userId}</strong> - {todo.title} -{" "}
                <span>{todo.completed ? "Completado" : "Pendiente"}</span>{" "}
              </li>
            );
          })}
    </ul>
    }
    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
        
        <button type="button" className="btn btn-warning" onClick={handleScrollToTop}>Ir al Inicio</button>
       
    </div>
            
        </>
        
    );
};