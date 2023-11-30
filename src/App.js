import "./App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";

function App() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="App">
      <div className="main">
        <Slider {...settings}>
          <div className="slide sl1" style={{ background: "blue" }}>
            <img src={img1} alt="img1" />
          </div>
          <div className="slide sl2" style={{ background: "green" }}>
            <img src={img2} alt="img1" />
          </div>
          <div className="slide" style={{ background: "red" }}>
            <img src={img3} alt="img1" />
          </div>
          <div className="slide" style={{ backgroundColor: "black" }}>
            <img src={img4} alt="img1" />
          </div>
          <div className="slide" style={{ backgroundColor: "orange" }}>
            <img src={img5} alt="img1" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default App;
