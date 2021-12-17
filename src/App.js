import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import React, { useState } from "react";

import img1 from "../src/img/cars/img (1).jpg";
import img2 from "../src/img/cars/img (2).jpg";
import img3 from "../src/img/cars/img (3).jpg";
import img4 from "../src/img/cars/img (4).jpg";
import img5 from "../src/img/cars/img (5).jpg";
import img6 from "../src/img/cars/img (6).jpg";
import img7 from "../src/img/cars/img (7).jpg";
import img8 from "../src/img/cars/img (8).jpg";
import img9 from "../src/img/cars/img (9).jpg";
import img10 from "../src/img/cars/img (10).jpg";
import img11 from "../src/img/cars/img (11).jpg";
import img12 from "../src/img/cars/img (12).jpg";
import img13 from "../src/img/cars/img (13).jpg";
import img14 from "../src/img/cars/img (14).jfif";
import CarCart from "./components/Home/CarCart";
import Cart from "./components/Cart/Cart";
import Favourite from "./components/Fav/Favourite";

function App() {
  const [CarData, setCarData] = useState([
    {
      id: 1,
      name: "BMW",
      img: img1,
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      id: 2,
      name: "Mercedes",
      img: img2,
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      id: 3,
      name: "Subaru",
      img: img3,
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      id: 4,
      name: "RangeRover",
      img: img4,
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      id: 5,
      name: "Chevrolet",
      img: img5,
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      id: 6,
      name: "Reno",
      img: img6,
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      id: 7,
      name: "Mercedes",
      img: img7,
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      id: 8,
      name: "BMW",
      img: img8,
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      id: 9,
      name: "Ferrari",
      img: img9,
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      id: 10,
      name: "BMW",
      img: img10,
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      id: 11,
      name: "Lamborchini",
      img: img11,
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      id: 12,
      name: "Ferrari",
      img: img12,
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      id: 13,
      name: "BMW",
      img: img13,
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      id: 14,
      name: "Mercedes",
      img: img14,
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
  ]);

  const [Input, setInput] = useState("");
  const ChangeInput = (e) => {
    setInput(e.target.value);
    console.log(Input);
  };

  const InputData = CarData.filter((item) => item.name.startsWith(Input));

  const [CarOfCart, setCarOfCart] = useState([]);
  const [CarOfFav, setCarOfFav] = useState([]);

  const addCart = (id) => {
    if (!CarOfCart.includes(id)) {
      setCarOfCart([...CarOfCart, id]);
    }
  };

  const addFav = (id) => {
    if (!CarOfFav.includes(id)) {
      setCarOfFav([...CarOfFav, id]);
    }
  };

  const removeCar = (id) => {
    setCarOfCart(CarOfCart.filter((item) => item != id));
  };

  const removeCarOnFav = (id) => {
    setCarOfFav(CarOfFav.filter((item) => item != id));
  };

  return (
    <div className="App">
      <div className="container">
        <Header
          Input={Input}
          ChangeInput={ChangeInput}
          Cars={CarOfCart.length}
          Favs = {CarOfFav.length}
        ></Header>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                addCart={addCart}
                addFav={addFav}
                CarData={Input == "" ? CarData : InputData}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                CarOfCart={CarOfCart}
                CarData={CarData}
                Remove={removeCar}
                addFav={addFav}
              />
            }
          />
          <Route
            path="/favourite"
            element={
              <Favourite
                CarOfFav={CarOfFav}
                CarData={CarData}
                Remove={removeCarOnFav}
                addCart={addCart}
              />
            }
          />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
