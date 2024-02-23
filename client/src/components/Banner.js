import Link from "next/link";
const Banner = ({ banner }) => {
  return (
    <section className="banner-area pt-30 box-90">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="banner-2 pos-relative mb-30">
              <Link href="/shop">
                <a>
                  <img src={banner && banner.one.img} alt="Banner image" />
                </a>
              </Link>

              <div className="banner-trend">
                <span>{banner && banner.one.subTitle}</span>
                <h2>
                  <Link href="/shop">
                    <a>
                      {banner && banner.one.title} {new Date().getFullYear()}
                    </a>
                  </Link>
                </h2>
                <div className="discover-link">
                  <Link href="/shop">
                    <a>{banner && banner.one.link}</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="banner-2 pos-relative mb-30">
              <Link href="/shop">
                <a>
                  <img src={banner && banner.two.img} alt="Banner" />
                </a>
              </Link>

              <div className="banner-look">
                <span>{banner && banner.two.subTitle}</span>
                <h2>{banner && banner.two.title}</h2>
                <img src={banner && banner.two.lookImg} alt="Look" />
                <p>{banner && banner.two.text}</p>
                <Link href="/shop">
                  <a className="btn theme-btn">{banner && banner.two.link}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
