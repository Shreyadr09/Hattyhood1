import Link from "next/link";
import { useState, useEffect } from "react";

const PageTitle = ({ pageHeading, dataBackground, active, thankupage, id }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = dataBackground;
    img.onload = () => setImageLoaded(true);

    return () => {
      img.onload = null;
    };
  }, [dataBackground]);

  const backgroundImageStyle = {
    backgroundImage: `url(${dataBackground})`,
  };

  return (
    <section className="breadcrumb-area" style={backgroundImageStyle}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="breadcrumb-text text-center">
              {thankupage && (
                <i
                  className="fa fa-check-circle text-success fs-100 mb-3"
                  aria-hidden="true"
                />
              )}

              <h1 className={thankupage ? "mb-2" : ""}>{pageHeading}</h1>
              {thankupage && (
                <p className="fs-20">
                  Payment is successfully processed and your order is on the
                  way <br /> Transaction ID:
                  {id}
                </p>
              )}
              <ul className="breadcrumb-menu">
                <li>
                  <Link href="/">
                    <a>home</a>
                  </Link>
                </li>
                <li>
                  <span>{active}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
