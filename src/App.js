import "./App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="App">
      <div className="main">
        <Slider {...settings}>
          <div className="slide sl1" style={{ background: "blue" }}>
            <h2>Slide 1</h2>
          </div>
          <div className="slide sl2" style={{ background: "green" }}>
            <h2>Slide 2</h2>
          </div>
          <div className="slide" style={{ background: "red" }}>
            <h2>Slide 3</h2>
          </div>
          <div className="slide" style={{ backgroundColor: "black" }}>
            <h2>Slide 4</h2>
          </div>
          <div className="slide" style={{ backgroundColor: "orange" }}>
            <h2>Slide 5</h2>
          </div>
          <div className="slide" style={{ backgroundColor: "yellow" }}>
            <h2>Slide 6</h2>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default App;
