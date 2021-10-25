import React, { Component } from 'react'

import {
  Link 
} from "react-router-dom";
const Navbar=()=> {
    
    
     let styles={
        marginright: '20px',
      width: '75px',  
    };
    let stylesheet={
    marginright: '20px',
    width: '75px',
    height: '250px',  
  };
  
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand"to="/">INDIAN NEWS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <span style={styles} className="badge badge-pill badge-secondary">
        <li className="nav-item">
          <Link className="nav-linkactive" aria-current="page"to="#">Home</Link>
        </li>
        </span>
        <span style={styles} className="badge badge badge-secondary">
        <li className="nav-item">
          <Link className="nav-link"to="/">About</Link>
        </li>
        </span>
        <span style={styles} className="badge badge-pil">
        <li className="nav-item"><Link className="nav-linkactive" aria-current="page"to="/business">Business</Link></li>
        </span>
        <li className="nav-item"><Link className="nav-linkactive" aria-current="page"to="/health">Health</Link></li>
      
        <span style={styles} className="badge badge-pill badge-secondary">
        
        <li className="nav-item"><Link className="nav-linkactive" aria-current="page"to="/sports">Sports</Link></li>
       </span>
       <span style={styles} className=" badge-pill badge-secondary">
        <li className="nav-item"><Link className="nav-linkactive" aria-current="page"to="/technology">Techno</Link></li>
        </span>
        <span style={styles} className=" badge-secondary">
        <li className="nav-item"><Link className="nav-linkactive" aria-current="page"to="/entertainment">Entertain</Link></li>
  </span>
  <span style={stylesheet} className="tethbtr trhry">
        <li className="nav-item"><Link className="nav-linkactive" aria-current="page"to="/science">Science</Link>
        </li>
  </span>
      </ul> 
    </div>
  </div>
</nav>
            </div>
        )
    }


export default Navbar
