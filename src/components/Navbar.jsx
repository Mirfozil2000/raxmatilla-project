import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="container nav-container">
                    <a href="/"><h4>EGATAR</h4></a>
                    <ul className="nav-menu">
                        <li><Link to="/">Bosh sahifa</Link></li>
                        <li><Link to="/about">Haqida</Link></li>
                        <li><Link to="/cources">Kurslar</Link></li>
                        <li><Link to="/contact">Aloqa</Link></li>
                        <li><Link to="/login" style={{border: '1px solid blue', padding: '10px 20px', backgroundColor: 'orange', borderRadius: '20px'}}>avtorizatsiya</Link></li>
                        <li><Link to="/register" style={{border: '1px solid blue', padding: '10px 20px', backgroundColor: 'orange', borderRadius: '20px'}}>ro'yxatdan o'tish</Link></li>
                    </ul>
                    <button id="open-btn"><i className="fa fa-light fa-bars" ></i></button>
                    <button id="close-btn" className="close-icon"><i className="fa fa-xmark " ></i></button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
