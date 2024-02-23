import counterOnedata from "../CounterOne/counterOnedata";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import VisibilityCountUp from "../CounterOne/VisibilityCountUp";

const { bg, counters } = counterOnedata;

const CounterOne = () => {
  return (
    <section className="counter-one animate glow delay-3">
      {/* <div> */}
      <Container className="main-counter ">
        {/* <Col xl={12}> */}
        {/* <ul className="list-unstyled counter-one__list"> */}
        {/* <div className="main-counter"> */}
        {counters.map(({ id, icon, title, count }) => (
          <div key={id} className="counter-one__single animated fadeInUp">
            <div className="counter-one__icon ">
              <img src={icon} alt="" srcSet="" />
            </div>
            <h3 className="odometer">
              <VisibilityCountUp count={count} />
            </h3>
            <p className="counter-one__text">{title}</p>
          </div>
        ))}
        {/* </div> */}
        {/* </ul> */}
        {/* </Col> */}
        {/* </Row> */}
      </Container>
      {/* </div> */}
    </section>
  );
};

export default CounterOne;
