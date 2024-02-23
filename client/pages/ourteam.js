import { useState } from "react";
import Slider from "react-slick";
import VideoPopUp from "../src/components/VideoPopUp";
import Layout from "../src/layouts/Layout";
import PageTitle from "../src/layouts/PageTitle";
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.min.css';
import LazyLoad from "react-lazyload";


const About = () => {
  const [popup, setPopup] = useState(false);
  const settings = {
    dots: false,
    arrows: false,
    // infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Layout sticky footerBg textCenter container>
      <main>
        {/* <PageTitle pageHeading="" active="Team" dataBackground={'img/bg/page-title.png'}/> */}
        {popup && <VideoPopUp closePopup={() => setPopup(false)} />}
        <section className="big-team-area">
          {/* <div className="big-image">
            <img src="img/bg/banner.jpg" alt="Banner" />
          </div> */}
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* <div className="testimonial-active owl-carousel theme-bg">
                  <Slider {...settings}>
                    <div className="testimonial-item text-center">
                      <p>
                        “Vue is one of those platforms that gives you space 
                        work with people who know you, love you, and support
                        you.”
                      </p>
                      <span>- Salim Rana</span>
                    </div>
                    <div className="testimonial-item text-center">
                      <p>
                        “Vue is one of those platforms that gives you space
                        work with people who know you, love you, and support
                        you.”
                      </p>
                      <span>- Jason Derula</span>
                    </div>
                  </Slider>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        {/* team-area start */}
        <section className="team-area pt-30 pb-70">
          <div className="container" style={{alignItems:'center', justifyContent:'center', textAlign:'center'}}>
            <div className="row">
              <div className="col-xl-12">
                <div className="area-title text-center mb-50">
                  <h2>HATTYHOOD WORKFORCE</h2>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row d-flex flex-wrap justify-content-center">
                <div className="col-xl-3 col-lg-3 col-md-6 wow tpfadeUp">
                  <div className="tpteam mb-30">
                    <div className="tpteam__thumb">
                      <LazyLoad height={200} offset={100} once>
                        <img className="teamimage" src="img/team/1.jpeg" alt="" />
                      </LazyLoad>
                    </div>
                    <div className="tpteam__content">
                      <h4 className="tp-team-sm-title">
                        <Link href={`/about-me/`}>
                          <a>Aayushi Singh</a>
                        </Link>
                      </h4>
                      <h5 className="tp-team-sm-subtitle"><a href="#">CEO</a></h5>
                      <div className="tp-team-social-links">
                        <a href="https://www.linkedin.com/in/aayushi-singh-530497206/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="mailto:aayushi@hattyhood.com" target="_blank" rel="noreferrer"><i className="fas fa-envelope"></i></a>
                        <a href="https://github.com/singhavs" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                      </div>
                    </div>
                  </div>
                </div>     

                <div className="col-xl-3 col-lg-3 col-md-6 wow tpfadeUp">
                  <div className="tpteam mb-30">
                    <div className="tpteam__thumb">
                      <LazyLoad height={200} offset={100} once>
                        <img className="teamimage" src="img/team/3.png" alt="" />
                      </LazyLoad>
                    </div>
                    <div className="tpteam__content">
                      <h4 className="tp-team-sm-title">
                        <Link href={`/about-me/`}>
                          <a>Vishal Ranka</a>
                        </Link>
                      </h4>
                      <h5 className="tp-team-sm-subtitle"><a href="#">Full-Stack Developer</a></h5>
                      <div className="tp-team-social-links">
                        <a href="https://www.linkedin.com/in/vishalranka3/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="mailto:vishalranka3@gmail.com" target="_blank" rel="noreferrer"><i className="fas fa-envelope"></i></a>
                        <a href="https://github.com/vishalranka2003" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-6 wow tpfadeUp">
                  <div className="tpteam mb-30">
                    <div className="tpteam__thumb">
                      <LazyLoad height={200} offset={100} once>
                        <img className="teamimage" src="img/team/4.jpeg" alt="" />
                      </LazyLoad>
                    </div>
                    <div className="tpteam__content">
                      <h4 className="tp-team-sm-title">
                        <Link href={`/about-me/`}>
                          <a>Shreya D R</a>
                        </Link>
                      </h4>
                      <h5 className="tp-team-sm-subtitle"><a href="#">Full stack Developer</a></h5>
                      <div className="tp-team-social-links">
                        <a href="https://www.linkedin.com/in/shreya-rangapure-2a3858231/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="mailto:shreyadr09@gmail.com" target="_blank" rel="noreferrer"><i className="fas fa-envelope"></i></a>
                        <a href="https://github.com/Shreyadr09" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-6 wow tpfadeUp">
                  <div className="tpteam mb-30">
                    <div className="tpteam__thumb">
                      <LazyLoad height={200} offset={100} once>
                        <img className="teamimage" src="img/team/7.png" alt="" />
                      </LazyLoad>
                    </div>
                    <div className="tpteam__content">
                      <h4 className="tp-team-sm-title">
                        <Link href={`/about-me/`}>
                          <a>Prajwal Mehta</a>
                        </Link>
                      </h4>
                      <h5 className="tp-team-sm-subtitle"><a href="#">Motion Graphic Designer</a></h5>
                      <div className="tp-team-social-links">
                        <a href="https://www.linkedin.com/in/prajwal-mehta-b2a089259/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="mailto:mehtaprajwal974@gmail.com" target="_blank" rel="noreferrer"><i className="fas fa-envelope"></i></a>
                        <a href="https://github.com/Shreyadr09" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex flex-wrap justify-content-center">
                <div className="col-xl-3 col-lg-3 col-md-6 wow tpfadeUp">
                  <div className="tpteam mb-30">
                    <div className="tpteam__thumb">
                      <LazyLoad height={200} offset={100} once>
                        <img className="teamimage" src="img/team/6.png" alt="" />
                      </LazyLoad>
                    </div>
                    <div className="tpteam__content">
                      <h4 className="tp-team-sm-title">
                        <Link href={`/about-me/`}>
                          <a>Nagarjuna</a>
                        </Link>
                      </h4>
                      <h5 className="tp-team-sm-subtitle"><a href="#">Sales Operation lead</a></h5>
                      <div className="tp-team-social-links">
                        <a href="https://www.linkedin.com/in/nagarjuna-c-d-5a4820222" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="mailto:nagarjunacd19@gmail.com" target="_blank" rel="noreferrer"><i className="fas fa-envelope"></i></a>
                        <a href="https://github.com/NagarjunaCD" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-6 wow tpfadeUp">
                  <div className="tpteam mb-30">
                    <div className="tpteam__thumb">
                      <LazyLoad height={200} offset={100} once>
                        <img className="teamimage" src="img/team/Shubham.jpeg" alt="" />
                      </LazyLoad>
                    </div>
                    <div className="tpteam__content">
                      <h4 className="tp-team-sm-title">
                        <Link href={`/about-me/`}>
                          <a>Shubham S</a>
                        </Link>
                      </h4>
                      <h5 className="tp-team-sm-subtitle"><a href="#">Backend Developer</a></h5>
                      <div className="tp-team-social-links">
                        <a href="https://www.linkedin.com/in/karthik-patel-09155b253/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="mailto:karthikjcpatel@gmail.com" target="_blank" rel="noreferrer"><i className="fas fa-envelope"></i></a>
                        <a href="" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-6 wow tpfadeUp">
                  <div className="tpteam mb-30">
                    <div className="tpteam__thumb">
                      <LazyLoad height={200} offset={100} once>
                        <img className="teamimage" src="img/team/9.png" alt="" />
                      </LazyLoad>
                    </div>
                    <div className="tpteam__content">
                      <h4 className="tp-team-sm-title">
                        <Link href={`/about-me/`}>
                          <a>Hanumakeerthy</a>
                        </Link>
                      </h4>
                      <h5 className="tp-team-sm-subtitle"><a href="#">Operations Associate</a></h5>
                      <div className="tp-team-social-links">
                        <a href="https://www.linkedin.com/in/hanumakeerthy-e-32b50b265/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="mailto:hanumakeerthy9@gmail.com" target="_blank" rel="noreferrer"><i className="fas fa-envelope"></i></a>
                        <a href="" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default About;