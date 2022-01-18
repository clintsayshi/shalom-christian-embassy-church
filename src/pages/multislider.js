import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

function MultiSlider() {
  const data = [
    {
      name: "simon",
      img: "../images/home.jpg",
    },
    {
      name: "neo",
      img: "../images/home.jpg",
    },
    {
      name: "morpheus",
      img: "../images/hero-bg.jpg",
    },
    {
      name: "trinity",
      img: "../images/pastor-sifundza.jpg",
    },
  ];
  const items = [
    "That the scriptures, both Old and New Testament are fully inspired by the Holy Spirit are the final authority for the church",
    "That our Lord Jesus Christ is fully God, but also fully a perfect man. He was born of a virgin",
    "Justification is by grace alone through the finished work on the Cross",
    "The church believes in the marriage of man and woman only (male to female)",
    "That the church as the body of Jesus Christ is composed of all true believers. The present work of the church is to glorify God. To obey him in everything and to preach the gospel to all people.",
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <Layout>
      <div className="container mx-auto">
        <Carousel swipeable={true} responsive={responsive}>
          {React.Children.toArray(
            data.map((person) => {
              return (
                <div className="w-full h-68 mr-4 border border-gray-300">
                  <StaticImage
                    className="w-full h-60"
                    src="../images/hero-bg.jpg"
                    alt=""
                  />
                  <h2 className="py-4">{person.name}</h2>
                </div>
              );
            })
          )}
        </Carousel>
      </div>

      <div class="container mx-auto my-8 h-px"></div>

      <section>
        <div className="py-8 flex flex-col items-center">
          <div className="container mx-auto pb-4">
            <p className="text-sm font-medium uppercase text-center">
              Our Statement of Faith
            </p>
            <h2 className="mt-1 mb-4 text-xl sm:text-2xl text-center">
              The SCE Church as body of Jesus Christ beleives
            </h2>
          </div>

          <div className="container mx-auto">
            <Carousel centerMode={true} responsive={responsive}>
              {React.Children.toArray(
                items.map((item) => {
                  return (
                    <div className="w-full h-68 pr-2">
                      <p className="text-base text-left font-normal p-2 shadow-md rounded border-gray-300">
                        {item}
                      </p>
                    </div>
                  );
                })
              )}
            </Carousel>
          </div>
        </div>
      </section>

      <div class="container mx-auto my-8 h-px"></div>

      <section>
        <div className="py-8 flex flex-col items-center"></div>
      </section>
    </Layout>
  );
}

export default MultiSlider;
