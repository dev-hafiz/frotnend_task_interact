import React from "react";

const Course = () => {
  return (
    <div className="course">
      <div className="container">
        <div className="course__content">
          <div className="course__content-premium">
            <h1 className="course__content-h1">COURSE PRICE</h1>
            <p className="course__content-p">
              Here is the world first teacher's courses and audio clip guide how
              to gain your success. Take a course and join with us.{" "}
            </p>
          </div>

          <div className="row">
            <div className="col-6 course__content-box">
              <div className="course__content-card">
                <h4 className="course__content-miniTitle">Level</h4>
                <p className="course__content-price">
                  0 <sup>$</sup>
                </p>
                <hr />
                <p className="course__content-para">
                  Class aptent taciti sociosqu ad litora torent per conubia
                  nostra mauris.
                </p>

                <button type="submit" className="header__inputArea-child3">
                  Get Started
                </button>
              </div>
            </div>
            <div className="col-6">
              <div className="course__content-cardSecond">
                <h4 className="course__content-miniTitleSecond">Full Course</h4>
                <p className="course__content-priceSecond">
                  25 <sup>$</sup>
                </p>
                <hr />
                <p className="course__content-para">
                  Class aptent taciti sociosqu ad litora torent per conubia
                  nostra mauris.
                </p>

                <button type="submit" className="course__content-button">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
