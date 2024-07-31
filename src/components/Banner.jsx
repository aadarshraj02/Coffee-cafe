const bgImage = {
  backgroundImage: "url('../../public/website/coffee-texture.jpg')",
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
      <div style={bgImage}>
        <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <img
                className="max-w-[430px] w-full mx-auto spin drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)]"
                src="../../public/coffee-white.png"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 className="text-3xl sm:text-4xl font-bold font-cursive">
                Premium Blend Coffee
              </h1>
              <p className="text-sm text-gray-500 tracking-wider leading-5">
                Although the term 'premium' isn't a standard, a blend marketed
                as 'luxury' or 'Premium' should contain a high proportion of of
                Arabica, or even be 100% Arabica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
