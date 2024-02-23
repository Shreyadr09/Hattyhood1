import Link from "next/link";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { connect, useSelector } from "react-redux";
import {
  addToCart,
  addWishlist,
  compare,
  getWishlist,
  removeCompare,
} from "../../redux/action/utilis";
import ProductModal from "./ProductModal";
import LazyLoad from "react-lazyload";
import { BlurhashCanvas } from "react-blurhash";
import { encode } from "blurhash";

const Product = ({
  product,
  wrapperPadding0,
  addToCart,
  addWishlist,
  compare,
  removeCompare,
}) => {
  const wishlist = useSelector((state) => state.utilis.wishlist);
  const compares = useSelector((state) => state.utilis.compares);

  const [quickView, setQuickView] = useState(false);
  const [primaryImgLoaded, setPrimaryImgLoaded] = useState(false);
  const [secondaryImgLoaded, setSecondaryImgLoaded] = useState(false);
  const [addCompare, setAddCompare] = useState(false);
  const [addCart, setaddCart] = useState(false);
  const [addWishlist_, setAddWishlist_] = useState(false);
  const [blurhash, setBlurhash] = useState(null);
  

  const handlePrimaryImgLoad = () => {
    setPrimaryImgLoaded(true);
  };

  const handleSecondaryImgLoad = () => {
    setSecondaryImgLoaded(true);
  };

  const onClickCompare = (e) => {
    e.preventDefault();
    setAddCompare(true);
    const exitsItem = compares.find((compare) => compare.id === product.id);
    if (compares.length < 3) {
      if (exitsItem) {
        toast.error("Removed item from compare.");
        compare(product);
      } else {
        toast.success("Added item in Compare.");
        compare(product);
      }
    } else {
      if (exitsItem) {
        toast.error("Removed item from compare.");
        removeCompare(product);
      } else {
        toast.error("Compare is full please remove item from compare list.");
      }
    }
  };

  const onClickCart = (e) => {
    e.preventDefault();
    addToCart(product);
    setaddCart(true);
    toast.success("Added item in Cart.");
  };
  const onClickWishlist = (e) => {
    e.preventDefault();
    addWishlist(product);
    setAddWishlist_(true);
    const wishlist_ = wishlist.find((wishlist) => wishlist.id === product.id);
    if (wishlist_) {
      toast.error("Removed item in wishlist.");
    } else {
      toast.success("Added item in wishlist.");
    }
  };

  return (
    <div className={`product-wrapper padingleft   ${wrapperPadding0 ? "p-0" : ""}`}>
      <ProductModal
        show={quickView}
        handleClose={() => setQuickView(false)}
        product={product}
      />

      <div className="product-img mb-25"
      style={{
          borderRadius: "10px",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        }}
      >
        <Link href={`/shop/${product.id}`}>
          <a title="Quick View">
            <LazyLoad height={210} width={300} once style={{height:'210px'}}>
              {!primaryImgLoaded && (
                <BlurhashCanvas
                  className="blurhash-canvas"
                  hash={product.blurhash}
                  punch={1}
                  width={300}
                  height={210}
              
                  // style={{ width: "300px", height: "220px" }}
                />
              )}
              <img
                style={{
                  width: "300px",
                  height: "210px",
                  display: primaryImgLoaded ? "block" : "none",
                }}
                src={product.img1}
                alt="img 1"
                onLoad={handlePrimaryImgLoad}
              />
            </LazyLoad>
          </a>
        </Link>
        {/* <div className="product-action " style={{width:"fit-content"}} >
          <a href="#" onClick={(e) => onClickCart(e)} title="Shoppingb Cart">
            <i className="flaticon-shopping-cart" />
          </a>
          <a
            href={`/shop/${product.id}`}
            onClick={(e) => {
              e.preventDefault();
              setQuickView(true);
            }}
            title="Quick View"
          >
            <i className="flaticon-eye"  />
          </a>
          <a
            href="#"
            onClick={(e) => onClickCompare(e)}
            data-toggle="tooltip"
            data-placement="right"
            title="Compare"
            className={
              compares.find((compare) => compare.id === product.id)
                ? "active"
                : ""
            }
          >
            <i className="flaticon-compare" />
          </a>
        </div> */}
        {/* <div className="sale-tag">
          {product.new && <span className="new">new</span>}
          {product.sale && <span className="sale">sale</span>}
        </div> */}
        {/* <div className="outstock">
          {product.stock ? "":<span className="oos">Out of Stock</span>}
        </div> */}
        {/* <center>{product.stock ? "":<span className="outofstock">Out of Stock</span>}</center> */}
      </div>
      
      
      
      <div className="product-content">
        <div className="product-left">
          <div className="pro-cat">
            <h4>
              <Link href={`/shop/${product.id}`}>{product.name}</Link>
            </h4>
          </div>
          <div className="product-meta">
            <div className="pro-price">
              <span>{`$${Number(product.mainPrice).toFixed(2)} USD`}</span>
              {/* {product.price && (
                <span className="old-price">
                  {`$${Number(product.price).toFixed(2)} USD`}
                </span>
              )} */}
            </div>
          </div>
        </div>
        <div className="product-wishlist">
          <a
            href="#"
            onClick={(e) => onClickWishlist(e)}
            className={` ${
              wishlist && wishlist.find((pro) => pro.id === product.id)
                ? "active"
                : ""
            } `}
          >
            <i className="far fa-heart" title="Wishlist" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default connect(null, {
  addToCart,
  addWishlist,
  getWishlist,
  compare,
  removeCompare,
})(Product);
