import { GrSecure } from "react-icons/gr";
import { LuCoffee } from "react-icons/lu";
import { SiBuymeacoffee } from "react-icons/si";

const bgImage = {
  backgroundImage: "url('/website/coffee-texture.jpg')",
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Banner = () => {
  return (
    <>
      <span id="about"></span>
      <div style={bgImage}>
        <div className="container min-h-[620px] flex justify-center items-center py-12 sm:py-0 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div data-aos="zoom-in">
              <img
                className="max-w-[430px] w-full mx-auto spin drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)]"
                src="/coffee-white.png"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-cursive"
              >
                Premium Blend Coffee
              </h1>
              <p
                data-aos="fade-up"
                className="text-sm text-gray-500 tracking-wider leading-5"
              >
                Nothing kick starts your day like a fresh cup of roasted premium
                coffee. At Premium Coffee Company our passion is coffee and our
                focus is quality.
              </p>
              <div className="grid grid-cols-2 gap-6 ">
                <div className="space-y-5">
                  <div data-aos="fade-up" className="flex items-center gap-3">
                    <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 " />
                    <span>Premium Coffee </span>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="flex items-center gap-3"
                  >
                    <LuCoffee className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 " />
                    <span>Hot Coffee </span>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-offset="0"
                    className="flex items-center gap-3"
                  >
                    <SiBuymeacoffee className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100 " />
                    <span>Cold Coffee </span>
                  </div>
                </div>
                <div
                  data-aos="slide-left"
                  className="space-y-3 border-l-4 border-primary/50 pl-6"
                >
                  <h1 className="text-2xl font-semibold font-cursive">
                    Tea Lover
                  </h1>
                  <p className="text-gray-500 text-sm">
                    Much like writing code, brewing the perfect cup of tea
                    requires patience, precision, and a dash of passion to
                    create a comforting blend of flavors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
