import React, {useState} from 'react';
import "./Projects.css";
import ProjectData from "./ProjectData";

const Projects =()=>{
    const [items, setItems]= useState(ProjectData); 
    return(
        <section className="work container section" id='projects'> 
        <h2 className="section__title">Projektet e fundit</h2>
        <div className="work__container grid">
        {
            items.map((elem)=>{
                const{id, image, title}=elem;
                return(
                    <div className="work__card" key={id}> 
                    <div className="work__thumbnail">
                    <img src={image} alt="" className="work__img"/>
                    <div className="work__mask"></div>
                    </div>
                    <h3 className="work__title">{title}</h3>
                    <a href="#" className="work__button">
                        <i className="icon-link work__button-icon"></i>
                    </a>
                    </div>
                )
            } )
        }
        </div>
         </section>
    )
}
export default Projects;
