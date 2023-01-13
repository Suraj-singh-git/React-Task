import React from "react";

function task2() {
  return (
    <div>
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
  const foodList = [
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
  ];
  return (
    <div>
      <h2>Calorie Read Only</h2>
      <div className="itemBox">
        {foodList.map((food) => (
          <ItemBox food={food.name} cal={food.cal} />
        ))}
      </div>
    </div>
  );
}

function ItemBox(props) {
  return (
    <div className="items">
      <h2>{props.food}</h2>
      <hr />
      <p>you have consumed {props.cal} cals today</p>
    </div>
  );
}

export default task2;
