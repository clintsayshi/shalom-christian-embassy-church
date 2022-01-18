import React, { useState } from "react";

function Slider() {
  const [index, setIndex] = useState(0);
  const data = [
    {
      name: "simon",
      img: "https://imgur.com/c43aAlv.jpg",
      //img: "../images/hero-bg.jpg",
    },
    {
      name: "neo",
      img: "https://imgur.com/RF2a3PB.jpg",
      //img: "../images/home.jpg",
    },
    {
      name: "morpheus",
      img: "https://imgur.com/B0SNpZI.jpg",
      //img: "../images/pastor-sithole.JPG",
    },
    {
      name: "trinity",
      img: "https://imgur.com/KnXHM0K.jpg",
      //img: "../images/pastor-sifundza.jpg",
    },
  ];
  const slideLeft = () => {
    setIndex(index - 1);
  };

  const slideRight = () => {
    setIndex(index + 1);
  };

  const prevCard = {
    left: "calc(0% + 2rem)",
    opacity: "0",
  };
  const activeCard = {
    left: "50%",
    transform: "translateX(-50%)",
  };
  const nextCard = {
    left: "100%",
    transform: "translateX(calc(-100% - 2rem))",
    opacity: "0",
  };

  const Card = ({ name, img, cardStyle }) => {
    return (
      <article
        style={cardStyle}
        className="absolute m-4 w-28 h-64 transition-all duration-1000"
      >
        <img className="h-full object-cover" src={img} alt={name} />
        <h2>{name}</h2>
      </article>
    );
  };
  return (
    <div className="container">
      <div className="w-full h-full flex flex-row justify-center items-center">
        <button onClick={slideLeft}>Prev</button>
        <button onClick={slideRight}>Next</button>
        <div className="relative w-96 mx-auto ">
          {React.Children.toArray(
            data.map((person, n) => {
              let position =
                n > index ? nextCard : n === index ? activeCard : prevCard;
              return <Card {...person} cardStyle={position} />;
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Slider;
