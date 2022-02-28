import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import './about.css'



class About extends Component {
    render() {
        return (
            <div>
                <div>
                
                
                <h2 className='whoo'>Who Am I?</h2>
                <div className='my-main-animation'>
                   
                   <div className='my-main-text'>I'm a</div>
                       <ul className='my-main-option'>
                           <li><span>Programmer</span></li>
                           <li><span>Designer</span></li>
                           <li><span>Developer</span></li>
                           <li><span>Freelancer</span></li>

                       </ul>

                   

               </div>
                </div>

              
                <div className={classes.box} id="about">
                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                       
                        
                        <div className={classes.About}>
                            <p> My name is <b>Ishanka Madhuranga</b> and I am currently studying  at <a target="_blank" href="https://www.sjp.ac.lk/"><b> University of Sri Jayewardenepura</b></a>, Sri Lanka. I am much interested in developing new things which excite me a lot. :)  </p>
                            <p className={classes.br}>I love exploring new technologies and being a practitioner, I like to stay on top of latest trends. I try to leave every line of code I write more readable, accessible, and modular.
                            </p>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        )
    }
}

export default About;