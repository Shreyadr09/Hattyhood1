import Slider from "react-slick";

const ImageSlider = ({ imageSlider }) => {
  var settings = {
    autoplay: false,
    autoplaySpeed: 10000,
    dots: false,
    fade: false,
    cssEase: "linear",
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      { breakpoint: 1199, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 778, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    ],
  };
  return (
    <section className="instagram-area pos-relative">
      <div className="instagram-active ">
        <Slider {...settings}>
          {imageSlider &&
            imageSlider.map((img, i) => (
              <div className="instagram-item" key={i}>
                <img src={img} alt="Image" style={{ width: "100%" }} />
              </div>
            ))}
        </Slider>
      </div>
      <div className="instagram-btn">
        <a href="#" className="btn white-btn">
          <i className="fab fa-instagram" /> vue.store
        </a>
      </div>
    </section>
  );
};

export default ImageSlider;
