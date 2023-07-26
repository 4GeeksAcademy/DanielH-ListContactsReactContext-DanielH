import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";



export const Usuarios = () => {
    // const [users, setUsers] = useState([]);
    const [errores, setErrores] = useState("");
    const host = "https://jsonplaceholder.typicode.com/";
    const [ users, setUsers] = useState([]);

    
    const getUsers = async  () => {
     
    if (localStorage.getItem("usersLocal") !== null) {
      setUsers(JSON.parse(localStorage.getItem("usersLocal")))
    }else {   

        const response = await fetch ("https://jsonplaceholder.typicode.com/users")
          console.log(response);
        if (response.ok) {
            const data = await response.json()
            console.log(data);
            setUsers(data);
            localStorage.setItem("usersLocal", JSON.stringify(data))

        }  else {
            console.log("error: ", response.status, response.statusText);
            setErrores("error: " + response.status + " " + response.statusText);
            setUsers(JSON.parse(localStorage.getItem("usersLocal")))       
           }
    }

    }

    useEffect(() => {
        getUsers();
    }, [])

   

    return (
      <div className="container">
        <h1 className="text-primary">Nombres de Usuarios</h1>
        <hr></hr>
        {!users ? (
          "Leyendo Datos"
        ) : (
          users.map((user, index) => (
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-2 text-center">
                  <img
                    src="https://xsgames.co/randomusers/assets/avatars/pixel/35.jpg"
                    className="card-img-top"
                    alt={user.id}
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h5 className="card-title">
                      <strong>{user.id}</strong> {user.name}
                    </h5>
                    <p className="card-subtitle">Compañía: {user.company.name}</p>
                    <p className="card-subtitle">Website: {user.website}</p>
                    <p className="cart-subtitle">Telefono: {user.phone} </p>
                  </div>
                  <div className="col-md-3 text-end">
                    <div className="card-body me-3">
                      <Link to={`/usuarios/${user.id}`}>
                        <button className="btn btn-primary">Saber más</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <hr></hr>
            </div>
          ))
        )}
        
      </div>
    );
  };


