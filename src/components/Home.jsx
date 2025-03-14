import SlideShow from "./subCompHomePage/SlideShow";
import AboutUs from "./subCompHomePage/AboutUs";
import Carousel from "./subCompHomePage/Carousel";
import Card from "./subCompHomePage/Card";
import ContactHome from './subCompHomePage/Contact-home';

const Home = () => {
  return (
    <div>
      <SlideShow />
      <AboutUs/>
      <Carousel />
      <ContactHome/>
      <Card />
    </div>
  );
};

export default Home;