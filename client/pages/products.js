import { useEffect, useState } from "react";
import { Nav, TabContainer, TabContent, TabPane } from "react-bootstrap";
import { connect } from "react-redux";
import Paggination from "../src/components/Paggination";
import Product from "../src/components/product/Product";
import ProductListView from "../src/components/product/ProductListView";
import Layout from "../src/layouts/Layout";
import PageTitle from "../src/layouts/PageTitle";
import { getProducts } from "../src/redux/action/product";
import { activeData, dblock } from "../src/utils/utils";
import HomePageProducts from "../src/components/product/HomePageProducts";
import { getHome1 } from "../src/redux/action/home";
import MultipleRowsSlider from "../src/components/slider/MultipleRowsSlider";
import { simpleProductFilter } from "../src/utils/filterProduct";


const Products = ({ getProducts, products,home1 }) => {
  const [active, setActive] = useState(0);
  let sort = 6;
  useEffect(() => {
    getProducts();
    getHome1();
  }, []);
  return (
    <Layout sticky container footerBg textCenter>
      <main>
        {/* <PageTitle pageHeading="" active="Products" dataBackground={'img/bg/services.png'} /> */}

        {/* <section className="shop-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <p className="sustainability">Sustainability Store</p>
                tab filter
                <TabContainer defaultActiveKey="grid">
                   <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-6">
                      <div className="product-showing mb-40">
                        Active sort product
                        <p>{activeData(active, sort, products)}</p>
                      </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-6">
                      <div className="shop-tab f-right">
                        <Nav
                          as="ul"
                          className="nav text-center"
                          id="myTab"
                          role="tablist"
                        >
                          <Nav.Item as="li">
                            <Nav.Link
                              as="a"
                              href="#"
                              onClick={(e) => e.preventDefault()}
                              eventKey="list"
                            >
                              <i className="fas fa-list-ul" />{" "}
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Nav.Link
                              as="a"
                              href="#"
                              onClick={(e) => e.preventDefault()}
                              eventKey="grid"
                            >
                              <i className="fas fa-th-large" />
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </div>
                      <div className="pro-filter-btn mb-40 f-right">
                        <button id="filter-btn">Filter +</button>
                      </div>
                    </div>
                  </div>
                  tab content
                  <TabContent>
                    <TabPane eventKey="grid">
                      <section className="banner-area pt-30 pl-15 pr-15">
                        <MultipleRowsSlider>
                          {products && products
                            .filter((product) => product.tags.includes("sustainable")) // Filter products that have "sustainable" tag
                            .map((product) => (
                              <div key={product.id}>
                                <Product product={product} />
                              </div>
                            ))}
                        </MultipleRowsSlider>
                      </section>
                    </TabPane>
                    <TabPane eventKey="grid">
                      <div className="row">
                        {products &&
                          products.map((product, i) => (
                            <div
                              className={`col-lg-4 col-md-6 ${dblock(
                                active,
                                i,
                                sort
                              )}`}
                              key={product.id}
                            >
                              <Product product={product} />
                            </div>
                          ))}
                      </div>
                    </TabPane>
                    <TabPane eventKey="list">
                      {products &&
                        products.map((product, i) => (
                          <div key={i} className={`${dblock(active, i, sort)}`}>
                            <ProductListView product={product} />
                          </div>
                        ))}
                    </TabPane>
                  </TabContent>
                </TabContainer>

                <Paggination
                  active={active}
                  setActive={setActive}
                  sort={sort}
                  length={products && products.length}
                />
              </div>
            </div>
          </div>

          2.Marketing collateral
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <p className="sustainability">Marketing Collaterals</p>
                tab filter
                <TabContainer defaultActiveKey="grid">
                  <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-6">
                      <div className="product-showing mb-40">
                        Active sort product
                        <p>{activeData(active, sort, products)}</p>
                      </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-6">
                      <div className="shop-tab f-right">
                        <Nav
                          as="ul"
                          className="nav text-center"
                          id="myTab"
                          role="tablist"
                        >
                          <Nav.Item as="li">
                            <Nav.Link
                              as="a"
                              href="#"
                              onClick={(e) => e.preventDefault()}
                              eventKey="list"
                            >
                              <i className="fas fa-list-ul" />{" "}
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Nav.Link
                              as="a"
                              href="#"
                              onClick={(e) => e.preventDefault()}
                              eventKey="grid"
                            >
                              <i className="fas fa-th-large" />
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </div>
                      <div className="pro-filter-btn mb-40 f-right">
                        <button id="filter-btn">Filter +</button>
                      </div>
                    </div>
                  </div>
                  tab content
                  <TabContent>
                    <TabPane eventKey="grid">
                      <section className="banner-area pt-30 pl-15 pr-15">
                        <MultipleRowsSlider>
                          {products && products
                            .filter((product) => product.tags.includes("marketing-collateral")) // Filter products that have "sustainable" tag
                            .map((product) => (
                              <div key={product.id}>
                                <Product product={product} />
                              </div>
                            ))}
                        </MultipleRowsSlider>
                      </section>
                    </TabPane>
                    <TabPane eventKey="grid">
                      <div className="row">
                        {products &&
                          products.map((product, i) => (
                            <div
                              className={`col-lg-4 col-md-6 ${dblock(
                                active,
                                i,
                                sort
                              )}`}
                              key={product.id}
                            >
                              <Product product={product} />
                            </div>
                          ))}
                      </div>
                    </TabPane>
                    <TabPane eventKey="list">
                      {products &&
                        products.map((product, i) => (
                          <div key={i} className={`${dblock(active, i, sort)}`}>
                            <ProductListView product={product} />
                          </div>
                        ))}
                    </TabPane>
                  </TabContent>
                </TabContainer>

                <Paggination
                  active={active}
                  setActive={setActive}
                  sort={sort}
                  length={products && products.length}
                />
              </div>
            </div>
          </div>

          3.Merchandise
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <p className="sustainability">Merchandise</p>
                tab filter
                <TabContainer defaultActiveKey="grid">
                  <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-6">
                      <div className="product-showing mb-40">
                        Active sort product
                        <p>{activeData(active, sort, products)}</p>
                      </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-6">
                      <div className="shop-tab f-right">
                        <Nav
                          as="ul"
                          className="nav text-center"
                          id="myTab"
                          role="tablist"
                        >
                          <Nav.Item as="li">
                            <Nav.Link
                              as="a"
                              href="#"
                              onClick={(e) => e.preventDefault()}
                              eventKey="list"
                            >
                              <i className="fas fa-list-ul" />{" "}
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Nav.Link
                              as="a"
                              href="#"
                              onClick={(e) => e.preventDefault()}
                              eventKey="grid"
                            >
                              <i className="fas fa-th-large" />
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </div>
                      <div className="pro-filter-btn mb-40 f-right">
                        <button id="filter-btn">Filter +</button>
                      </div>
                    </div>
                  </div>
                  tab content
                  <TabContent>
                    <TabPane eventKey="grid">
                      <section className="banner-area pt-30 pl-15 pr-15">
                        <MultipleRowsSlider>
                          {products && products
                            .filter((product) => product.tags.includes("merchandise")) // Filter products that have "sustainable" tag
                            .map((product) => (
                              <div key={product.id}>
                                <Product product={product} />
                              </div>
                            ))}
                        </MultipleRowsSlider>
                      </section>
                    </TabPane>
                    <TabPane eventKey="grid">
                      <div className="row">
                        {products &&
                          products.map((product, i) => (
                            <div
                              className={`col-lg-4 col-md-6 ${dblock(
                                active,
                                i,
                                sort
                              )}`}
                              key={product.id}
                            >
                              <Product product={product} />
                            </div>
                          ))}
                      </div>
                    </TabPane>
                    <TabPane eventKey="list">
                      {products &&
                        products.map((product, i) => (
                          <div key={i} className={`${dblock(active, i, sort)}`}>
                            <ProductListView product={product} />
                          </div>
                        ))}
                    </TabPane>
                  </TabContent>
                </TabContainer>

                <Paggination
                  active={active}
                  setActive={setActive}
                  sort={sort}
                  length={products && products.length}
                />
              </div>
            </div>
          </div>
          
        </section> */}

        <section className="shop-area pb-30">
          <div className="container">
            <TabContainer defaultActiveKey="all">
              <div className="row" style={{marginTop:'40px'}}>
                <div className="col-xl-5 col-lg-5 col-md-6">
                  <div className="product-showing mb-40">
                    <p>{activeData(active, sort, products)}</p>
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
                {/* <TabContainer defaultActiveKey="all" > */}
                  <TabContent className="tab-content" id="myTabContent">
                    <TabPane eventKey="all">
                      <div className="row">
                        {products &&
                          products.map((product, i) => (
                            <div
                              className={`col-lg-4 col-md-6 ${dblock(
                                active,
                                i,
                                sort
                              )}`}
                              key={product.id}
                            >
                              <Product product={product} />
                            </div>
                          ))}
                      </div>
                      <Paggination
                        active={active}
                        setActive={setActive}
                        sort={sort}
                        length={products && products.length}
                      />
                    </TabPane>

                    <TabPane eventKey="corporate">
                      <div className="row">
                        {products &&
                          products
                            .filter((product) => product.tags.includes("corporate")) // Filter products with the "corporate" tag
                            .map((product, i) => (
                              <div
                                className={`col-lg-4 col-md-6 ${dblock(active, i, sort)}`}
                                key={product.id}
                              >
                                <Product product={product} />
                              </div>
                            ))}
                      </div>
                      <Paggination
                        active={active}
                        setActive={setActive}
                        sort={sort}
                        length={products && products.filter((product) => product.tags.includes("corporate")).length}
                      />
                    </TabPane>

                    <TabPane eventKey="merchandise">
                      <div className="row">
                        {products &&
                          products
                            .filter((product) => product.tags.includes("merchandise")) // Filter products with the "merchandise" tag
                            .map((product, i) => (
                              <div
                                className={`col-lg-4 col-md-6 ${dblock(active, i, sort)}`}
                                key={product.id}
                              >
                                <Product product={product} />
                              </div>
                            ))}
                      </div>
                      <Paggination
                        active={active}
                        setActive={setActive}
                        sort={sort}
                        length={products && products.filter((product) => product.tags.includes("merchandise")).length}
                      />
                    </TabPane>
                    
                  </TabContent>
                {/* </TabContainer> */}
              </div>
              </div>
            </TabContainer>
          </div>
        </section>

      </main>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  home1: state.home.home1,
  products: state.product.products,
});

export default connect(mapStateToProps, { getProducts, getHome1 })(Products);