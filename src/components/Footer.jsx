import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const footerLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const bgImage = {
  backgroundImage: "url('../../public/website/coffee-footer.jpg')",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};

const Footer = () => {
  return (
    <div style={bgImage} className="text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          <div>
            <a
              href="#"
              className="font-semibold tracking-widest text-wxl sm:text-3xl font-cursive"
            >
              Coffee Cafe
            </a>
            <p className="pt-4 ">
              Crafted Coffee, Cozy Vibes, Unforgettable Moments - Your Perfect
              Espresso Escape
            </p>
            <a
              href="#"
              className="inline-block bg-[#3d2517] py-2 px-4 mt-5 text-sm rounded-full"
            >
              Visit Our Youtube Channel
            </a>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
