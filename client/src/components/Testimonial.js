import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import LazyLoad from "react-lazyload";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "35px" }} />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "35px" }} />
    </div>
  );
};

const Slideronhome = () => {
  const testimonials = [
     {
      name: "Chiranthana",
      job: ", President",
      image: "img/customers/3.png",
      testimonial:
        "Hattyhood's platform is user-friendly and their team was very responsive to our needs. They provided us with a variety of customizable options and worked with us to create the perfect product for our club.",
    },
    {
      name: "Big Foundation",
      image: "img/customers/bigfoundation.png",
      testimonial:
        "Hattyhood is our top choice for custom merchandise and marketing collateral for our student organization. Their attention to detail and commitment to quality is impressive. Highly recommended for elevating your brand and promoting initiatives!",
    },
    {
      name: "Bipul",
      job: ", CEO, E-Corp",
      image: "img/customers/bipul.png",
      testimonial:
        "As a startup, we were looking for a partner who could help us establish our brand in the market. Hattyhood's customized products and marketing collaterals were crucial in building our brand identity and attracting new customers.",
    },
    {
      name: "Upagraha",
      image: "img/customers/upagraha.png",
      testimonial:
        "BMSCE Upagraha is over the moon with Hattyhood's customised varsity jackets! Your attention to our unique style and prompt delivery is stellar. Anxious for our next launch of creativity together.",
    },
    {
      name: "Pawan Kumar",
      image: "img/team/team-5.1.jpg",
      job: ", CEO, Subh Muhrat",
      testimonial:
        "Working with Hattyhood was a breeze. Their team was professional, creative, and delivered the products on time. We would definitely recommend them to anyone looking for customized merchandise and marketing collateral.",
    },
    {
      name: "Pentagram",
      image: "img/customers/pentagram.jpg",
      testimonial:
        "Kudos to Hattyhood for exceptional quality and service that perfectly aligned with our clubs sustainable needs. It's great to partner with a company that values our needs. Looking forward to more collaborations in the sustainable domain.",
    },
    {
      name: "Selco Foundation",
      image: "img/customers/selco.jpg",
      testimonial:
        "Hattyhood has truly impressed Selco Foundation with their customized sustainable products. A perfect embodiment of our values. We appreciate your dedication to quality and the environment. Eagerly anticipating the continued success of our partnership.",
    },
    {
      name: "BMSCE Throwball Team",
      image: "img/customers/throwball_logo.png",
      testimonial:
        "BMSCE Throwball Team is elated with Hattyhood's custom hoodies! Your impeccable craftsmanship and unique design have truly captured our team spirit. A big shoutout for keeping us stylish and united.",
    },
    {
      name: "IIC",
      image: "img/customers/iic-logo.png",
      testimonial:
        "Hattyhood has crafted wonders with the custom varsity jackets for IIC. The fusion of style and comfort is remarkable. Our team is not just wearing jackets, but confidence. Thank you for your exceptional work.",
    },
    {
      name: "BMSCE Falcons",
      image: "img/customers/falcons.png",
      testimonial:
        "Hattyhood nailed it with our custom hoodies and along with their swift delivery the quality was top notch. BMSCE Falcons is truly impressed and eagerly anticipates future collaborations.",
    },
    {
      name: "BMSCE IEEE SSIT",
      image: "img/customers/ieee_ssit.jpg",
      testimonial:
        "Hattyhood's custom product wowed IEEE SSIT with its innovation and precision. A testament to remarkable collaboration. Looking forward to more trailblazing ventures together.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div
      className="testimonial"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
        marginBottom: "50px",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <div style={{ maxWidth: "50%", textAlign: "center" }}>
        <h4 className="text-h4-style" style={{ marginBottom: 50 }}>
          What our customers say
        </h4>
        <Slider {...settings} prevArrow={<PreviousBtn />} nextArrow={<NextBtn />}>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              img={testimonials[index].image}
              name={testimonials[index].name}
              job={testimonials[index].job}
              review={testimonials[index].testimonial}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img, name, job, review }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <LazyLoad height={120} offset={100} once>
        <Avatar
          imgProps={{ style: { borderRadius: "50%" } }}
          src={img}
          style={{
            width: 120,
            height: 120,
            border: "1px solid lightgray",
            padding: 7,
            marginBottom: 20,
          }}
        />
      </LazyLoad>
      <p>{review}</p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "green" }}>{name}</span>
        {job}
      </p>
    </div>
  );
};

export default Slideronhome;
