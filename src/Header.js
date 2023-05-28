import React from 'react'
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header(props) {
  const navigate = useNavigate();
  return (
    <div onClick={()=> props.from==="food-detail" ? navigate("/") : null } className='header'>
        <i className="fa fa-chevron-left"></i>
        <span className="text">{props.title}</span>
    </div>
  )
}

export default Header
