import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { connect } from "react-redux";
import Blogs from "../src/components/blog/Blogs";
import Newsletter from "../src/components/Newsletter";
import HomePageProducts from "../src/components/product/HomePageProducts";
import HomePageSingleProduct from "../src/components/product/HomePageSingleProduct";
import UpcomingProduct from "../src/components/product/UpcomingProduct";
import HomeSlider from "../src/components/slider/HomeSlider";
import Layout from "../src/layouts/Layout";
import Card1 from "../src/components/card1";
import CounterOne from "../src/components/CounterOne/CounterOne";
import { getBlog } from "../src/redux/action/blog";
import { getHome1 } from "../src/redux/action/home";
import { getProducts } from "../src/redux/action/product";
import { getTopSeller } from "../src/redux/action/seller";
import { getUpcomingProduct } from "../src/redux/action/upcomingProduct";
import { filterBlog } from "../src/utils/filterBlog";
import { getDiscount } from "../src/utils/utils";
import Slideronhome from "../src/components/Testimonial";
import Cookies from "universal-cookie";
import { Application } from "@splinetool/runtime";
import SEO from "../pages/seo";
import LazyLoad from "react-lazyload";
// import Testimonial from "../src/components/Testimonial";

const cookies = new Cookies();
const email = cookies.get("Email") || null;
const Index = ({
  getHome1,
  home1,
  upcomingProduct,
  getBlog,
  blogs,
  getTopSeller,
  topSeller,
  getUpcomingProduct,
  getProducts,
  products,
}) => {
  // useEffect(() => {
  //   getHome1();
  //   getBlog();
  //   getTopSeller();
  //   getUpcomingProduct();
  //   getProducts();
  // }, []);
  useEffect(() => {
    const canvas = document.getElementById("canvas3d");
    const app = new Application(canvas, {
      resize: false,
    });

    app.load("https://prod.spline.design/oF7A5jiWuSq3fkB0/scene.splinecode");
  }, []);

  return (
    <Layout sticky={true}>
      <main className="main-screen ">
        <section className="slider-area">
          <LazyLoad height={200} offset={100} once>
            <img
              src="../img/bg/curls.svg"
              className="leftimg"
              style={{ position: "absolute", top: "0", zIndex: "-1" }}></img>
          </LazyLoad>
          <div className="container">
            <div className="row">
              <div className="col-xl-5">
                <div className="tagline-title fade-in mb-25">
                  <h1 className="l2">
                    <span className="bold">One-stop solution</span> for all your{" "}
                    <span style={{ color: "#A87A7A" }}>customized</span> and{" "}
                    <span style={{ color: "#5FA882" }}>sustainable</span> needs!
                  </h1>
                  {/* <h1 className="l3">Designers</h1> */}
                  <p>
                    Bridging the gap between institutions/individuals and
                    customization platforms by providing them with a dedicated
                    services to fulfill their needs.
                  </p>
                  <div className="button-container">
                    <Link href="/about">
                      <a>
                        <button>Read More</button>
                      </a>
                    </Link>
                    <Link href="/products">
                      <a>
                        <button>Shop Now</button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 fade-left">
                <canvas id="canvas3d" style={{ objectFit: "none" }}></canvas>
              </div>
            </div>
          </div>
          <img
            src="../img/bg/curls.svg"
            className="leftimg"
            style={{
              position: "absolute",
              marginTop: "400px",
              zIndex: "-1",
            }}></img>

          {/* <div className="slider-active">
            <HomeSlider sliders={home1 && home1.sliders}>
              {home1 &&
                home1.sliders.map((slide, i) => (
                  <div
                    key={i}
                    className=" single-slider slide-1-style slider-1-1 slide-height d-flex align-items-center"
                    data-background={slide.bgImage}
                  >
                    <div
                      className="shape-title wow bounce-animate"
                      style={{ zIndex: "unset" }}
                    >
                      <h2>{slide.title}</h2>
                    </div>

                    <div className="shape-icon bounce-animate">
                      <img src={slide.shapIcon} alt="" />
                    </div>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-xl-7">
                          <div className="slide-content">
                            <span className="wow fadeInRight" data-delay=".2s">
                              {slide.name}
                            </span>
                            <h1 data-animation="fadeInUp" data-delay=".5s">
                              {slide.heading}
                            </h1>
                            <div className="slide-btn">
                              {slide.shopLink && (
                                <Link href="/shop">
                                  <a
                                    className="btn theme-btn wow fadeInLeft"
                                    data-delay=".7s"
                                  >
                                    shop now
                                  </a>
                                </Link>
                              )}
                              {slide.categoryLink && (
                                <Link href="/shop">
                                  <a
                                    className="btn white-btn wow fadeInLeft"
                                    data-delay=".7s"
                                  >
                                    category
                                  </a>
                                </Link>
                              )}
                            </div>
                            <a href="/shop" class="btn bannerbtn">Shop Now →</a>

                          </div>
                        </div>
                        <div className="col-xl-5">
                          {slide.images &&
                            slide.images.map((img, j) => (
                              <div
                                className={`slide-shape${
                                  j + 1
                                } wow bounceInRight`}
                                data-delay={j === 0 ? ".9s" : "1.2s"}
                                key={j}
                              >
                                <img src={img.src} alt="" />
                              </div>
                              
                            ))}
                        </div>

                      </div>
                    </div>
                  </div>
                ))}
            </HomeSlider>

            <div className="upc-btn">
                <Link href="/shop">
                  <a
                    className="btn theme-btn"
                    data-animation="fadeInLeft"
                    data-delay=".7s"
                  >
                    shop now
                  </a>
                </Link>
                <Link href="/shop">
                  <a
                    className="btn white-btn"
                    data-animation="fadeInRight"
                    data-delay=".9s"
                  >
                    Details
                  </a>
                </Link>
              </div>
          </div> */}
        </section>
        <CounterOne />
        <section
          className="banner-area pt-0 pl-15 pr-15"
          style={{ marginTop: "-60px" }}>
          <h4 className="text-h4-style">Seek By Purpose</h4>
          <div className="container-home">
            <Card1
              imgLocation="img/card/bottle.png"
              category="Drinkware"
              product_name="Bottle"
              desc1="Slurp slurp the hattyhood way!!"
              // desc2=""
              link="https://www.hattyhood.com/shop/ssh2"
            />
            <Card1
              imgLocation="img/card/hoodie.png"
              category="Merchandise "
              product_name="Hoodies"
              desc1="Wear the swag the way you like it!!"
              // desc2="Demo text"
              link="https://www.hattyhood.com/shop/mh10"
            />
            <Card1
              imgLocation="img/card/card3.png"
              category="StartUp-kit"
              product_name="Essentials"
              desc1=" Start your journey with an eco purpose!!"
              // desc2="Demo text"
              link="https://www.hattyhood.com/shop/mch18"
            />{" "}
            {/* <div className="card-home card-home1">
                <div className="face face1">
                    <div className="content">
                        <img src="/img/icon/eco-friendly(2).png" alt="Design"/>
                        <h3 className="flexcol">Eco-Friendly</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <p>Join the eco revolution and make sustainability stylish.</p>
                    </div>
                </div>
              </div>
              <div className="card-home card-home1">
                  <div className="face face1">
                      <div className="content">
                          <img src="img/icon/plastic-free(2).png" alt="Code" />
                          <h3>Zero-Plastic</h3>
                      </div>
                  </div>
                  <div className="face face2">
                      <div className="content">
                          <p>Plastic free is the way to be.</p>
                      </div>
                  </div>
              </div>
              <div className="card-home card-home1">
                  <div className="face face1">
                      <div className="content">
                          <img src="/img/icon/carbon(1).png" alt="Launch" />
                          <h3>Carbon-Neutral</h3>
                      </div>
                  </div>
                  <div className="face face2">
                      <div className="content">
                          <p>Reduce your carbon footprint, offset your impact.</p>
                      </div>
                  </div>
              </div> */}
          </div>

          {/* <div className="container-fluid">
            <div className="row">
            {home1 &&
              home1.announcement.map((announcement, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                <div className="banner mb-30">
                <Link href="/shop">
                <a>
                <img src={announcement} alt="announcement" />
                </a>
                </Link>
                </div>
                </div>
                ))}
                </div>
              </div> */}
        </section>
                <div className="bakix-video">
          <LazyLoad height={200} offset={100} once>
            <video
              id="myVideo"
              width="932"
              height="360"
              style={{
                borderRadius: "5px",
                objectFit: "cover",
                border: "none",
                overflow: "hidden",
              }}
              src="img/videos/banner3.mp4"
              type="video/mp4"
              autoPlay
              loop
              muted
            />
          </LazyLoad>
        </div>
        <HomePageSingleProduct products={products} />
        {/* <HomePageProducts products={products}/> */}
        {topSeller && (
          <section className="top-seller-area box-90">
            {/* <div className="container-fluid">
              <div className="row">
                <div className="col-xl-5 col-lg-8 col-md-7">
                  <div className="area-title mb-50">
                    <h2>Top Sellers</h2>
                    <p>Browse the huge variety of our products</p>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-4 col-md-5">
                  <div className="vue-btn text-left text-md-right mb-50">
                    <Link href="/shop">
                      <a className="btn theme-btn">Collection</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-5 col-lg-5">
                  <div className="top-seller mb-50">
                    <img src={topSeller[0].topProduct.img} alt="Product" />
                    <div className="seller-box text-center">
                      <div className="top-seller-content text-left">
                        <h2>
                          <Link href="/shop">
                            <a>{topSeller[0].topProduct.name}</a>
                          </Link>
                        </h2>
                        <div className="pro-price mb-25">
                          <span>
                          ₹
                            {getDiscount(
                              topSeller[0].topProduct.price,
                              topSeller[0].topProduct.discount
                            )}{" "}
                            INR
                          </span>
                          <span className="old-price">
                          ₹{topSeller[0].topProduct.price} INR
                          </span>
                        </div>
                        <div className="top-seller-btn">
                          <Link href="/shop">
                            <a className="btn theme-btn">Shop Now</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7">
                  <div className="top-seller text-right mb-50">
                    <img src={topSeller[0].banner} alt="topseller" />
                    <div className="sellet-2-content">
                      <h2>
                        <Link href="/shop">{topSeller[0].name}</Link>
                      </h2>
                      <div className="pro-price mb-25">
                        <span>
                        ₹{" "}
                          {getDiscount(
                            topSeller[0].topProduct.price,
                            topSeller[0].topProduct.discount
                          )}{" "}
                          INR
                        </span>
                        <span className="old-price">
                        ₹{topSeller[0].topProduct.price} INR
                        </span>
                      </div>
                      <div className="top-seller-btn">
                        <Link href="/shop">
                          <a className="btn theme-btn-2 mr-20">view details</a>
                        </Link>
                        <a href="#" className="shop-btn">
                          <i className="flaticon-shopping-cart" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </section>
        )}

        <section className="top-seller-area box-90">
          <Slideronhome />
          <SEO />
        </section>

        {/* <UpcomingProduct upcomingProduct={upcomingProduct} /> */}
        {/* {blogs && <Blogs blogs={blogs} />} */}
      </main>
      <Newsletter />
    </Layout>
  );
};

const mapSateToProps = (state) => ({
  // home1: state.home.home1,
  // announcement: state.home.home1.announcement,
  // upcomingProduct: state.upcomingProduct.home1,
  // blogs: filterBlog("lifestyle", state.blog.blogs),
  // topSeller: state.seller.topSeller,
  // products: state.product.products,
});

export default connect(mapSateToProps, {
  getHome1,
  getBlog,
  getTopSeller,
  getUpcomingProduct,
  getProducts,
})(Index);
