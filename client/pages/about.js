import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import VideoPopUp from "../src/components/VideoPopUp";
import Layout from "../src/layouts/Layout";
import PageTitle from "../src/layouts/PageTitle";
import Link from 'next/link';
import LazyLoad from "react-lazyload";



const About = () => {
  const [popup, setPopup] = useState(false);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return (
    <Layout sticky footerBg textCenter container>
      <main>
        {/* <PageTitle pageHeading="" active="About" dataBackground={'img/bg/about.png'}/> */}
        {popup && <VideoPopUp closePopup={() => setPopup(false)} />}
        <section className="about-area pt-50">
          <div className="container">
            <div className="row">
              <div className="col-xl-5">
                <div className="section-title mb-25">
                  <h1 className="our">Our</h1>
                  <h1 className="mission">Mission</h1>
                </div>
              </div>
              <div className="col-xl-7">
                <div className="about-community-text mb-30">
                  <p style={{fontSize:'18px',marginBottom:'-5px'}}>
                    Our mission is to reshape the landscape of corporate gifting by integrating sustainability with customization, thus being a one-stop solution for all needs of MNC&apos;s, organizations, and institutions. We personalize eco-friendly products seamlessly using AI tech. We thrive to encourage the adoption of future-proof products cultivated by a dedicated community of manufacturers.
                  </p>
                  <br></br>
                  <p style={{fontSize:'18px',marginBottom:'-5px'}}>
                    We aim to establish a robust supply chain, bridging the gap between our precious clients & scattered customization markets, and being pioneers of responsible and tech-enhanced corporate gifting.
                  </p>
                  <br></br>
                  <b style={{fontSize:'18px'}}>Thus empowering businesses to enhance their brand identity.</b>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-12">
                <div className="overview text-center mt-90">
                  <p>
                    Vue helps artists, musicians, filmmakers, designers, and
                    other creators find the resources ideas a reality. To date,
                    tens of thousands of creative projects big and small have
                    come to life with the support of the vue special community.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </section>
        <section className="video-area">
  <div className="bakix-video">
    {/* <video
      id="myVideo"
      width="800"
      height="450"
      style={{ maxWidth: "100%", borderRadius: '5px' }}
      loop
    >
      <source src="https://general-site-bucket.s3.ap-south-1.amazonaws.com/Hattyhood-Home.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video> */}
            <LazyLoad height={200} offset={100} once>
            <video
              id="myVideo"
             width="800"
              height="450"
              style={{ maxWidth: "100%", borderRadius: '5px' }}
              src="img/videos/WhatsApp Video 2023-04-19 at 6.39.00 PM.mp4" autoPlay muted loop />
            </LazyLoad>
            
  </div>
        </section>
        
        <section className="mission-area pt-100 pb-70 ">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="mission-title mb-30 text-center">
                  <h1 style={{fontSize:'45px'}}>Features</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="card">
                <div className="card__image-container">
                  <LazyLoad height={200} offset={100} once>
                    <img className="card__image" src="img/bg/sustainability.png" alt="" style={{ width: '200px', marginTop: '-40px' }} />
                  </LazyLoad>
                </div>
                <svg className="card__svg" viewBox="0 0 800 500">
                  <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#fff" />
                  <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth="4" fill="transparent" />
                </svg>
                <div className="card__content">
                  <h1 className="card__title">Circular Economy</h1>
                  <p className="card__description"> Sustainable, Stylish, Functional. Prioritizing eco-friendly practices for high-quality lifestyle products.</p>
                </div>
              </div>

              <div className="card">
                <div className="card__image-container">
                  <LazyLoad height={200} offset={100} once>
                    <img className="card__image" src="img/bg/customisation.png" alt="" style={{ width: '280px', marginTop: '-60px' }} />
                  </LazyLoad>
                </div>
                <svg className="card__svg" viewBox="0 0 800 500">
                  <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#fff" />
                  <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth="4" fill="transparent" />
                </svg>
                <div className="card__content">
                  <h1 className="card__title">Made-to-Order</h1>
                  <p className="card__description">Customized products for unique customer needs, with eco-friendly materials and exceptional service, ensuring customer satisfaction.</p>
                </div>
              </div>

              <div className="card">
                <div className="card__image-container">
                  <LazyLoad height={200} offset={100} once>
                    <img className="card__image" src="img/bg/Fast_delivery.png" alt="" style={{ width: '210px', marginTop: '25px' }} />
                  </LazyLoad>
                </div>
                <svg className="card__svg" viewBox="0 0 800 500">
                  <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#fff" />
                  <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="orange" strokeWidth="4" fill="transparent" />
                </svg>
                <div className="card__content">
                  <h1 className="card__title">Quick Turnaround & Support </h1>
                  <p className="card__description">We prioritize efficient delivery of custom merchandise and corporate gifts without compromising on quality.</p>
                </div>
              </div> 

              {/* <div className="card">
                <div className="card__image-container">
                  <img className="card__image" src="img/bg/ep.png" alt="" style={{width:'200px', marginTop: '-40px'}}/>
                </div>
                <svg className="card__svg" viewBox="0 0 800 500">
                  <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#fff" />
                  <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth="4" fill="transparent" />
                </svg>
                <div className="card__content">
                  <h1 className="card__title">Competitive pricing</h1>
                  <p className="card__description">We offer competitive pricing without compromising quality, ensuring great value for our customers.</p>
                </div>
              </div> */}

            </div>

            {/* <div className="row">
              <div className="card">
                <div className="card__image-container">
                  <img className="card__image" src="img/bg/hqp.png" alt="" style={{width:'250px', marginTop: '20px'}}/>
                </div>
                <svg className="card__svg" viewBox="0 0 800 500">
                  <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#fff" />
                  <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth="4" fill="transparent" />
                </svg>
                <div className="card__content">
                  <h1 className="card__title">High-quality products</h1>
                  <p className="card__description">We provide high-quality products made from eco-friendly and sustainable materials that are stylish and functional.</p>
                </div>
              </div>  

              <div className="card">
                <div className="card__image-container">
                  <img className="card__image" src="img/bg/Fast_delivery.png" alt="" style={{width:'210px', marginTop: '25px'}}/>
                </div>
                <svg className="card__svg" viewBox="0 0 800 500">
                  <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#fff" />
                  <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="orange" strokeWidth="4" fill="transparent" />
                </svg>
                <div className="card__content">
                  <h1 className="card__title">Fast turnaround</h1>
                  <p className="card__description">We prioritize efficient delivery of custom merchandise and corporate gifts without compromising on quality.</p>
                </div>
              </div>

              <div className="card">
                <div className="card__image-container">
                  <img className="card__image" src="img/bg/Customer_service.png" alt="" style={{width:'210px', marginTop: '-40px'}}/>
                </div>
                <svg className="card__svg" viewBox="0 0 800 500">
                  <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#fff" />
                  <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth="4" fill="transparent" />
                </svg>
                <div className="card__content">
                  <h1 className="card__title">Customer service</h1>
                  <p className="card__description">We are committed to deliver exceptional customer service to ensure our customers are completely satisfied with their purchases.</p>
                </div>
              </div>  
            </div> */}
    {/* <div className="row">
      <div className="col-md-6">
        <div className="feature-item-o d-flex mb-30 ">
          <div className="feature-icon">
            <img className="w-100" src="img/bg/sustainability.svg" alt="" />
          </div>
          <div className="feature-content">
            <p>Hattyhood is committed to promoting sustainable and eco-friendly practices. Our sustainable product collection includes a variety of lifestyle products that are both stylish and functional.</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 ml-auto text-right"> 
        <div className="feature-item-e d-flex mb-30">
          <div className="feature-content">
            <p>We understand that every customer has unique needs and preferences, which is why we offer a wide range of customization options to make sure every product is tailored to their requirements.</p>
          </div>
          <div className="feature-icon">
            <img className="w-100" src="img/bg/sustainability.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="feature-item-o d-flex mb-30">
          <div className="feature-icon">
            <img className="w-100" src="img/bg/sustainability.svg"alt="" />
          </div>
          <div className="feature-content">
            <p>We provide high-quality products made from eco-friendly and sustainable materials that are stylish and functional.</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 ml-auto text-right"> 
        <div className="feature-item-e d-flex mb-30">
          <div className="feature-content">
            <p>We believe in providing great value for our customers, which is why we offer competitive pricing without compromising on the quality of our products or customer service.</p>
          </div>
          <div className="feature-icon">
            <img className="w-100" src="img/bg/sustainability.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="feature-item-o d-flex mb-30">
          <div className="feature-icon">
            <img className="w-100" src="img/bg/sustainability.svg" alt="" />
          </div>
          <div className="feature-content">
            <p>We know that time is of the essence, which is why we work quickly to deliver your custom merchandise and corporate gifts as fast as possible, without sacrificing quality.</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 ml-auto text-right"> 
        <div className="feature-item-e d-flex mb-30">
          <div className="feature-content">
            <p> We pride ourselves on delivering a personalized experience to every customer, taking the time to understand their needs, and working closely with them to achieve their desired outcome.</p>
          </div>
          <div className="feature-icon">
            <img className="w-100" src="img/bg/sustainability.svg" alt="" />
          </div>
        </div>
      </div>
    </div> */}
  </div>
</section>

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
      </main>
    </Layout>
  );
};

export default About;
