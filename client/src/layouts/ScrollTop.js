import { useEffect, useState } from "react";

const ScrollTop = () => {
  const [scrollTop, setScrollTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    let offset = window.scrollY;
    const sticky = document.getElementById("scrollUp");
    if (sticky) {
      if (offset > 300) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    }
  };

  return (
    <a
      id="scrollUp"
      href="https://wa.me/918431341521"
      target="_blank"
      rel="noreferrer"
      style={{
        position: "fixed",
        zIndex: 10,
        display: scrollTop ? "block" : "block",
      }}
    >
      <i className="fab fa-whatsapp my-icon-class"/>
    </a>
  );
};

export default ScrollTop;
