import React from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Image from "./components/Image";
import GoodsCard from "./components/GoodsCard";

function App() {
  const goods = [
    {
      id: 1,
      name: "Ноутбук Lenovo",
      price: 25000,
      image: "https://content1.rozetka.com.ua/goods/images/big/574640839.jpg",
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      price: 45000,
      image: "https://content2.rozetka.com.ua/goods/images/big/592111676.jpg",
    },
    {
      id: 3,
      name: "Навушники Sony",
      price: 3500,
      image: "https://content.rozetka.com.ua/goods/images/big/386436540.jpg",
    },
    {
      id: 4,
      name: "Клавіатура Razer",
      price: 4500,
      image: "https://content.rozetka.com.ua/goods/images/big/30403514.jpg",
    },
    {
      id: 5,
      name: "Монітор Samsung",
      price: 12000,
      image: "https://content2.rozetka.com.ua/goods/images/big/575063470.jpg",
    },
    {
      id: 6,
      name: "Миша Logitech",
      price: 2500,
      image: "https://content2.rozetka.com.ua/goods/images/big/594815351.jpg",
    },
  ];

  return (
    <div className="App">
      <div className="task">
        <h1>Завдання 1: Компоненти Header, Content, Image</h1>
        <Header />
        <Content />
        <Image />
      </div>

      <div className="task">
        <h1>Завдання 2: Галерея товарів</h1>
        <div className="goods-gallery">
          {goods.map((item) => (
            <GoodsCard
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
