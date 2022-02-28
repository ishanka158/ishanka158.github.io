import React, { Component } from 'react'
import classes from './Interest.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class Interest extends Component {
  render() {
    return (
      <div className={classes.box} id="interest">
        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
          <span className={classes.head}>WHAT I DO?</span>
          <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
          <div className={classes.Interest}>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.web}>
                <h3>Web Design</h3>
                <p>Passionate web designer, skilled in Adobe Creative Suite, HTML, CSS. Creates seamless UX and UI with creative but functional designs. Designed 10+ websites, including an ecommerce baseball hat sales site.  </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.app}>
                <h3>Web Develpoment</h3>
                <p>I am a full stack web developer(MERN) and build websites using HTML, CSS, Javascript, ReactJs.<br /> I have also good grasp on Node and NoSQL(MongoDb)</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.other}>
                <h3>UI Designs</h3>
                <p>Improve the look and feel of interactive computers and product software
                   Create overall concepts for the user experience within a business webpage or product, ensuring all interactions are intuitive and easy for customers </p>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    )
  }
}

export default Interest;