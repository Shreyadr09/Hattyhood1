import { Modal, Nav, Tab } from "react-bootstrap";
import toast from "react-hot-toast";
import { connect } from "react-redux";
import {
  addToCart,
  addWishlist,
  decreaseCart,
} from "../../redux/action/utilis";
const ProductModal = ({
  show,
  handleClose,
  product,
  carts,
  wishlists,
  addToCart,
  addWishlist,
  decreaseCart,
}) => {
  const size = ["L", "M", "X", "XL", "XXL"];

  const cart = product && carts && carts.find((cart) => cart.id === product.id);
  const wishlist =
    product &&
    wishlists &&
    wishlists.find((wishlist) => wishlist.id === product.id);
  return (
    <Modal show={show} onHide={handleClose}>
      
      <Modal.Body>
      <i
                  className= "fas fa-times   "
                  onClick={() => handleClose()} style={{zIndex:"400",position:"absolute",right:"-1%",top:"-0.5%", 
                  height:" 30px",
                  width: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color:" #fe4536",  
                  cursor: "pointer",  borderRadius:" 50%",


                  background: "white",
                  height:" 30px",width: "30px"
                }}
                />
      
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <Tab.Container defaultActiveKey="tum-0">
              <div className="product-details-img mb-10">
              
                <Tab.Content id="myTabContentpro">
                  {product &&
                    product.images.map((img, i) => (
                      <Tab.Pane key={i} eventKey={`tum-${i}`}>
                        <div className="product-large-img">
                          <img src={img.src} alt="tum" />
                        </div>
                      </Tab.Pane>
                    ))}
                </Tab.Content>
              </div>

              <div className="shop-thumb-tab ">
                <Nav as="ul">
                  {product &&
                    product.images.map((img, i) => (
                      <Nav.Item as="li" key={i}>
                        <Nav.Link
                          as="a"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          eventKey={`tum-${i}`}
                        >
                          <img src={img.src} alt="Tum" />{" "}
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                </Nav>
              </div>
            </Tab.Container>
          </div>
          <div className="col-xl-6 col-lg-6">
         
            <div className="product-details ">
              <div className="details-cat mb-10 d-flex align-items-center justify-content-between">
                {/* <div>
                  {" "}
                  <a href="#">decor,</a>
                  <a href="#">{product && product.brand}</a>
                </div> */}

                
              </div>
              <h2 className="pro-details-title mb-15 fs-30">
                {product && product.name}
              </h2>
              {/* <div className="details-price mb-10 fs-25">
                <span>${Number(product && product.mainPrice).toFixed(2)}</span>
                {product && product.price && (
                  <span className="old-price">
                    ${Number(product.price).toFixed(2)}
                  </span>
                )}
              </div> */}
              <div className="product-variant ">
                {/* {product && product.colors && product.colors.length > 0 && (
                  <div className="product-color variant-item modal-p-15">
                    <div className="variant-name">
                      <span>Colors</span>
                    </div>
                    <ul className="shop-link shop-color">
                      {product.colors.map((color) => (
                        <li key={color}>
                          <a href="#" onClick={(e) => e.preventDefault()}>
                            <span className={color} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )} */}

                {/* {product && product.size && (
                  <div className="product-size variant-item modal-p-15">
                    <div className="variant-name">
                      <span>size</span>
                    </div>
                    <ul className="shop-link shop-size">
                      {size &&
                        size.map((size) => (
                          <li
                            key={size}
                            className={
                              size.toLowerCase() === product.size.toLowerCase()
                                ? "active"
                                : ""
                            }
                          >
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              {size}
                            </a>
                          </li>
                        ))}
                    </ul>
                  </div>
                )} */}
                <div className="product-desc variant-item modal-p-15">
  <h4>Features</h4>
  <ul style={{ marginLeft: '20px', color: 'black', listStyle: 'none', paddingLeft: '20px' }}>
    {product.features && product.features.length > 0 ? (
      product.features.map((feature, index) => (
        <li key={index} style={{ marginBottom: '8px', position: 'relative' }}>
          <span style={{ position: 'absolute', left: '-20px', top: '2px' }}>
            &#x2022; {/* Use Unicode character for bullet point */}
          </span>
          {feature}
        </li>
      ))
    ) : (
      <li>No features available.</li> 
    )}
  </ul>
</div>

                <div className="product-info-list variant-item modal-p-15">
                  <ul>
                    {/* <li className="text-capitalize">
                      <span>Brands:</span> {product && product.brand}
                    </li> */}
                    <li>
                      <span>Product Code:</span>{" "}
                      {product && product.id}
                    </li>
                    {/* <li>
                      <span>Reward Points:</span> 100
                    </li> */}
                    <li>
                      <span>Stock:</span>{" "}
                      {product && product.stock
                              ? <span className="in-stock">In Stock</span>
                              : <span className="out-stock">Out Of Stock</span>
                                }
                      
                    </li>
                  </ul>
                </div>
                
                <div className="product-action-details variant-item modal-p-15">
                  <div className="product-details-action d-flex">
                    <div className="product-quantity">
                      <div className="cart-plus-minus">
                        <p>{cart ? cart.qty : 1}</p>
                        <div
                          className="dec qtybutton"
                          onClick={() => {
                            cart && cart.qty !== 1 && decreaseCart(cart);
                          }}
                        >
                          -
                        </div>
                        <div
                          className="inc qtybutton"
                          onClick={() => {
                            addToCart(product);
                            toast.success("Successfully added to cart.");
                          }}
                        >
                          +
                        </div>
                      </div>
                    </div>
                    {/* <button
                      className={`${
                        wishlist ? "active" : ""
                      } details-action-icon`}
                      type="submit"
                      onClick={() => {
                        addWishlist(product);
                        toast.success("Successfully added item in wishlist.");
                      }}
                    >
                      <i className="fas fa-heart" />
                    </button> */}
                    {/* <button className="details-action-icon" type="submit">
                      <i className="fas fa-hourglass" />
                    </button> */}
                  </div>
                  {/* {!cart && (
                    <div
                      className="details-cart mt-20"
                      onClick={() => {
                        addToCart(product);
                        toast.success("Successfully add to cart.");
                      }}
                    >
                      <button className="btn theme-btn">purchase now</button>
                    </div>
                  )} */}

                  {!cart && (
                    <div className="details-cart mt-20" onClick={() => {
                        const cookies = document.cookie; // Get the cookies or tokens from your website
                        console.log(cookies);
                        var url = window.location.href;
                        var productId = url.split("/shop/")[1];
                        console.log(productId);

                        const redirectURL = "https://www.hattyhood.com/customisation/";
                        // const redirectURL = "http://localhost:5000/";
                        // const urlWithCookies = `${redirectURL}?ProductId`;

                        window.open(redirectURL, "_blank");
                      }}>
                        <button className="btn theme-btn">Get your Product</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  carts: state.utilis.carts,
  wishlists: state.utilis.wishlist,
});

export default connect(mapStateToProps, {
  addToCart,
  addWishlist,
  decreaseCart,
})(ProductModal);