import React from "react";

const Features = () => {
  return (
    <div className="features">
      <div className="container">
        <div className="row py-6">
          <div className="col-4">
            <div className="features__contentBox">
              <div className="features__contentBox-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  class="bi bi-lightning-charge"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z" />
                </svg>
              </div>
              <h3 className="features__contentBox-heading">LEARN DESIGNING</h3>
              <p className="features__contentBox-des">
                Duis sed odio sit amet vuutate cursus a sit amet mauris morbi
                accumsan ipsum velit nam nec tellus viele a odio.
              </p>
            </div>
          </div>
          <div className="col-4">
            <div className="features__contentBox">
              <div className="features__contentBox-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  class="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
              </div>
              <h3 className="features__contentBox-heading">ENJOY LEARNING</h3>
              <p className="features__contentBox-des">
                Duis sed odio sit amet vuutate cursus a sit amet mauris morbi
                accumsan ipsum velit nam nec tellus viele a odio.
              </p>
            </div>
          </div>
          <div className="col-4">
            <div className="features__contentBox">
              <div className="features__contentBox-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  class="bi bi-code-slash"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                </svg>
              </div>
              <h3 className="features__contentBox-heading">WRITE CLEAN CODE</h3>
              <p className="features__contentBox-des">
                Duis sed odio sit amet vuutate cursus a sit amet mauris morbi
                accumsan ipsum velit nam nec tellus viele a odio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
