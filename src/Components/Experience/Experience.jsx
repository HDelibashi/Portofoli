import React from 'react';
import "./Experience.css";
import Data from './Data';
import Card from './Card';

const Experience = ()=>{
    return(
        <section className="resume container setion" id='experience'> 
        <h2 className="section__title">Përvoja</h2>
        <div className="resume__container grid">
            <div className="timeline grid">
                {Data.map((val, id)=>{
                    if(val.category==="edukimi"){
                        return(
                            <Card key={id} icon={val.icon} title={val.title} year={val.year} desc={val.desc}/>
                        )
                    }
                }
            )}
            </div>

            <div className="timeline grid">
                {Data.map((val, index)=>{
                    if(val.category==="përvojë"){
                        return(
                            <Card key={index} icon={val.icon} title={val.title} year={val.year} desc={val.desc}/>
                        )
                    }
                }
            )}
            </div>
        </div>
        </section>
    )
}
export default Experience;