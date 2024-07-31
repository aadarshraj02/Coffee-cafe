const Home = () => {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="order-2 sm:order-1">
            <h1 className="text-5xl  sm:text-6xl lg:text-7xl font-bold">
              We serve the richest{" "}
              <span className="font-cursive text-primary">coffee</span> in the
              city
            </h1>
            <div>
              <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-4 py-2 mt-10 text-white hover:scale-105 duration-200 ">
                Coffee And Code
              </button>
            </div>
          </div>
          <div className="relative min-h-[400px] flex  justify-center items-center order-1 sm:order-2 lg:ml-10">
            <img
              src="../../public/coffee2.png"
              alt=""
              className=" w-[300px] sm:w-[400px] sm:scale-125 mx-auto spin "
            />
            <div className="hidden xl:block bg-gradient-to-r from-primary to-secondary absolute top-10 left-10 p-3 rounded-xl">
              <h1>Hey Coder</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
