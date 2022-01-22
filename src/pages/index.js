import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { FiCode } from "react-icons/fi";
import Layout from "../components/layout";

// markup
const IndexPage = () => {
  // book-open-svg
  const BookOpen = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    );
  };

  return (
    <Layout>
      <section className="relative bg-white-300">
        <StaticImage
          className="absolute w-full h-full inset-0 opacity-30"
          src="../images/hero-bg.jpg"
          alt=""
        />
        <div className="container relative mx-auto h-96 md:h-96 flex flex-col justify-center z-10">
          <h1 className="text-4xl font-semibold text-black">
            Church for all nations
          </h1>
          <p className="py-4">
            Communicating the gospel of Jesus Christ in services of God, of one
            another and that of the world.
          </p>
          <Link
            to="/about"
            className="block w-max py-2 px-3 rounded-sm text-sm sm:text-sm capitalize text-white bg-secondary-color border-heading"
            href="#"
          >
            Learn more
          </Link>
        </div>
      </section>

      <section className="container mx-auto h-72 flex flex-col justify-center">
        <BookOpen />
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          repudiandae quam ipsam eos eaque alias?
        </p>
        <h4 className="text-sm uppercase font-medium">John 14:27</h4>
      </section>

      <section>
        <div className="container mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          {/*  <StaticImage
            className="block h-60 md:h-64 w-full sm:w-2/5 object-cover"
            src="../images/drake.JPG"
          /> */}

          <div className="flex-1 ">
            <h2 className="text-2xl text-secondary-color">Values</h2>
            <p className="my-3 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium soluta fuga accusamus molestias necessitatibus quos
              reiciendis autem laboriosam voluptatem? Totam.
            </p>
            <Link
              to="/about#mission-vision"
              className="block w-max py-2 px-3 rounded-sm bg-transparent text-sm sm:text-xs font-medium capitalize text-secondary-color border border-secondary-color"
            >
              Mission &amp; Vision
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto h-px w-full my-8 bg-gray-200"></div>

      <section>
        <div className="container mx-auto flex flex-col-reverse sm:flex-row items-center gap-4 sm:gap-6">
          <div className="flex-1 ">
            <h2 className="text-2xl text-secondary-color">What we believe</h2>
            <p className="my-3 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium soluta fuga accusamus molestias necessitatibus quos
              reiciendis autem laboriosam voluptatem? Totam.
            </p>
            <Link
              to="/about#what-we-believe"
              className="block w-max py-2 px-3 rounded-sm bg-transparent text-sm sm:text-xs font-medium capitalize text-secondary-color border border-secondary-color"
            >
              Statement of Faith
            </Link>
          </div>

          {/* <StaticImage
            className="block h-60 w-full sm:w-2/5 object-cover"
            src="../images/home.JPG"
          /> */}
        </div>
      </section>

      <div className="container mx-auto h-px w-full my-8 bg-gray-200"></div>

      <section>
        <div className="container mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          {/* <StaticImage
            className="block h-60 md:h-64 w-full sm:w-2/5 object-cover"
            src="../images/drake.JPG"
          /> */}

          <div className="flex-1 ">
            <h2 className="text-2xl text-secondary-color">Ministries</h2>
            <p className="my-3 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium soluta fuga accusamus molestias necessitatibus quos
              reiciendis autem laboriosam voluptatem? Totam.
            </p>
            <Link
              to="/ministries"
              className="block w-max py-2 px-3 rounded-sm bg-transparent text-sm sm:text-xs font-medium capitalize text-secondary-color border border-secondary-color"
            >
              Church Ministries
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto h-px my-8"></div>
    </Layout>
  );
};

export default IndexPage;
