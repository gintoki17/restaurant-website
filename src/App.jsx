import React, { useEffect, useRef } from "react";
import Logo from "../images/logo2.png";
import "../dist/css/styles.css";
import Hero from "../images/food.jpg";
import Collage from "../images/collage.jpg";
import Food1 from "../images/img1.jpg";
import Food2 from "../images/img2.jpg";
import Food3 from "../images/img3.jpg";
import Review1 from "../images/Review/review1.jpg";
import Review2 from "../images/Review/review2.jpg";
export default function App() {
  //active navbar
  const navigationRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const nav = navigationRef.current;

      if (nav) {
        if (document.documentElement.scrollTop > 20) {
          nav.classList.add("scroll-on");
        } else {
          nav.classList.remove("scroll-on");
        }
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const animateCounter = (id, start, end, duration) => {
    const counterElement = document.getElementById(id);

    if (!counterElement) {
      console.error(`Element with id '${id}' not found`);
      return;
    }

    const updateCount = (currentTime) => {
      const progress = currentTime / duration;
      const value = Math.floor(start + progress * (end - start));

      counterElement.innerText = value;

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    updateCount(0);
  };

  useEffect(() => {
    // Example usage of animateCounter
    animateCounter("count1", 0, 100, 2000);
    animateCounter("count2", 0, 200, 1500);
    animateCounter("count3", 0, 300, 2500);
    animateCounter("count4", 0, 400, 1800);
  }, []);

  const handleLinkClick = () => {
    let nav = document.querySelector(".navbar-collapse.collapse");
    if (nav) {
      // Close the navigation menu by removing the "show" class
      nav.classList.remove("show");
    }
  };
  return (
    <>
      <header>
        <nav
          ref={navigationRef}
          className="navbar navbar-expand-lg navigation-wrap"
        >
          <div className="container">
            <a className="navbar-brand" href="#home">
              <img src={Logo} alt="logo" width={65} height={60} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-stream navbar-toggler-icon"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#home"
                    onClick={handleLinkClick}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#about"
                    onClick={handleLinkClick}
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#explore-food"
                    onClick={handleLinkClick}
                  >
                    Explore Foods
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#testimonial"
                    onClick={handleLinkClick}
                  >
                    Reviews
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#faq" onClick={handleLinkClick}>
                    FAQ
                  </a>
                </li>
                <li>
                  <button className="main-btn" onClick={handleLinkClick}>
                    1200 345 123
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section id="home">
        <div className="container-fluid px-0 top-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6">
                <h1>Food food choices are good investments</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolores, numquam veritatis eaque delectus atque harum. Cum
                  autem sed non sunt?
                </p>
                <div className="mt-4">
                  <button className="main-btn">
                    Order now <i className="fas fa-shopping-basket ps-3"></i>
                  </button>
                  <button className="white-btn ms-lg-4 mt-lg-0 mt-4">
                    Order now <i className="fas fa-angle-right ps-3"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="counter">
        <div className="counter-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
                <h2>
                  <span id="count1"></span>+
                </h2>
                <p>SAVINGS</p>
              </div>
              <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
                <h2>
                  <span id="count2"></span>+
                </h2>
                <p>PHOTOS</p>
              </div>
              <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
                <h2>
                  <span id="count3"></span>+
                </h2>
                <p>ROCKETS</p>
              </div>
              <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
                <h2>
                  <span id="count4"></span>+
                </h2>
                <p>GLOBE</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="about-section wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md12 mb-lg-0 mb-5">
                <div className="card border-0">
                  <img src={Hero} alt="" className="img-fluid card-img" />
                </div>
              </div>
              <div className="col-lg-5 col-md-12 text-sec">
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur, nostrum.
                </h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Magni rem explicabo ratione temporibus perferendis similique
                  minus qui tempora suscipit nisi?
                </p>
                <button className="main-btn mt-2">Learn more</button>
              </div>
            </div>
          </div>
          <div className="container food-type">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12 text-sec mb-lg-0 mb-5">
                <h2>
                  we make everything by hand with the best possible ingredients
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione officiis corporis quos tenetur iste atque itaque
                  voluptatibus ad, similique dignissimos maxime amet pariatur
                  culpa placeat obcaecati eligendi rerum consectetur cupiditate.
                </p>
                <ul className="ist-unstyled py-3">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aspernatur, a!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aspernatur, a!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aspernatur, a!
                  </li>
                </ul>
                <button className="main-btn mt-4">Learn More</button>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="card border-0">
                  <img src={Collage} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="story">
        <div className="story-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="text-content">
                  <h2>
                    When a man's stomach is full it make no difference whether
                    he is rich or poor
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores, possimus cupiditate! Dolore earum molestiae minus
                    veniam necessitatibus consequatur perspiciatis harum optio
                    ullam et? Velit, repellendus!
                  </p>
                  <button className="main-btn mt-3">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="explore-food">
        <div className="explore-food wrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="text-content text-center">
                  <h2>Explore Our Foods</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    deserunt laborum porro, provident alias architecto libero.
                    Fugiat obcaecati quam magnam beatae qui commodi, saepe
                    perspiciatis! Quasi corrupti a dignissimos minus!
                  </p>
                </div>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
                <div className="card">
                  <img src={Food3} alt="Sandwich" />
                  <div className="pt-3">
                    <h4>Sandwich</h4>
                    <p>Time 5 - 10 Minutes | Serves: 1</p>
                    <span>
                      $3.20<del>$5.50</del>
                    </span>
                    <button className="mt-4 main-btn">Order Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
                <div className="card">
                  <img src={Food1} alt="vege-burger" />
                  <div className="pt-3">
                    <h4>Vegetarian Burger</h4>
                    <p>Time 30 - 45 Minutes | Serves: 1</p>
                    <span>
                      $9.20<del>$10.50</del>
                    </span>
                    <button className="mt-4 main-btn">Order Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
                <div className="card">
                  <img src={Food2} alt="ham-burger" />
                  <div className="pt-3">
                    <h4>Ham Burger</h4>
                    <p>Time 30 - 45 Minutes | Serves: 1</p>
                    <span>
                      $12.50<del>$13.50</del>
                    </span>
                    <button className="mt-4 main-btn">Order Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonial">
        <div className="wrapper testimonial-section">
          <div className="container text-center">
            <div className="text-center pb-4">
              <h2>Testimonial</h2>
              <div className="row">
                <div className="col-sm-12 col-lg-10 offset-lg-1">
                  <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      ></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="carousel-caption ">
                          <img src={Review1} alt="review2" />
                          <p>
                            "Far far away, behind the word mountain, far from
                            the countries Vokalia and Consonanti, there live the
                            blind texts
                          </p>
                          <h5>Maccy Doe - Front End</h5>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="carousel-caption">
                          <img src={Review2} alt="review2" />
                          <p>
                            Some representative placeholder content for the
                            second slide.
                          </p>
                          <h5>Second slide label</h5>
                        </div>
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="faq wrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="text-center pb-4">
                  <h2>Frequently Asked Questions</h2>
                </div>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-sm-6 mb-4">
                <h4>
                  <span>~</span>Is Foodies Bread really baked fresh each day?
                </h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                  accusantium, nesciunt officia quos vero maxime quis explicabo
                  ea officiis tenetur.
                </p>
              </div>
              <div className="col-sm-6 mb-4">
                <h4>
                  <span>~</span>Can I order products online?
                </h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                  accusantium, nesciunt officia quos vero maxime quis explicabo
                  ea officiis tenetur.
                </p>
              </div>
              <div className="col-sm-6 mb-4">
                <h4>
                  <span>~</span>When are you opening a shop near me?
                </h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                  accusantium, nesciunt officia quos vero maxime quis explicabo
                  ea officiis tenetur.
                </p>
              </div>
              <div className="col-sm-6 mb-4">
                <h4>
                  <span>~</span>Do you brakw breads containing animal fats or
                  products?
                </h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                  accusantium, nesciunt officia quos vero maxime quis explicabo
                  ea officiis tenetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="book-food">
        <div className="book-food">
          <div className="container book-food-text">
            <div className="row text-center">
              <div className="col-lg-9 col-md-12">
                <h2>Baked fresh daily by bakers with passion.</h2>
              </div>
              <div className="col-lg-3 col-md-12 mt-lg-0 mt-4">
                <button className="main-btn">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="newsletter">
        <div className="newsletter-section wrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="text-content text-center pb-4">
                  <h2>Hurry Up! Subscribe Our Newsletter And Get 25% Off</h2>
                  <p>Linited time offer for this month.no </p>
                </div>
                <form className="newsletter">
                  <div className="row">
                    <div className="col-md-8 col-12">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address here"
                        name="email"
                      />
                    </div>
                    <div className="col-md-4 col-12">
                      <button className="main-btn" type="submit">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer">
        <div className="footer py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <a href="#" className="footer-link">
                  Register
                </a>
                <a href="#" className="footer-link">
                  Forum
                </a>
                <a href="#" className="footer-link">
                  Affiliate
                </a>
                <a href="#" className="footer-link">
                  FAQ
                </a>
              </div>
              <div className="footer-social pt-4 text-center">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#">
                  <i className="fab fa-dribbble"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="copy-right text-center pt-5">
                <p className="text-light">
                  © 2021. Foodies. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
