import Slider from "react-slick";
const testimonialData = [
  {
    id: 1,
    name: "Unknown",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/200",
  },
  {
    id: 2,
    name: "Identity Hidden",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/202",
  },
  {
    id: 3,
    name: "Random Person",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/204",
  },
  {
    id: 4,
    name: "Hidden",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/203",
  },
];
const Testimonial = () => {
  return (
    <div>
      <div className="container mb-10 py-14 ">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">
            Testimonials
          </h1>
        </div>
        <div>
          <Slider></Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
