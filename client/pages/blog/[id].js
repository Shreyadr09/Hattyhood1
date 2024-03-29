import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import BlogSideBar from "../../src/components/blog/BlogSideBar";
import VideoPopUp from "../../src/components/VideoPopUp";
import Layout from "../../src/layouts/Layout";
import PageTitle from "../../src/layouts/PageTitle";
import { getBlog, getSingleBlog } from "../../src/redux/action/blog";
import blogData from "../../public/static/blog.json"; // Update the path accordingly

const BlogDetails = ({ getSingleBlog, getBlog, blogs, blog }) => {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    getBlog();
    getSingleBlog(id);
  }, [id]);
  const [popUp, setPopUp] = useState(false);
  return (
    <Layout sticky container textCenter footerBg>
      <main>
        {/* <PageTitle
          pageHeading=""
          active="Blog"
          dataBackground={"../img/bg/about.png"}
        /> */}
        {blog ? (
          <div className="blog-area pt-100 pb-100">
            <div className="container">
              {popUp && (
                <VideoPopUp
                  closePopup={() => setPopUp(false)}
                  video={blog.video}
                />
              )}
              <div className="row">
                <div className="col-lg-8">
                  <article className="postbox post format-image mb-40">
                    {blog.video ? (
                      <div className="postbox__video mb-35">
                        <img src={blog.img} alt="Blog" />
                        <a
                          className="popup-video video-btn"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setPopUp(true);
                          }}>
                          <i className="fas fa-play" />
                        </a>
                      </div>
                    ) : (
                      blog.img && (
                        <div className="postbox__thumb mb-35">
                          <img src={blog.img} alt="blog image" />
                        </div>
                      )
                    )}

                    <div className="postbox__text bg-none">
                      <div className="post-meta mb-15">
                        {blog.date && (
                          <span>
                            <i className="far fa-calendar-check" /> {blog.date}{" "}
                          </span>
                        )}
                        {/* {blog.author && (
                          <span>
                            <a href="#">
                              <i className="far fa-user" /> {blog.author.name}
                            </a>
                          </span>
                        )} */}
                        {blog.comments && (
                          <span>
                            <a href="#">
                              <i className="far fa-comments" />{" "}
                              {blog.comments.length} Comments
                            </a>
                          </span>
                        )}
                      </div>
                      {blog.title && (
                        <h3 className="blog-title">{blog.title}</h3>
                      )}

                      {blog.des && blog.des.div && (
                        <div className="post-text mb-20">
                          {blog.des.div.p && (
                            <div>
                              {blog.des.div.p.map((para, index) => (
                                <p
                                  key={index}
                                  dangerouslySetInnerHTML={{ __html: para.replace(/\n/g, '<br>') }}
                                />
                              ))}
                            </div>
                          )}
                          {blog.des.div.blockquote && (
                            <blockquote>
                              <p>{blog.des.div.blockquote.p}</p>
                              <footer>{blog.des.div.blockquote.footer}</footer>
                            </blockquote>
                          )}
                          {/* {blog.des.div.div && (
                            <div>
                              {blog.des.div.div.map((item, index) => (
                                <div key={index} className="inner-content">
                                  {item.h4 && <h4>{item.h4}</h4>}
                                  {item.p && <p>{item.p}</p>}
                                </div>
                              ))}
                            </div>
                          )} */}
                          {/* {blog.des.div.div[0].img && (
                            <div className="blog-inner-img mb-30 mt-30">
                              <img src={blog.des.div.div[0].img.src} alt="blog image" />
                            </div>
                          )} */}
                        </div>
                      )}

                      <div className="row mt-50">
                        <div className="col-xl-8 col-lg-8 col-md-8 mb-15">
                          <div className="blog-post-tag">
                            <span>Related Tags</span>
                            {blog.tags &&
                              blog.tags.map((tag) => (
                                <a href="#" key={tag}>
                                  {tag}
                                </a>
                              ))}
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 mb-15">
                          <div className="blog-share-icon text-left text-md-right">
                            <span>Share: </span>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                            <a href="#">
                              <i className="fab fa-google-plus-g" />
                            </a>
                            <a href="#">
                              <i className="fab fa-vimeo-v" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        {/* <div className="col-12">
                          <div className="navigation-border pt-50 mt-40" />
                        </div> */}

                        <div className="col-xl-5 col-lg-5 col-md-5">
                          {blog.id !== 1 && (
                            <div className="bakix-navigation b-next-post text-left mb-30">
                              <span>
                                <Link href={`/blog/${blog.id - 1}`}>
                                  <a>Prev Post</a>
                                </Link>
                              </span>
                              <h4>
                                <Link href={`/blog/${blog.id - 1}`}>
                                  <a>
                                    {blogs &&
                                      blogs[blog.id - 2] &&
                                      blogs[blog.id - 2].title.slice(0, 20)}
                                  </a>
                                </Link>
                              </h4>
                            </div>
                          )}
                        </div>

                        {/* <div className="col-xl-2 col-lg-2 col-md-2 ">
                          <div className="bakix-filter text-left text-md-center mb-30">
                            <a href="#">
                              <img src="/img/icon/filter.png" alt="filter" />
                            </a>
                          </div>
                        </div> */}
                        {/* <div className="col-xl-5 col-lg-5 col-md-5">
                          {blogs && blogs.length !== blog.id && (
                            <div className="bakix-navigation b-next-post text-left text-md-right  mb-30">
                              <span>
                                <Link href={`/blog/${blog.id + 1}`}>
                                  <a>Next Post</a>
                                </Link>
                              </span>
                              <h4>
                                <Link href={`/blog/${blog.id + 1}`}>
                                  <a>
                                    {blogs && blogs.length !== blog.id
                                      ? blogs[blog.id].title.slice(0, 20)
                                      : ""}
                                  </a>
                                </Link>
                              </h4>
                            </div>
                          )}
                        </div> */}
                      </div>
                    </div>
                    {/* {blog.author && (
                      <div className="author mt-80 mb-40">
                        <div className="author-img text-center">
                          <img src={blog.author.img} alt="Author image" />
                        </div>
                        <div className="author-text text-center">
                          <h3>MD. Salim Rana</h3>
                          <div className="author-icon">
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                            <a href="#">
                              <i className="fab fa-behance-square" />
                            </a>
                            <a href="#">
                              <i className="fab fa-youtube" />
                            </a>
                            <a href="#">
                              <i className="fab fa-vimeo-v" />
                            </a>
                          </div>
                          <p>
                            I am in author para{" "}
                          </p>
                        </div>
                      </div>
                    )} */}
                    {/* <div className="post-comments">
                      <div className="blog-coment-title mb-30">
                        <h2>
                          {blog && blog.comments.length <= 9
                            ? `0${blog.comments.length}`
                            : blog.comments.length}{" "}
                          Comments
                        </h2>
                      </div>
                      <div className="latest-comments">
                        <ul>
                          {blog &&
                            blog.comments.map((comment, i) => (
                              <li key={i}>
                                <div className="comments-box">
                                  <div className="comments-avatar">
                                    <img
                                      src={comment.profilePic}
                                      alt="profilePic"
                                    />
                                  </div>
                                  <div className="comments-text">
                                    <div className="avatar-name">
                                      <h5>{comment.author}</h5>
                                      <span>{comment.date}</span>
                                      <a className="reply" href="#">
                                        <i className="fas fa-reply" />
                                        Reply
                                      </a>
                                    </div>
                                    <p>{comment.text}</p>
                                  </div>
                                </div>
                                {comment.replay && (
                                  <ul>
                                    {comment.replay.map((replay, r) => (
                                      <li className="children" key={r}>
                                        <div
                                          className="comments-box"
                                          style={{
                                            padding: "30px 0",
                                            borderTop: "1px solid #eaedff",
                                          }}>
                                          <div className="comments-avatar">
                                            <img
                                              src={replay.profilePic}
                                              alt="Profile Pic"
                                            />
                                          </div>
                                          <div className="comments-text">
                                            <div className="avatar-name">
                                              <h5>{replay.author}</h5>
                                              <span>{replay.date}</span>
                                              <a className="reply" href="#">
                                                <i className="fas fa-reply" />
                                                Reply
                                              </a>
                                            </div>
                                            <p>{replay.text}</p>
                                          </div>
                                        </div>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div> */}
                    {/* <div className="post-comments-form">
                      <div className="post-comments-title">
                        <h2>Post Comments</h2>
                      </div>
                      <form
                        id="contacts-form"
                        className="conatct-post-form"
                        action="#"
                        onSubmit={(e) => e.preventDefault()}
                      >
                        <div className="row">
                          <div className="col-xl-12">
                            <div className="contact-icon contacts-message">
                              <textarea
                                name="comments"
                                id="comments"
                                cols={30}
                                rows={10}
                                placeholder="Your Comments...."
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <div className="contact-icon contacts-name">
                              <input type="text" placeholder="Your Name.... " />
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <div className="contact-icon contacts-email">
                              <input
                                type="email"
                                placeholder="Your Email...."
                              />
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <div className="contact-icon contacts-website">
                              <input
                                type="text"
                                placeholder="Your Website...."
                              />
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <button className="btn theme-btn" type="submit">
                              Post comment
                            </button>
                          </div>
                        </div>
                      </form>
                    </div> */}
                  </article>
                </div>
                <BlogSideBar blog={blog} blogs={blogs} />
              </div>
            </div>
          </div>
        ) : (
          <h1 className="text-center blog-area pt-100 pb-60">Post Not Found</h1>
        )}
      </main>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  blogs: state.blog.blogs,
  blog: state.blog.singleBlog,
});

export default connect(mapStateToProps, { getSingleBlog, getBlog })(
  BlogDetails
);
