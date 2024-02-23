import { Nav, TabContainer, TabContent, TabPane } from "react-bootstrap";
import { simpleProductFilter } from "../../utils/filterProduct";
import SingleProductSlider from "../slider/SingleProductSlider";
import Product from "./Product";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import { useState } from "react";
import LazyLoad from "react-lazyload";
import 'swiper/css';
const HomePageSingleProduct = ({ products }) => {
  const [sliderLoop, setSliderLoop] = useState(false);
  return (
    <section className="product-area box-90 pb-40 section-style ">
      <h4 className="text-h4-style">Our <span className="text-b-style"><b>happy </b></span>customers</h4>
           <Swiper 
      loop={sliderLoop}
      spaceBetween={20}
      slidesPerView={2}
      modules={[Autoplay]}
      autoplay={
        { delay: 2500, disableOnInteraction: true,paddingLeft:"0px" }
      }

      // style={{  paddingLeft:"9em" ,boxSizing:"border-box" ,overflowX:"hidden"}}
      className="swiper-wrapper d-flex align-items-center idk  "
      breakpoints={{
        // when window width is >= 1200px
        1200: {
          slidesPerView: 5,
        },
        // when window width is >= 992px
        782: {
          slidesPerView: 3,
        },
        // when window width is >= 768px
        580: {
          slidesPerView: 2,
        },
        // when window width is >= 576px
        276: {
          slidesPerView: 1,
        }
      }}
    >
    
      <SwiperSlide><LazyLoad height={200} offset={100} once><img className="one" src="img/customers/1.png"></img></LazyLoad></SwiperSlide>
      <SwiperSlide><LazyLoad height={200} offset={100} once><img  className="one"  src="img/customers/2.png"></img></LazyLoad></SwiperSlide>
      <SwiperSlide><LazyLoad height={200} offset={100} once><img className="two style1" src="img/customers/8.png"></img></LazyLoad></SwiperSlide>
      <SwiperSlide><LazyLoad height={200} offset={100} once><img  className="one" src="img/customers/3.png"></img></LazyLoad></SwiperSlide>
      <SwiperSlide><LazyLoad height={200} offset={100} once><img style={{height:'120px',marginTop:'-12px'}} src="img/customers/19.png"></img></LazyLoad></SwiperSlide>
      <SwiperSlide><LazyLoad height={200} offset={100} once><img className="one style2" src="img/customers/5.png"></img></LazyLoad></SwiperSlide>
      <SwiperSlide><LazyLoad height={200} offset={100} once><img className="one" src="img/customers/6.png"></img></LazyLoad></SwiperSlide>
      <SwiperSlide><LazyLoad height={200} offset={100} once><img  className="one" src="img/customers/7.png"></img></LazyLoad></SwiperSlide>
      <SwiperSlide><LazyLoad height={200} offset={100} once><img className="one" src="img/customers/10.png"></img></LazyLoad></SwiperSlide>
      <SwiperSlide><LazyLoad height={200} offset={100} once><img  className="one style3"  src="img/customers/11.png"></img></LazyLoad></SwiperSlide>
      <SwiperSlide><LazyLoad height={200} offset={100} once><img  className="one"src="img/customers/12.png"></img></LazyLoad></SwiperSlide>
      <SwiperSlide><LazyLoad height={200} offset={100} once><img className="one"src="img/customers/13.png"></img></LazyLoad></SwiperSlide>
      <SwiperSlide><LazyLoad height={200} offset={100} once><img  className="two style4" src="img/customers/15.png"></img></LazyLoad></SwiperSlide>

    </Swiper>
      {/* <div className="container-fluid">
        <TabContainer defaultActiveKey="all2">
          <div className="row">
            <div className="col-xl-5 col-lg-12">
              <div className="area-title mb-50">
                <h2>Best Sell Products</h2>
                <p>Browse the huge variety of our products</p>
              </div>
            </div>
            <div className="col-xl-7 col-lg-12">
              <div className="product-tab mb-40">
                <Nav
                  as="ul"
                  className="nav product-nav  justify-content-xl-end"
                  id="myTab1"
                  role="tablist"
                >
                  <Nav.Item as="li">
                    <Nav.Link
                      as="a"
                      href="#"
                      className="nav-link"
                      onClick={(e) => e.preventDefault()}
                      id="home-tab"
                      data-toggle="tab"
                      eventKey="all2"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      all
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link
                      as="a"
                      href="#"
                      className="nav-link"
                      onClick={(e) => e.preventDefault()}
                      id="profile-tab"
                      data-toggle="tab"
                      eventKey="Custom2"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Custom
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link
                      as="a"
                      href="#"
                      className="nav-link"
                      onClick={(e) => e.preventDefault()}
                      id="contact-tab"
                      data-toggle="tab"
                      eventKey="gent2"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Man cloth
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link
                      as="a"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                      id="contact-tab1"
                      data-toggle="tab"
                      eventKey="ladies2"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      woman cloth
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="product-tab-content">
                <TabContent className="tab-content" id="myTabContent">
                  <TabPane eventKey="all2">
                    <div className="product-slider owl-carousel">
                      <SingleProductSlider>
                        {products &&
                          products.map((product) => (
                            <Product key={product.id} product={product} />
                          ))}
                      </SingleProductSlider>
                    </div>
                  </TabPane>
                  <TabPane eventKey="Custom2">
                    <div className="product-slider owl-carousel ">
                      <SingleProductSlider>
                        {products &&
                          simpleProductFilter("Custom", products).map(
                            (product) => (
                              <Product key={product.id} product={product} />
                            )
                          )}
                      </SingleProductSlider>
                    </div>
                  </TabPane>
                  <TabPane eventKey="gent2">
                    <SingleProductSlider>
                      {products &&
                        simpleProductFilter("gent", products).map((product) => (
                          <Product key={product.id} product={product} />
                        ))}
                    </SingleProductSlider>
                  </TabPane>
                  <TabPane eventKey="ladies2">
                    <SingleProductSlider>
                      {products &&
                        simpleProductFilter("ladies", products).map(
                          (product) => (
                            <Product key={product.id} product={product} />
                          )
                        )}
                    </SingleProductSlider>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </div>
        </TabContainer>
      </div> */}
    </section>
  );
};

export default HomePageSingleProduct;
