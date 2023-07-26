import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import { useParams } from "react-router-dom";


export const DetalleUsers = () => {

        const params = useParams();
       
        const id = params.id - 1;
        console.log(params.id);
        const userView = JSON.parse(localStorage.getItem(`usersLocal`));
        console.log( userView);



 return (

      <div className="card container" >
          <img
                    src="https://xsgames.co/randomusers/assets/avatars/pixel/35.jpg"
                    className="card-img-top mb-3"
                    alt={userView.id}
                  />
        <div className="card-body">
            <h5 className="card-title">Usuario : {id +1} </h5>                      
            <h1 className="card-text">{userView[id].name}</h1>
            <hr></hr>
            <h2 className="cart-text">Nombre usuario: {userView[id].username}</h2>
            <h3 className="cart -text">{userView[id].email}</h3>
            <h3 className="cart -text">{userView[id].phone}</h3>
            <h3 className="cart -text">Ciudad : {userView[id].address.city}, Codigo postal : {userView[id].address.zipcode} </h3>
            <p className="cart -text">Empresa : {userView[id].company.name}</p>
            <p className="cart -text">Puesto : {userView[id].company.catchPhrase}</p>
     
        </div>
        <div className="btn-group mb-3  top-50 start-50" role="group" aria-label="Basic outlined example">

				<Link to="/">
				<button type="button" className="btn btn-outline-primary">Home</button>
				</Link>

				<Link to="/post">
				<button type="button" className="btn btn-outline-primary">Posts</button>
				</Link>

			</div>
    </div>
 )


}