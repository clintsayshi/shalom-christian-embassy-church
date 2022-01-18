import React from "react";
import Banner from "../components/banner";
import Layout from "../components/layout";

function Ministries() {
  //

  return (
    <Layout>
      <Banner title="Church Ministries" img="fdfdfdfd" />

      <div className="container mx-auto h-px sm:my-4"></div>

      <section class="container mx-auto sm:flex">
        <div class="w-56 h-screen hidden sm:flex flex-col justify-start">
          <nav class="w-full  sticky top-0">
            <a
              class="block p-2 capitalize font-medium hover:bg-gray-100"
              href="#item1"
            >
              Apostolic Alliance
            </a>
            <a class="block p-2 capitalize hover:bg-gray-100" href="#item2">
              Only Jesus Saves Ministry
            </a>
            <a class="block p-2 capitalize hover:bg-gray-100" href="#item3">
              Deepr Life Ministry
            </a>
            <a class="block p-2 capitalize hover:bg-gray-100" href="#item3">
              Deepr Life Ministry
            </a>
            <a class="block p-2 capitalize hover:bg-gray-100" href="#item3">
              Deepr Life Ministry
            </a>
            <a class="block p-2 capitalize hover:bg-gray-100" href="#item3">
              Deepr Life Ministry
            </a>
          </nav>
        </div>

        <div class="sm:w-2/3 sm:py-4 flex flex-col gap-4">
          <article id="item1" class="py-4 sm:pl-4 sm:shadow">
            <h4 class="mb-2 text-2xl">Apostolic Alliance</h4>
            <p class="text-sm ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
              quam aspernatur velit ab. Eius, saepe. Architecto minima possimus
              expedita enim molestiae atque asperiores, consequuntur, reiciendis
              ullam quia nostrum pariatur fugiat.
            </p>
          </article>

          <article id="item1" class="py-4 sm:pl-4 sm:shadow">
            <h4 class="mb-2 text-2xl">Apostolic Alliance</h4>
            <p class="text-sm ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
              quam aspernatur velit ab. Eius, saepe. Architecto minima possimus
              expedita enim molestiae atque asperiores, consequuntur, reiciendis
              ullam quia nostrum pariatur fugiat.
            </p>
          </article>
          <article id="item1" class="py-4 sm:pl-4 sm:shadow">
            <h4 class="mb-2 text-2xl">Apostolic Alliance</h4>
            <p class="text-sm ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
              quam aspernatur velit ab. Eius, saepe. Architecto minima possimus
              expedita enim molestiae atque asperiores, consequuntur, reiciendis
              ullam quia nostrum pariatur fugiat.
            </p>
          </article>
        </div>
      </section>

      <div className="container mx-auto h-px my-8"></div>
    </Layout>
  );
}

export default Ministries;
