import Logo from "../assets/website/coffee_logo.png";

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
        <div className="flex">
          <div>
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
            >
              <img src={Logo} alt="" className="w-14" />
              Coffee Cafe
            </a>
          </div>
          <div>
            <ul className="hidden sm:flex items-center gap-4">
              {menus.map((menu, index) => (
                <li key={index}>
                  <a
                    href={menu.link}
                    className="hover:text-secondary hover:underline"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
            <button>
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
