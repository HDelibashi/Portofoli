import React from 'react';
import "./Contact.css";

const Contact = ()=>{
    return(
        <section className="contact container section" id='contact'>
        <h2 className="setion__title">Më kontaktoni</h2>
        <div className="contact__container grid">
        <div className="contact__info">
        <h3 className="contact__title">Le të flasim!</h3>
        <p className="contact__details">Më kontaktoni në e-mail</p>    
        </div>
        <form action="" className="contact__form">
        <div className="contact__form-group">
        <div className="contact__form-div">
        <input type="text" className="contact__form-input" placeholder='Vendosni emrin tuaj!'/>    
        </div>   
        <div className="contact__form-div">
        <input type="email" className="contact__form-input" placeholder='Vendosni email-in tuaj!'/>    
        </div> 
        </div> 
        <div className="contact__form-div">
        <input type="text" className="contact__form-input" placeholder='Vendosni subjektin!'/>    
        </div> 
        <div className="contact__form-div contact__form-area">
        <textarea name="" id="" cols="30" rows="10" className="contact__form-input" placeholder='Shkruani mesazhin tuaj!'></textarea>    
        </div>  
        <button className="btn">Dërgo mesazhin</button>   
        </form>    
        </div>     
        </section>
    )
}
export default Contact;