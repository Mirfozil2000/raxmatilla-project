import React from 'react'

const Contacts = () => {
  return (
    <div>
    <section className="contacts">
        <div className="container contact-container">
            <aside className="contact-aside">
                <div className="aside-img">
                    <img src="/assets/asset 21.png" alt=""/>
                </div>
                <h2>Aloqa</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. eligendi id error! Obcaecati praesentium eius corporis aspernatur.</p>
                <ul className="contact-details">
                    <li>
                        <i className="fa-solid fa-phone"></i>
                        <h5>+123456789</h5>
                    </li>
                    <li>
                        <i className="fa-solid fa-message"></i>
                        <h5>Support@egatar.com</h5>
                    </li>
                    <li>
                        <i className="fa-solid fa-location-dot"></i>
                        Somewhere, on Earth.
                    </li>
                </ul>
                <div className="foot-social-logos  contact-social-logos">
                    <div className="foot-logo contact-logo">
                        <a href="#"><img src="/assets/Instagram-Icon.png" /></a>
                    </div>
                    <div className="foot-logo">
                        <a href="#"> <img src="/assets/gmail-icon.png" /></a>
                    </div>    
                    <div className="foot-logo">
                        <a href="#"><img src="/assets/faceboook.png"/></a>
                    </div>    
                    <div className="foot-logo">
                        <a href="#"><img src="/assets/twitter.png" alt=""/></a>
                    </div>
                </div>
            </aside>
            

            <form action="https://formspree.io/f/mdovqqgz" method="POST" className="contact-form">
                
                <div className="foydalanuvchi nomi">
                     <input type="matn" name="Ism" placeholder="Ism" required/>
                     <input type="matn" name="Familiyasi"  placeholder="Familiyasi" required/>
                </div>
                <input type="email" name="Email Address" placeholder="Sizning E-mail ID" required />
                <textarea name="Xabar"   rows="7" placeholder="Sizning Xabaringiz Bu Erda" required></textarea>
                <button className="btn btn-primary" type="yuborish">Xabar Yuborish</button>
                
            </form>
        </div>
    </section>
    </div>
  )
}

export default Contacts
