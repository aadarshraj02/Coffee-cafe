import Logo from "../assets/website/coffee_logo.png";
import { SiCoffeescript } from "react-icons/si";

const Navbar = () => {
  const menus = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Services",
      link: "/#services",
    },
    {
      id: 3,
      name: "About",
      link: "/#about",
    },
  ];
  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
      <div className="container  ">
        <div className="flex justify-between items-center gap-4">
          <div>
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
            >
              <img src={Logo} alt="" className="w-14" />
              Coffee Cafe
            </a>
          </div>
          <div className="flex justify-between items-center gap-4">
            <ul className="hidden sm:flex items-center gap-4">
              {menus.map((menu, index) => (
                <li key={index}>
                  <a
                    className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                    href={menu.link}
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-3">
              Order <SiCoffeescript className="text-xl " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
