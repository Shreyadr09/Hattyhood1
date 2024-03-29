import Link from "next/link";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import BlogSideBar from "../../src/components/blog/BlogSideBar";
import Paggination from "../../src/components/Paggination";
import VideoPopUp from "../../src/components/VideoPopUp";
import Layout from "../../src/layouts/Layout";
import PageTitle from "../../src/layouts/PageTitle";
import { getBlog } from "../../src/redux/action/blog";
import { dblock } from "../../src/utils/utils";

const Blog = ({ getBlog, blogs }) => {
  useEffect(() => {
    getBlog();
  }, []);
  const [opup, setOpup] = useState(false);
  const [active, setActive] = useState(0);
  return (
    <Layout sticky textCenter footerBg container>
      <main>
        {/* <PageTitle active="Blog" pageHeading="Blog" /> */}
        <section className="blog-area pt-120 pb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                {blogs &&
                  blogs.map((blog, i) => (
                    <article
                      className={`postbox post format-image mb-40 ${dblock(
                        active,
                        i,
                        2
                      )}`}
                      key={blog.id}
                    >
                      {blog.video ? (
                        <div className="postbox__video">
                          {opup && (
                            <VideoPopUp
                              video={blog.video}
                              closePopup={() => setOpup(false)}
                            />
                          )}
                          <img src={blog.img} alt="blog image" />
                          <a
                            className="popup-video video-btn"
                            //    href="https://www.youtube.com/watch?v=Y6MlVop80y0"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setOpup(true);
                            }}
                          >
                            <i className="fas fa-play" />
                          </a>
                        </div>
                      ) : (
                        <div className="postbox__thumb">
                          <Link href={`/blog/${blog.id}`}>
                            <img src={blog.img} alt="blog image" />
                          </Link>
                        </div>
                      )}

                      <div className="postbox__text p-50">
                        <div className="post-meta mb-15">
                          <span>
                            <i className="far fa-calendar-check" /> {blog.date}{" "}
                          </span>
                          {/* <span>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              <i className="far fa-user" />
                              {blog.author.name}
                            </a>
                          </span> */}
                          <span>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              <i className="far fa-comments" />{" "}
                              {blog.comments.length} Comments
                            </a>
                          </span>
                        </div>
                        <h3 className="blog-title">
                          <Link href={`/blog/${blog.id}`}>
                            <a>{blog.title}</a>
                          </Link>
                        </h3>
                        <div className="post-text mb-20">
                          {blog.des.div.p && (
                            <p>
                              {String(blog.des.div.p).slice(0, 400).replace(/\n/g, '<br>')}
                            </p>
                          )}
                        </div>
                        <div className="read-more mt-30">
                          <Link href={`/blog/${blog.id}`}>
                            <a className="btn theme-btn">read more</a>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                <article className="postbox post format-quote mb-40">
                  <div className="post-text">
                    <blockquote>
                      <p>
                        hello ipsum dolor sit amet, consectetur cing elit, sed
                        do eiusmod tempor.
                      </p>
                      <footer>- Rosalina Pong</footer>
                    </blockquote>
                  </div>
                </article>
                <Paggination
                  active={active}
                  setActive={setActive}
                  sort={2}
                  length={blogs && blogs.length}
                />
              </div>
              <BlogSideBar blogs={blogs} blog={blogs && blogs[0]} />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  blogs: state.blog.blogs,
});

export default connect(mapStateToProps, { getBlog })(Blog);
