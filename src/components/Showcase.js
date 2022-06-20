import React from "react";
import { Fade } from "react-reveal";
import course from "../../src/images/coursePic.jpg";

const Showcase = () => {
  return (
   <Fade left>
     <div className="showcase">
      <div className="container">
        <div className="row showcase__content">
          <div className="col-6">
            <h2 className="showcase__content-h2">
              Complete the course and showcase your success with a certificate.
            </h2>
            <p className="showcase__content-p">
              Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit cuat ipsum, nec sagittis sem
              nibh id elit duis sed odio sinibh vulputate cursus a sit amet
              mauris.
            </p>
          </div>
          <div className="col-6 showcase__content-img">
            <img src={course} alt="course" />
          </div>
        </div>
      </div>
    </div>
   </Fade>
  );
};

export default Showcase;
