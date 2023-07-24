import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";



export const Usuarios = () => {
    const [users, setUsers] = useState([]);
    const [errores, setErrores] = useState("");
    const host = "https://jsonplaceholder.typicode.com/";

    const getUsers = async  () => {
        console.log(host);

        const response = await fetch ("https://jsonplaceholder.typicode.com/users")
          console.log(response);
        if (response.ok) {
            const data = await response.json()
            console.log(data);
            setUsers(data);

        }  else {
            console.log("error: ", response.status, response.statusText);
            setErrores("error: " + response.status + " " + response.statusText);
        }

    }

    useEffect(() => {
        getUsers();
    }, [])

   

    return (
  <>
    <h1 className= "text-primary"> Nombres de Usuarios</h1>
<hr></hr>
    {errores ? <p>{errores}</p> :

    <div className="card" style={{ width: "18rem" }} >
        { users.map( (user, index) => { 
            return <> <div className="card-body" key={index}>
              <img src="https://xsgames.co/randomusers/assets/avatars/pixel/35.jpg" className="card-img-top" alt={user.id}></img>  
              <h5 className="card-title"> <strong>{user.id}</strong> {user.name}</h5>
              <p className="card-text">Comapañia: {user.company.name}</p>
              <p className="card-text">Website: {user.website}</p>
              <Link to={"/usuarios/" + index}>
              <button  className="btn btn-primary">Ir a algún lugar</button>
              </Link>
            </div>
            <hr></hr>
            </>
        })}
       
    </div> 
    }
    <hr></hr>
    
   </>

    )




}

/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title" key="{index}"> <strong>{user.id}</strong> {User.Name}</h5>
    <p class="card-text">{user.company.name}</p>
    <p class="card-text">Website{user.website}</p>
    <a href="#" class="btn btn-primary">Ir a algún lugar</a>
  </div>
</div> */