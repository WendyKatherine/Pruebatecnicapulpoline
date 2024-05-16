import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { navigation } from "../constants/index";
import { useState } from "react";

import restaurante from "../assets/restaurante.png";

const Sidebar = () => {
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
      className={`sm:hidden md:hidden lg:block xl:block lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="custom-gradient">
        <div className="h-full flex flex-col flex-nowrap justify-evenly pt-4 pb-4">
          <a className="block px-4" href="#hero">
            <img src={restaurante} width={50} height={50} alt="Logo" />
          </a>

          <nav className="fixed top-0 bottom-0 left-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
            <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-column">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase font-bold text-white transition-colors hover:text-color-1                  } px-0 py-3 md:py-4 lg:text-xs lg:font-semibold ${
                    item.url === pathname.hash
                      ? "z-2 lg:text-white"
                      : "lg:text-white/50"
                  } lg:leading-5 lg:hover:text-white xl:px-0`}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
