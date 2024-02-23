import Link from "next/link";
import { connect } from "react-redux";
import {
  filterByBrand,
  filterByCatagory,
  filterByColor,
  filterByName,
  filterByPrice,
  filterBySize,
  filterByTags,
} from "../../../redux/action/filter";
import ColorFilter from "./ColorFilter";
import FilterByCheckBox from "./FilterByCheckBox";
import FilterByTags from "./FilterByTags";
import PriceFilter from "./PriceFilter";

const Filter = ({
  filterByName,
  search,
  filterByBrand,
  filterByCatagory,
  filterBySize,
  filterByPrice,
  filterByColor,
  setActive_,
  filterByTags,
  products,
}) => {
  const size = ["L", "M", "X", "XL", "XXL"],
    brand = [
      "ikea",
      "steelcase",
      "stickley",
      "nike",
      "everlane",
      "asos",
      "gucci",
      "dior",
      "chanel",
    ],
    category = [
      "Custom",
      "ladies",
      "gent",
      "Clothing",
      "jacket",
      "tshart",
      "lamp",
      "chair",
    ];

  return (
    <div className="col-xl-4 col-lg-4">
      <div className="sidebar-box">
        <div className="shop-widget">
          <h3 className="shop-title">Search by</h3>
          <form
            action="#"
            className="shop-search"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              value={search}
              onChange={(e) => filterByName(e.target.value)}
              placeholder="Your keyword...."
            />
            <button>
              <i className="fa fa-search" />
            </button>
          </form>
        </div>
        <FilterByCheckBox
          title="Brand"
          arr={brand}
          funtion={filterByBrand}
          setActive_={setActive_}
        />
        <PriceFilter filterByPrice={filterByPrice} setActive_={setActive_} />
        <FilterByCheckBox
          title="Product Size"
          arr={size}
          funtion={filterBySize}
          setActive_={setActive_}
        />
        <FilterByCheckBox
          title="Catergories"
          arr={category}
          funtion={filterByCatagory}
          setActive_={setActive_}
        />

        <FilterByTags filterByTags={filterByTags} setActive_={setActive_} />
        <ColorFilter filterByColor={filterByColor} setActive_={setActive_} />

        <div className="shop-widget">
          <h3 className="shop-title">Recent Product</h3>
          <ul className="shop-sidebar-product">
            {products &&
              products.map(
                (product, i) =>
                  i < 3 && (
                    <li key={product.id}>
                      <div className="side-pro-img">
                        <Link href={`/shop/${product.id}`}>
                          <img src={product.img2} alt="Product" />
                        </Link>
                      </div>
                      <div className="side-pro-content">
                        <div className="side-pro-rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5>
                          <Link href={`/shop/${product.id}`}>
                            {product.name}
                          </Link>
                        </h5>
                        <div className="side-pro-price">
                          <span>
                          ₹{Number(product.mainPrice).toFixed(2)} INR
                          </span>
                        </div>
                      </div>
                    </li>
                  )
              )}
          </ul>
        </div>
        <div className="shop-widget">
          <div className="shop-sidebar-banner">
            <Link href="/shop">
              <img src="img/banner/shop-banner.jpg" alt="Banner" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  search: state.filter.search,
  products: state.product.products,
});

export default connect(mapStateToProps, {
  filterByName,
  filterByBrand,
  filterByCatagory,
  filterBySize,
  filterByPrice,
  filterByColor,
  filterByTags,
})(Filter);
