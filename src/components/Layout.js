import React from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton.js';
import '../styles/Layout.css'


const Layout = (props) => {
  return(
    <div className="layout">
      <div id="header">
        <BackButton />
        <h1 className="page-title"> <Link id="home-link" to='/'> Rate My Pies! </Link></h1>
      </div>
      { props.children }
    </div>
  )
}

export default Layout;
