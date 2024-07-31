import { HeroImg } from "../assets/coffee2.png";

const Home = () => {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div>
            <h1 className="text-5xl  sm:text-6xl lg:text-7xl font-bold">
              We serve the richest{" "}
              <span className="font-cursive text-primary">coffee</span> in the
              city
            </h1>
            <div>
              <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-4 py-2 text-white hover:scale-105 duration-200 ">
                Coffee And Code
              </button>
            </div>
          </div>
          <div>
            <img src={HeroImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
