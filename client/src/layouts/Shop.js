import { useEffect, useState } from "react";
import { Nav, TabContainer, TabContent, TabPane } from "react-bootstrap";
import { connect } from "react-redux";
import Paggination from "../components/Paggination";
import Filter from "../components/product/filter/Filter";
import Product from "../components/product/Product";
import ProductListView from "../components/product/ProductListView";
import { getProducts } from "../redux/action/product";
import { getProductByFilter } from "../utils/filterProduct";
import { activeData, dblock } from "../utils/utils";
import Layout from "./Layout";
import PageTitle from "./PageTitle";
import Cookies from "universal-cookie";


const Shop = ({
  products,
  getProducts,
  col,
  banner,
  defultActive,
  leftSideBar,
}) => {
  const cookies = new Cookies();
    const email = cookies.get("Email") || null;
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState(false);
  let sort = 6;
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Layout footerBg container textCenter sticky>
      <main>
        {/* <PageTitle active="Shop" pageHeading="" dataBackground={'img/bg/services.png'}/> */}
        <section className="shop-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              {leftSideBar && <Filter setActive_={() => setActive(0)} />}
              <div
                className={` ${
                  !filter ? "col-lg-8 col-xl-12" : "col-xl-8 col-lg-8"
                } `}
              >
                {/* <div className="shop-banner mb-50">
                  <img src={banner} alt="Banner" />
                </div> */}

                {/* <TabContainer
                  defaultActiveKey={defultActive ? defultActive : "grid"}
                > */}
                <TabContainer defaultActiveKey="grid">
                  <div className="row">
                    {/* <div className="col-xl-5 col-lg-5 col-md-6">
                      <div className="product-showing mb-40">
                        Active sort product
                        <p>{activeData(active, sort, products)}</p>
                      </div>
                    </div> */}
                    {/* <div className="col-xl-7 col-lg-7 col-md-6">
                      <div className="shop-tab f-right">
                        <Nav
                          as="ul"
                          className="nav text-center"
                          id="myTab"
                          role="tablist"
                        >
                          <Nav.Item as="li">
                            <Nav.Link
                              style={{
                                backgroundColor: `${!filter ? "white" : ""}`,
                              }}
                              as="a"
                              href="#"
                              onClick={(e) => {
                                if (filter == false) {
                                  setFilter(true);
                                } else {
                                  setFilter(false);
                                }
                              }}
                              eventKey="grid"
                            >
                              <i
                                style={{ color: `${!filter ? "red" : ""}` }}
                                className="fas fa-list-ul"
                              />{" "}
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item as="li" style={{ display: "none" }}>
                            <Nav.Link
                              as="a"
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                setFilter(false);
                              }}
                              eventKey="grid"
                            >
                              <i className="fas fa-th-large" />
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </div>
                    </div> */}
                  </div>
                  {/* tab content */}
                  <TabContent>
                    <TabPane eventKey="grid">
                      <div className="row">
                        {products && products.length > 0 ? (
                          products.map((product, i) => (
                            <div
                              className={`${col} ${dblock(active, i, sort)}`}
                              key={product.id}
                            >
                              <Product
                                wrapperPadding0={true}
                                product={product}
                              />
                            </div>
                          ))
                        ) : (
                          <h2 className="text-center d-block w-100 mt-5">
                            No Product Found
                          </h2>
                        )}
                      </div>
                    </TabPane>
                    <TabPane eventKey="list">
                      {products &&
                        products.map((product, i) => (
                          <div key={i} className={`${dblock(active, i, sort)}`}>
                            <ProductListView product={product} col5={true} />
                          </div>
                        ))}
                    </TabPane>
                  </TabContent>
                </TabContainer>

                {/* <Paggination
                  active={active}
                  setActive={setActive}
                  sort={sort}
                  length={products && products.length}
                /> */}
              </div>

              {filter && <Filter />}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  products: getProductByFilter(state.product.products, state.filter),
});

export default connect(mapStateToProps, { getProducts })(Shop);
