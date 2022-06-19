import React from "react";
import profile from "../../src/images/TeacherImage.png";

const TeacherGuide = () => {
  return (
    <div className="guide">
      <div className="container">
        <div className="row guide__content">
          <div className="col-5 guide__content-box1">
            <img src={profile} alt="" />
          </div>
          <div className="col-7 guide__content-box2">
            <h3> Before Enroll your-self !</h3>
            <p>
              In recent years, approaches other than CLT have suggested that TTT
              may not always be counterproductive and can be used to good
              effect. The teacher provides good listening practice which is not
              inhibited by the sound quality of a tape or CD player and which is
              accompanied by visual clues to aid comprehension. In a monolingual
              teaching context overseas, the teacher may provide a valuable
              source of authentic listening, exposing learners to a limited
              amount of new language, and ‘roughly tuning’ input to assist
              comprehension. In some circumstances, the teacher may be the only
              source of models of good, natural language. Some forms of TTT are
              clearly beneficial
            </p>
            <button type="submit" className="header__inputArea-child3">
              Select Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherGuide;
