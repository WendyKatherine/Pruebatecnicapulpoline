import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { navigation } from "../constants";
import Button from "../components/Button";
import MenuSvg from "../assets/svg/MenuSVG";
import { HamburgerMenu } from "../components/main/header";
import { useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`top-0 left-0 w-full z-5 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex px-1 py-5 lg:px-4 xl:px-5 max-lg:py-2">
        <div>
          <h2 className="text-2xl pb-4 pt-4 text-orange-500 font-extrabold">
            Food <span className="text-yellow-400">Health</span>
          </h2>
          <p>What you wanna eat today?</p>
        </div>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-1 py-2 md:py-2 lg:text-xs lg:font-semibold lg:hidden ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-2`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
          <div class="relative flex flex-col items-center justify-center sm:hidden md:hidden lg:flex xl:flex">
            <input
              type="text"
              class="w-[30rem] py-2 pr-10 pl-4 rounded-[100px] focus:outline-none focus:border-orange-500"
              placeholder="Buscar..."
            />
            <button
              type="submit"
              class="absolute right-0 px-4 py-2 bg-yellow-400 text-white rounded-r-[100px] hover:bg-blue-600"
            >
              Buscar
            </button>
          </div>
        </nav>

        <Button
          className="ml-auto lg:hidden bg-orange-500 rounded-[100px]"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
