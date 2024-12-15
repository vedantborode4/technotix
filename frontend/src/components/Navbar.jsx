import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Btn from './btn';
import Logo from './Logo';

const Navbar = () => {
  const Links = [
    { name: 'Home', link: 'home' },
    { name: 'About', link: 'about' },
    { name: 'Services', link: 'services' },
    { name: 'Contact', link: 'contact' },
  ];
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false); // Close the menu after navigation (for mobile view)
  };

  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0 z-50">
        <div className="md:flex items-center justify-between bg-white py-2 md:px-10 px-7 opacity-80">
          <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
            <span className="text-3xl text-indigo-600 mr-1">
              <Logo />
            </span>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden"
          >
            <GiHamburgerMenu className={open ? 'close' : 'menu'} />
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-2 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? 'top-12 ' : 'top-[-490px]'
            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 text-base font-medium md:my-0 my-7"
              >
                <button
                  onClick={() => scrollToSection(link.link)}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {link.name}
                </button>
              </li>
            ))}
            <li className="hidden md:block md:ml-8 text-xl md:my-0 my-7">
              <Btn />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
