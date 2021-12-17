import React from "react";

function CarCart(props) {
  return (
    <div className="col-3 mb-4">
      <div id = {props.Car.id} className="card" style={{ width: "18rem;" }}>
        <div className="img-block">
          <img
            className="card-img-top"
            src={props.Car.img}
            alt="Card image cap"
          ></img>
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.Car.name}</h5>
          <p className="card-text">{props.Car.text}</p>
          <a  href="#" className="btn add-to-cart" onClick = { () => props.btnCart(props.Car.id)}>
              {props.btnCartText}
          <i class="fas fa-shopping-cart"></i>
          </a>
          <a  href="#" className="btn add-to-fav" onClick = {() => props.btnFav(props.Car.id)}>
            {props.btnFavText}
          </a>
        </div>
      </div>
    </div>
  );
}

export default CarCart;
