import React from 'react';
import "./About.css";
import Image from "../assets/aboutimg.png";
import AboutBox from "./AboutBox";

const About =()=>{
    return(
        <section className="about container section" id="about">
            <h2 className="section__title">Rreth meje</h2>
            <div className="about__container grid">
            <img src={Image} alt="" className="about__img" />
            <div className="about__data grid">
            <div className="about__info">
                <p className="about__description">Unë jam Halit Delibashi. 
                    Kam përfunduar studimet për Teknologji Informacioni dhe Komunikimi në Fakultetin e Shkencave të Natyrës në Tiranë. 
                    Pas kryerjes së arsimit të lartë i jam përkushtuar fushës web developer.</p>
                <a href="" className="btn">Shkarko CV-në</a>
            </div>
            <div className="about__skills grid">
            <div className="skills__data">
            <div className="skills__titles">
            <h3 className="skills__name">HTML & CSS</h3>
            <span className="skills__number">90%</span>
            </div>
            <div className="skills__bar">
                <span className="skills__percentage htmlcss"></span>
            </div>
            </div>
            <div className="skills__data">
            <div className="skills__titles">
            <h3 className="skills__name">Javascript</h3>
            <span className="skills__number">90%</span>
            </div>
            <div className="skills__bar">
                <span className="skills__percentage javascript"></span>
            </div>
            </div>
            <div className="skills__data">
            <div className="skills__titles">
            <h3 className="skills__name">React JS</h3>
            <span className="skills__number">85%</span>
            </div>
            <div className="skills__bar">
                <span className="skills__percentage reactjs"></span>
            </div>
            </div>
            </div>    
            </div>    
            </div>
            <AboutBox/>
        </section>
    )
}
export default About;