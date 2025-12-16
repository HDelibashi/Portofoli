import React from 'react';
import "./Home.css";
import homeimg from "../assets/homeimg.png";

const Home = ()=>{
    return(
        <section className="home container" id="home">
          
            <div className="intro">  
            <h1 className="home__name">Halit Delibashi</h1>
            <span className="home__education">Zhvillues front-end</span>
            <div className="home__socials">
                <a href="https://www.instagram.com/" className="home__social-link" target="_blank">
                <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/login" className="home__social-link" target="_blank">
                <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/login" className="home__social-link" target="_blank">
                <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://www.facebook.com/" className="home__social-link" target="_blank">
                <i class="fa-brands fa-facebook"></i>
                </a>  
            </div>
            <a href="#contact" className="btn">Më punëso</a>
            </div>
            <img src={homeimg} alt="" className="avatar__img"/>
        </section>
    )
}
export default Home;