import React from "react";
import { useState } from "react";
import "./experience.css";

const Experience = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index)
  };
  
  return (
    <section className="qualification section" id="experience">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>

          <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
          </div> 
        </div>

        <div className="qualification__sections">
          <div 
          className={
            toggleState === 1 
            ? "qualification__content qualification__content-active" 
            : "qualification__content"
            }
          >

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Frontend Development</h3>
                <span className="qualification__subtitle">Self-Studying</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>May 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">BA Communication Studies</h3>
                <span className="qualification__subtitle">RANEPA, Liberal Arts</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2018 - 2022
                </div>
              </div>

            </div>            
          
          </div>

          <div className={
            toggleState === 2 
            ? "qualification__content qualification__content-active" 
            : "qualification__content"
            }>

<div className="qualification__data">
  <div>
    <h3 className="qualification__title">Frontend Developer</h3>
    <span className="qualification__subtitle">Freelance</span>
    <div className="qualification__calendar">
      <i className="uil uil-calendar-alt"></i>Aug 2022 - Present
    </div>
  </div>

  <div>
    <span className="qualification__rounder"></span>
    <span className="qualification__line"></span>
  </div>
</div>

<div className="qualification__data">
  <div></div>

  <div>
    <span className="qualification__rounder"></span>
    <span className="qualification__line"></span>
  </div>

  <div>
    <h3 className="qualification__title">UX Researcher</h3>
    <span className="qualification__subtitle">SberClass</span>
    <div className="qualification__calendar">
      <i className="uil uil-calendar-alt"></i>2019 - 2021
    </div>
  </div>

</div>

<div className="qualification__data">
  <div></div>

  <div>
    <span className="qualification__rounder"></span>
    <span className="qualification__line"></span>
  </div>

  <div>
    <h3 className="qualification__title">Advertisment Specialist</h3>
    <span className="qualification__subtitle">Contract</span>
    <div className="qualification__calendar">
      <i className="uil uil-calendar-alt"></i>2018 - 2022
    </div>
  </div>

</div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience