import React, { useState } from "react";
import Navbar from "../components/Navbar";

function task5() {
  return (
    <div>
      <Navbar />
      <Header />
      <Section />
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1>instruction</h1>
      <ul>
        <li>build a container</li>
        <li>create a seperate function and use it as a component</li>
        <li>pass props "calory and food" and call it to main component</li>
      </ul>
    </div>
  );
}

function Section() {
  const [foodList, setElement] = useState([
    {
      name: "Rice",
      cal: 125,
    },
    {
      name: "Pizza",
      cal: 205,
    },
    {
      name: "Coke",
      cal: 155,
    },
    {
      name: "Brown",
      cal: 325,
    },
  ]);
  return (
    <div>
      <h2>
        Calorie Read Only{" "}
        <button className="countItem">{foodList.length}</button>
      </h2>
      <div className="itemBox">
        {foodList.map((food, index) => (
          <ItemBox
            food={food.name}
            cal={food.cal}
            foodList={foodList}
            setElement={setElement}
          />
        ))}
      </div>
    </div>
  );
}

function ItemBox(props) {
  var msg = "";
  if (props.cal < 150) {
    msg = "safe";
  } else if (props.cal <= 200) {
    msg = "normal";
  } else {
    msg = "danger";
  }
  return (
    <div className="items">
      <h2>
        {props.food} - {msg}{" "}
        <button
          className="DeleteBtn"
          onClick={() => {
            const temp = props.foodList.filter(
              (food) => props.food != food.name
            );
            props.setElement(temp);
          }}
        >
          Delete
        </button>
      </h2>
      <hr />
      <p>you have consumed {props.cal} cals today</p>
    </div>
  );
}

export default task5;
