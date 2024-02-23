import React from "react";
import LazyLoad from "react-lazyload";

const Card1 = ({ imgLocation, category, product_name, desc1, desc2, link }) => {
  return (
    <div className="minip">
      <div className="mg">
        <div className="clr"></div>
        <div className="group">
          <span>{category}</span>
        </div>
      </div>
      <LazyLoad height={200} offset={100} once>
      <div
        className="av"
        style={{
          overflow: "hidden",
          backgroundImage: `url(${imgLocation})`,
          }}>
        </div>
      </LazyLoad>
      <div className="info">
        <name>{product_name}</name>
        <deets>
          {desc1}
          <br />
          {desc2}
        </deets>
      </div>
      <a className="plot" title="Product" href={link}>
        View
      </a>
    </div>
  );
};

export default Card1;
