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
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <img src="../../public/coffee-white.png" alt="" />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
