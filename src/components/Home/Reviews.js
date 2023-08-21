import React from "react";
import './Reviews.css'

const Reviews = props => {
  return (
    <section id="reviews" className="bg-green text-white">
      <div className="super-container">
        <h2 className="subtitle section-title">Our customers say...</h2>
        <div className="grid-container customer-reviews">
          <article className="flex-container testimonial bg-white text-black">
            <div className="testimonial-icon">
              <img src="./images/andree-z.jpg" alt="Andree Z." />
            </div>
            <div className="bold-18">
              <p>Andree Z.</p>
            </div>
            <div className="text-yellow">
              <span>
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </span>
            </div>
            <div className="paragraph-text">
              <p>"I'd be lost without Little Lemon. Your company is truly upstanding and is behind its product 100%."</p>
            </div>
          </article>
          <article className="flex-container testimonial bg-white text-black">
            <div className="testimonial-icon">
              <img src="./images/walsh-e.png" alt="Walsh E." />
            </div>
            <div className="bold-18">
              <p>Walsh E.</p>
            </div>
            <div className="text-yellow">
              <span>
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </span>
            </div>
            <div className="paragraph-text">
              <p>"Little Lemon is the most valuable business resource we have EVER purchased."</p>
            </div>
          </article>
          <article className="flex-container testimonial bg-white text-black">
            <div className="testimonial-icon">
              <img src="./images/gigi-y.png" alt="Gigi Y." />
            </div>
            <div className="bold-18">
              <p>Gigi Y.</p>
            </div>
            <div className="text-yellow">
              <span>
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </span>
            </div>
            <div className="paragraph-text">
              <p>"Really good. Little Lemon was the best investment I ever made. It's just amazing."</p>
            </div>
          </article>
          <article className="flex-container testimonial bg-white text-black">
            <div className="testimonial-icon">
              <img src="./images/ansel-p.png" alt="Ansel P." />
            </div>
            <div className="bold-18">
              <p>Ansel P.</p>
            </div>
            <div className="text-yellow">
              <span>
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </span>
            </div>
            <div className="paragraph-text">
              <p>"The service was excellent. Little Lemon has got everything I need. Absolutely wonderful!"</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
