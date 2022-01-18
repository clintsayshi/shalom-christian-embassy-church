import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Banner from "../components/banner";
import Layout from "../components/layout";

function ServiceTimes() {
  return (
    <Layout>
      <Banner title="Church Service Times" img="../images/hero-bg.jpg" />

      <div className="container mx-auto h-px w-full my-4"></div>

      <section>
        <div className="container mx-auto flex flex-col gap-2 sm:items-center">
          <h2 className="text-xl text-center">Sunday Main Service</h2>
          <p className="text-center">10:30 AM - 13:00 PM</p>
        </div>
      </section>

      <div className="container mx-auto h-px w-full my-8"></div>

      <section>
        <div className="container w-full mx-auto flex flex-col sm:flex-row gap-4 sm:gap-8 sm:items-center">
          <StaticImage
            className="block h-40 sm:h-64 sm:py-4 w-full sm:flex-1"
            src="../images/drake.JPG"
            alt=""
          />

          <div className="flex flex-col flex-1 gap-4 items-center sm:items-start">
            <h2 className="text-xl text-center sm:text-left">Sunday Schools</h2>
            <div className="w-full flex flex-row justify-between">
              <h4 className="text-base font-medium">Elders School</h4>
              <span className="text-sm text-gray-800">10:30 AM - 13:00 PM</span>
            </div>

            <div className="w-full flex flex-row justify-between">
              <h4 className="text-base font-medium">Children Ministry</h4>
              <span className="text-sm text-gray-800">10:30 AM - 13:00 PM</span>
            </div>
            <div className="w-full flex flex-row justify-between">
              <h4 className="text-base font-medium">Pastor's className</h4>
              <span className="text-sm text-gray-800">10:30 AM - 13:00 PM</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto h-px w-full my-8 bg-gray-100 sm:bg-transparent"></div>

      <section>
        <div className="container mx-auto flex flex-col gap-4 sm:items-center">
          <h2 className="text-xl text-center">Weekday Services</h2>
          <div className="flex flex-row flex-wrap gap-2 sm:gap-4">
            <article className="h-36 w-full sm:w-44 p-4 flex flex-col justify-between bg-green-200">
              <h4 className="text-base font-medium">Fasting and Prayer days</h4>

              <div>
                <p className="text-sm">Monday</p>
                <time className="text-xs">10:30 AM - 13:00 PM</time>
              </div>
            </article>
            <article className="h-36 w-full sm:w-44 p-4 flex flex-col justify-between bg-green-200">
              <h4 className="text-base font-medium">Fasting and Prayer days</h4>

              <div>
                <p className="text-sm">Monday</p>
                <time className="text-xs">10:30 AM - 13:00 PM</time>
              </div>
            </article>
          </div>
        </div>
      </section>

      <div className="container mx-auto h-px w-full my-8"></div>
    </Layout>
  );
}

export default ServiceTimes;
