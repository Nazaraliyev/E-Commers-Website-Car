import React from 'react'
import CarCart from '../Home/CarCart'

function Cart(props) {
    return (
        <main>
            <div className = 'row'>
                {
                    props.CarData.map(car => {
                        if(props.CarOfCart.includes(car.id)){
                            return(
                            <CarCart Car = {car} key = {car.id} btnCart = {props.Remove} btnCartText = 'Remove ' btnFav = {props.addFav} btnFavText = "Add Fav" />
                            )
                        }
                    })

                }
            </div>
        </main>
    )
}

export default Cart
