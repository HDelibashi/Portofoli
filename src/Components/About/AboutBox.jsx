import React from 'react';

const AboutBox =()=>{
    return (
     <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon fa-solid fa-folder-open"></i>
            <div>
                <h3 className="about__title">10</h3>
                <span className="about__subtitle">Projekte të kryera</span>
            </div>
        </div>
        <div className="about__box">
            <i className="about__icon icon-people"></i>
            <div>
                <h3 className="about__title">7</h3>
                <span className="about__subtitle">Klientë të kënaqur</span>
            </div>
        </div>
        <div className="about__box">
            <i className="about__icon fa-solid fa-code"></i>
            <div>
                <h3 className="about__title">1</h3>
                <span className="about__subtitle">Vit përvojë</span>
            </div>
        </div>
     </div>
    )
}
export default AboutBox;