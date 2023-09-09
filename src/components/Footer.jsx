import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="footers">
      <div className="container footer-container">
        <div className="footer">
          <div className="foot-head">
            <a href="index.html"><h4>EGATAR</h4></a>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates, maxime.
          </p>
        </div>
        <div className="footer">
          <div className="foot-head">
            <div className="foot-head">
              <h4>Permalinks</h4>
            </div>
          </div>
          <ul>
            <li><a href="index.html">Bosh sahifa</a></li>
            <li><a href="about.html">Haqida</a></li>
            <li><a href="cources.html">Kurslar</a></li>
            <li><a href="contact.html">Aloqa</a></li>
          </ul>
        </div>
        <div className="footer">
          <div className="foot-head">
            <div className="foot-head">
              <h4>Ustunlik</h4>
            </div>
          </div>
          <ul>
            <li><a href="#">siyosat</a></li>
            <li><a href="#">Shartlar va shartlar</a></li>
            <li><a href="#">Pulni Qaytarish Siyosati</a></li>
          </ul>
        </div>
        <div className="footer">
          <div className="foot-head">
            <h4>Aloqa</h4>
          </div>
          <ul>
            <li><a href="contact.html">+0123456789</a></li>
            <li><a href="contact.html">sayedifrans12@gmail.com</a></li>
          </ul>
          <div className="foot-social-logos">
            <div className="foot-logo">
              <a href="#"><img src="/assets/Instagram-Icon.png" /></a>
            </div>
            <div className="foot-logo">
              <a href="#"> <img src="/assets/gmail-icon.png" /></a>
            </div>
            <div className="foot-logo">
              <a href="#"><img src="/assets/faceboook.png" /></a>
            </div>
            <div className="foot-logo">
              <a href="#"><img src="/assets/twitter.png" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="foot-copyright">
        <small>Mualliflik huquqi &copy; EGATAR</small>
      </div>
    </footer>
    </div>
  )
}

export default Footer
