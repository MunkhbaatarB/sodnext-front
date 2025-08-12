"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openMobileIndex, setOpenMobileIndex] = useState(-1);
  const pathname = usePathname();
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState(-1);
  const [hoverIndex, setHoverIndex] = useState(-1);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };
  const handleSubmenuToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  const handleMainMenuClick = () => {
    setOpenMobileIndex(-1);
    setNavbarOpen(false);
  };

  const handleMobileSubmenuClick = (path: string) => {
    setNavbarOpen(false);
    setOpenMobileIndex(-1);
    router.push(path);
  };

  return (
    <header
      className={`header left-0 top-0 z-40 flex w-full items-center ${
        sticky
          ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          {/* LOGO */}
          <div className="w-60 max-w-full px-4 xl:mr-12">
            <Link
              href="/"
              className={`header-logo block w-full ${
                sticky ? "py-5 lg:py-2" : "py-8"
              }`}
            >
              <Image
                src="/images/logo/SOD black.PNG"
                alt="logo"
                width={140}
                height={30}
                className="w-full dark:hidden"
              />
              <Image
                src="/images/logo/SOD LOGO.PNG"
                alt="logo"
                width={140}
                height={30}
                className="hidden w-full dark:block"
              />
            </Link>
          </div>

          {/* MENU */}
          <div className="flex w-full items-center justify-around px-4">
            <div>
              {/* HAMBURGER */}
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? " top-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? " top-[-8px] -rotate-45" : ""
                  }`}
                />
              </button>

              {/* NAV MENU */}
              <nav
                id="navbarCollapse"
                className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                  navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                }`}
              >
                <ul className="block lg:flex lg:space-x-12">
                  {menuData.map((menuItem, index) => (
                    <li
                      key={index}
                      className="group relative"
                      onMouseEnter={() => {
                        if (window.innerWidth >= 1024) {
                          setHoverIndex(index);
                        }
                      }}
                      onMouseLeave={() => {
                        if (window.innerWidth >= 1024) {
                          setHoverIndex(-1);
                        }
                      }}
                    >
                      {/* Main item */}
                      {menuItem.path ? (
                        <Link
                          href={menuItem.path}
                          onClick={() => setNavbarOpen(false)}
                          className="block py-2 text-base font-medium text-gray-700 hover:text-primary dark:text-white/70 dark:hover:text-white"
                        >
                          {menuItem.title}
                        </Link>
                      ) : (
                        <button
                          className="flex w-full items-center justify-between py-2 text-base font-medium text-gray-700 hover:text-primary dark:text-white/70 dark:hover:text-white "
                          onClick={() => {
                            if (window.innerWidth < 1024) {
                              handleSubmenuToggle(index);
                            }
                          }}
                        >
                          {menuItem.title}
                          <svg
                            className="ml-2 h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      )}

                      {/* Submenu */}
                      {menuItem.submenu && (
                        <div
                          className={`lg:absolute lg:left-0 lg:top-full lg:z-50 lg:mt-2 lg:min-w-[200px] lg:rounded-lg lg:border lg:border-gray-100 lg:bg-white lg:p-3 lg:shadow-lg lg:transition-all lg:duration-300 lg:ease-in-out dark:lg:border-gray-700 dark:lg:bg-gray-800
        ${hoverIndex === index || openIndex === index ? "block" : "hidden"}`}
                        >
                          {menuItem.submenu.map((submenuItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={submenuItem.path}
                              className="group flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                              onClick={() => setNavbarOpen(false)}
                            >
                              <svg
                                className="h-4 w-4 text-gray-400 group-hover:text-primary dark:text-gray-500 dark:group-hover:text-white"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                              >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                              </svg>
                              {submenuItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Theme toggler */}
            <div className="flex items-center justify-end pr-16 lg:pr-0">
              <ThemeToggler />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
