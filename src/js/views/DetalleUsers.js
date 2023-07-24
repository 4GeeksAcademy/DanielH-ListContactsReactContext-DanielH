import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import { useParams } from "react-router-dom";


export const DetalleUsers = () => {
  const params = useParams();
  console.log(params);
  const id = params.theid;
  console.log(id)
  const UserView = JSON.parse(localStorage.getItem('usersLocal'));
  console.log('userView:', UserView)
 return (
  
      <div className="card" style="width: 18rem;">
          <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">User: {id} </h5><h1>{UserView[id].name} </h1>
            <p className="card-text">Un texto de ejemplo rápido para colocal cerca del título de la tarjeta y componer la mayor parte del contenido de la tarjeta.</p>
            <a href="#" className="btn btn-primary">Ir a algún lugar</a>
        </div>
    </div>
 )


}