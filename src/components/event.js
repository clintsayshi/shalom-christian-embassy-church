import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

function Event({ event }) {
  return (
    <article className="flex flex-col sm:flex-row gap-4 sm:gap-8">
      <StaticImage className="h-56 w-full" src="../images/home.jpg" alt="" />

      <div className="flex flex-col gap-2">
        <h4 className="text-base font-medium uppercase text-secondary-color">
          Leadership Conference
        </h4>

        <div className="flex flex-row items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-sm text-gray-700">30 Nov 2021</span>
        </div>

        <div className="flex flex-row items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-sm text-gray-700">10:30 AM - 14:00 PM</span>
        </div>

        <div className="flex flex-row items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-sm text-gray-700">
            Shalom Christian Embassy Church
          </span>
        </div>

        <p className="text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea mollitia
          perferendis consectetur molestiae nihil numquam non sunt fugiat
          accusamus quisquam?
        </p>
      </div>
    </article>
  );
}

export default Event;
