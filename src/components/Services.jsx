const Services = () => {
  const servicesData = [
    {
      id: 1,
      img: "../../public/coffee2.png",
      name: "Espresso",
      description:
        "Espresso is a concentrated form of coffee, served in shots. It's made of two ingredients - finely ground, 100% coffee, and hot water. ",
      aosDelay: "100",
    },
    {
      id: 2,
      img: "../../public/coffee2.png",
      name: "Americano",
      description:
        "An americano is just water and espresso. It'll either be served 1/2 and 1/2 or 1/3 espresso to 2/3 water",
      aosDelay: "300",
    },
    {
      id: 3,
      img: "../../public/coffee2.png",
      name: "Cappuccino",
      description:
        "The cappuccino is a balanced coffee that’s a true test of any barista’s skills. Known for the even distribution of coffee and milk and served in a large cup with a dusting of chocolate on top",
      aosDelay: "500",
    },
  ];
  return (
    <div className="py-10">
      <div className="container">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">
            Best Coffee For You
          </h1>
        </div>
        <div>
          {servicesData.map((data, index) => (
            <div key={index} className="">
              <img src={data.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
