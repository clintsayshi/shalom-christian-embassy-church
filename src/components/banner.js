import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

function Banner({ image, title }) {
  return (
    <section className="relative bg-white-200">
      <GatsbyImage
        className="absolute w-full h-full inset-0 opacity-30"
        image={image}
        alt=""
      />
      <div className="container relative mx-auto py-14 md:py-20 flex flex-col justify-center">
        <h1 className="text-2xl uppercase text-center font-medium">{title}</h1>
      </div>
    </section>
  );
}

export default Banner;
