import Logo from "../assets/website/coffee_logo.png";

const Navbar = () => {
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
