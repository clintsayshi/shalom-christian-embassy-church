import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Banner from "../components/banner";
import Layout from "../components/layout";

function Donations() {
  return (
    <Layout>
      <Banner title="Give" img="../images/hero-bg.jpg" />

      <div class="container mx-auto h-px w-full my-4"></div>

      <section>
        <div class="container mx-auto flex flex-col gap-2 sm:items-center">
          <h2 class="text-2xl text-center text-secondary-color">
            Make a contribution
          </h2>
          <p class="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            similique commodi alias, accusantium at quia consequuntur laborum
            repellendus rerum, odio doloremque sequi quaerat! Quibusdam, quo.
          </p>
        </div>
      </section>

      <div class="container mx-auto h-px my-8"></div>

      <section>
        <div className="container mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <StaticImage
            className="block h-60 md:h-64 w-full sm:w-2/5 object-cover"
            src="../images/drake.JPG"
            alt=""
          />

          <div className="flex-1">
            <h2 className="text-xl capitalize text-secondary-color">
              Ways to give
            </h2>
            <p className="my-3 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium soluta fuga accusamus molestias necessitatibus quos
              reiciendis autem laboriosam voluptatem? Totam.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto h-px my-8"></div>
    </Layout>
  );
}

export default Donations;
