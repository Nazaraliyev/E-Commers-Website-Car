import React from 'react';
import CarCart from '../Home/CarCart'


function Favourite(props) {
    return (
        <main>
            <div className = 'row'>
                {
                    props.CarData.map(car => {
                        if(props.CarOfFav.includes(car.id)){
                            return(
                            <CarCart Car = {car} key = {car.id} btnCart = {props.addCart} btnFav = {props.Remove} btnCartText = 'Add Cart' btnFavText = "Remove" />
                            )
                        }
                    })

                }
            </div>
        </main>
    )
}

export default Favourite
