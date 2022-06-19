import React from 'react';
import auhtor from '../../src/images/author.jpg';

const NewsLetter = () => {
  return (
    <div className="newsletter">
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h3 className="newsletter__content-h1">Master some skills and <br />
           get your free course <br />
            now!</h3>

          <blockquote className="blockquote">
            <div className="blockquote__content">
            <p>
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio sed non.
            </p>
            </div>

            <div className="blockquote-profileBox">
              <img src={auhtor} alt="auhtor" />
              <div className="blockquote-author">
                <h5 className="blockquote-title">Maya Henry</h5>
                <h6 className="blockquote-subTitle">Diploma in Web design</h6>
              </div>
            </div>

          </blockquote>
        </div>
        <div className="col-6">

        </div>
      </div>
    </div>  
    </div>
  );
};

export default NewsLetter;