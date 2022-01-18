import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import {
  FiInstagram,
  FiFacebook,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="pt-4 bg-gray-100">
      <div
        className={`container mx-auto py-4 flex flex-col sm:flex-row sm:items-start sm:justify-between`}
      >
        <div className="relative w-20 py-2">
          <StaticImage
            className="block h-full"
            src="../images/logo-md.png"
            alt="Shalom Christian Embassy Logo"
          />
        </div>

        <div className="flex flex-col gap-4 sm:gap-2">
          <a className="flex flex-row items-center gap-3" href="/">
            <FiMapPin className="text-sm" />
            <span className="text-sm  text-gray-700 hover:text-black">
              Anderson park ave
            </span>
          </a>
          <a className="flex flex-row items-center gap-3" href="/">
            <FiMail className="text-sm" />
            <span className="text-sm text-gray-700 hover:text-black">
              shalomce@gmail.com
            </span>
          </a>
          <a className="flex flex-row items-center gap-3" href="/">
            <FiPhone className="text-sm" />
            <span className="text-sm text-gray-700 hover:text-black">
              0534354234
            </span>
          </a>
        </div>

        <div className="mx-auto h-px w-full my-4 bg-gray-100 sm:hidden"></div>

        <div className="flex flex-col gap-4 sm:gap-2">
          <Link className="text-sm text-gray-700 hover:text-black" to="/">
            Who we are
          </Link>
          <Link className="text-sm text-gray-700 hover:text-black" to="/">
            Ministries
          </Link>
          <Link className="text-sm text-gray-700 hover:text-black" to="/">
            Service Times
          </Link>
          <Link className="text-sm text-gray-700 hover:text-black" to="/">
            Events
          </Link>
        </div>

        <div className="mx-auto h-px w-full my-4 bg-gray-100 sm:hidden"></div>

        <div className="flex flex-col gap-4 sm:gap-2">
          <Link className="text-sm text-gray-700 hover:text-black" to="/">
            Contact
          </Link>
          <Link className="text-sm text-gray-700 hover:text-black" to="/">
            Gallery
          </Link>
          <Link className="text-sm text-gray-700 hover:text-black" to="/">
            Donations
          </Link>
        </div>

        <div className="mx-auto h-px w-full my-4 bg-gray-100 sm:hidden"></div>

        <div className="flex flex-col gap-4 sm:gap-2">
          <a className="flex flex-row items-center gap-3" href="/">
            <FiInstagram className="text-sm" />
            <span className="text-sm text-gray-700 hover:text-black">
              shalomce
            </span>
          </a>
          <a className="flex flex-row items-center gap-3" href="/">
            <FiFacebook className="text-sm" />
            <span className="text-sm text-gray-700 hover:text-black">
              shalomce
            </span>
          </a>
        </div>
      </div>
      <div className="container mx-auto h-px bg-gray-300"></div>
      <div className="pb-8 pt-2">
        <p className="container mx-auto text-sm font-medium text-gray-800">
          &copy; Shalom Christian Embassy {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
