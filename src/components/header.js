import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const defMenuCSS = `sm:hidden absolute pb-6 opacity-0 pointer-events-none transform -translate-y-12`;
  const openedMenuCSS = `sm:hidden relative pb-6 opacity-100 pointer-events-auto transform translate-y-0 transition-transform bg-slate-100`;
  const dropdownUp = `absolute flex flex-col transition-transform duration-400 transform -translate-y-6 opacity-0 pointer-events-none`;
  const dropdownDropped = `relative sm:absolute flex flex-col transition-transform opacity-100 pointer-events-auto sm:top-full sm:w-max sm:shadow sm:bg-white`;

  return (
    <header className="z-20">
      <nav className="container mx-auto relative flex justify-between">
        <div className="relative w-20 py-2">
          <StaticImage
            className="block  h-full"
            src="../images/logo-md.png"
            alt=""
          />
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <Link
            to="/"
            onClick={closeMenu}
            className="block w-full sm:w-auto py-2 px-4 sm:px-2 sm:text-xs font-medium uppercase bg-white hover:bg-gray-100"
          >
            Home
          </Link>
          <div
            className="w-full sm:w-auto relative"
            role="button"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <button className="group w-full py-2 px-4 sm:px-2 flex items-center gap-2 bg-white hover:bg-gray-100">
              <p className="block sm:text-xs font-medium uppercase">New Here</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  dropdown ? `hidden` : `inline-block`
                } transition-all duration-100 h-4 w-4`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  dropdown ? `inline-block` : `hidden`
                } transition-all duration-100 h-4 w-4`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
            <div className={dropdown ? dropdownDropped : dropdownUp}>
              {React.Children.toArray(
                [
                  ["Who we are", "/about"],
                  ["Ministries", "/ministries"],
                  ["Service Times", "/service-times"],
                ].map(([title, url]) => (
                  <Link
                    onClick={closeMenu}
                    className="px-3 p-2 text-sm bg-white hover:bg-gray-100"
                    to={url}
                  >
                    {title}
                  </Link>
                ))
              )}
            </div>
          </div>

          {React.Children.toArray(
            [
              ["Contact", "/contact"],
              ["Give", "/donations"],
              ["Events", "/events"],
              ["Gallery", "/gallery"],
            ].map(([title, url]) => (
              <Link
                to={url}
                onClick={closeMenu}
                className="block w-full sm:w-auto py-2 px-4 sm:px-2 sm:text-xs font-medium uppercase bg-white hover:bg-gray-100"
              >
                {title}
              </Link>
            ))
          )}
        </div>

        <button onClick={handleMenu} className="sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      <nav className={isMenuOpen ? openedMenuCSS : defMenuCSS}>
        <div className="container mx-auto flex flex-col">
          <Link
            to="/"
            onClick={closeMenu}
            className="inline-block py-4 sm:text-xs font-medium uppercase text-base"
          >
            Home
          </Link>
          <div
            onClick={() => setDropdown(!dropdown)}
            role="button"
            className="py-4 cursor-pointer"
          >
            <button
              onClick={() => setDropdown(!dropdown)}
              className="flex items-center gap-2"
            >
              <p className="block sm:text-xs font-medium uppercase">New Here</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  dropdown ? `hidden` : `inline-block`
                } transition-all duration-100 h-4 w-4`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  dropdown ? `inline-block` : `hidden`
                } transition-all duration-100 h-4 w-4`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
            {
              <div className={dropdown ? dropdownDropped : dropdownUp}>
                {React.Children.toArray(
                  [
                    ["Who we are", "/about"],
                    ["Ministries", "/ministries"],
                    ["Service Times", "/service-times"],
                  ].map(([title, url]) => (
                    <Link onClick={closeMenu} className="py-3" to={url}>
                      {title}
                    </Link>
                  ))
                )}
              </div>
            }
          </div>

          {React.Children.toArray(
            [
              ["Contact", "/contact"],
              ["Give", "/donations"],
              ["Events", "/events"],
              ["Gallery", "/gallery"],
            ].map(([title, url]) => (
              <Link
                to={url}
                onClick={closeMenu}
                className="inline-block py-4 text-base sm:text-xs font-medium uppercase"
              >
                {title}
              </Link>
            ))
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
