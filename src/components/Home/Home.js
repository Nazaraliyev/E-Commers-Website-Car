import React from 'react';
import CarCart from './CarCart';

function Home(props) {
    return (
        <main>
            <section id = 'home'>
                <div className = 'row'>
                    {
                        props.CarData.map( car => {
                            return(
                                <CarCart Car = {car} key = {car.id} 
                                btnCart = {props.addCart}
                                btnCartText = "Add Cart"
                                btnFav = {props.addFav}
                                btnFavText = "Add Fav"
                                ></CarCart>
                            )
                        })
                    }
                </div>
            </section>
        </main>
    )
}

export default Home
