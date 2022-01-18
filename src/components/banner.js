import { StaticImage } from "gatsby-plugin-image";
import React from "react";

function Banner({ img, title }) {
  return (
    <section className="relative bg-white-200">
      <StaticImage
        className="absolute w-full h-full inset-0 opacity-30"
        src="../images/home.jpg"
        alt=""
      />
      <div className="container relative mx-auto py-14 md:py-20 flex flex-col justify-center">
        <h1 className="text-2xl uppercase text-center font-medium">{title}</h1>
      </div>
    </section>
  );
}

export default Banner;
