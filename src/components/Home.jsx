import SlideShow from "./subCompHomePage/SlideShow";
import AboutUs from "./subCompHomePage/AboutUs";
import Carousel from "./subCompHomePage/Carousel";
import Card from "./subCompHomePage/Card";

const Home = () => {
  return (
    <div>
      <SlideShow />
      <AboutUs/>
      <Carousel />
      <Card />
    </div>
  );
};

export default Home;