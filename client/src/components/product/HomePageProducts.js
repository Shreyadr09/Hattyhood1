import { Nav, TabContainer, TabContent, TabPane } from "react-bootstrap";
import { simpleProductFilter } from "../../utils/filterProduct";
import MultipleRowsSlider from "../slider/MultipleRowsSlider";
import Product from "./Product";
import Paggination from "../Paggination";
import { useEffect, useState } from "react";
import { connect } from "react-redux";


const HomePageProducts = ({ products }) => {
  const [active, setActive] = useState(1); // Initialize active page to 1
  const itemsPerPage = 6;

  return (
    <section className="product-area box-90 pt-70 pb-40 slick-slider">
      <div className="container-fluid">
        <TabContainer defaultActiveKey="all">
          <div className="row">
            <div className="col-xl-5 col-lg-12">
              <div className="area-title mb-50">
                <h2>Brand New Products</h2>
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
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                      id="home-tab"
                      data-toggle="tab"
                      eventKey="all"
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
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      eventKey="corporate"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Corporate Products
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link
                      as="a"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                      id="contact-tab"
                      data-toggle="tab"
                      eventKey="merchandise"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Merchandise
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
                  <TabPane eventKey="all">
                    <div className="product-slider owl-carousel">
                      <MultipleRowsSlider>
                        {products &&
                          products.map((product) => (
                            <Product key={product.id} product={product} />
                          ))}
                      </MultipleRowsSlider>
                    </div>
                  </TabPane>
                  <TabPane eventKey="Custom">
                    <div className="product-slider owl-carousel ">
                      <MultipleRowsSlider>
                        {products &&
                          simpleProductFilter("Custom", products).map(
                            (product) => (
                              <Product key={product.id} product={product} />
                            )
                          )}
                      </MultipleRowsSlider>
                    </div>
                  </TabPane>
                  <TabPane eventKey="merchandise">
                    <div className="product-slider owl-carousel ">
                      <MultipleRowsSlider>
                        {products &&
                          simpleProductFilter("merchandise", products).map(
                            (product) => (
                              <Product key={product.id} product={product} />
                            )
                          )}
                      </MultipleRowsSlider>
                    </div>
                  </TabPane>
                  <TabPane eventKey="ladies">
                    <div className="product-slider owl-carousel ">
                      <MultipleRowsSlider>
                        {products &&
                          simpleProductFilter("ladies", products).map(
                            (product) => (
                              <Product key={product.id} product={product} />
                            )
                          )}
                      </MultipleRowsSlider>
                    </div>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </div>
        </TabContainer>
      </div>
    </section>
  );
};

export default HomePageProducts;
