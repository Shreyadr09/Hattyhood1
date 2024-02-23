import { useState } from "react";
import { clickToActive } from "../../../utils/utils";

const FilterByTags = ({ filterByTags, setActive_ }) => {
  const tags = [
    "Custom",
    "ladies",
    "gent",
    "Clothing",
    "jacket",
    "tshart",
    "lamp",
    "chair",
  ];
  const [active, setActive] = useState([]);
  const activeFun = (value) => {
    filterByTags(value);
    setActive_();
    clickToActive(active, value, setActive);
  };
  return (
    <div className="shop-widget">
      <h3 className="shop-title">Tags</h3>
      <ul className="shop-tag">
        {tags &&
          tags.map((tag) => (
            <li key={tag}>
              <a
                href="#"
                className={`text-capitalize ${
                  active.includes(tag) ? "activeTag" : ""
                }`}
                onClick={(e) => {
                  activeFun(tag);
                  e.preventDefault();
                }}
              >
                {" "}
                {tag}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FilterByTags;
