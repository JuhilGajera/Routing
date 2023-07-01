import React from 'react'
import './style.css'
import { Link, Outlet } from 'react-router-dom'

export default function () {
    return (
        <div className='mainContainer'>
            <div className='left'>
                <Link to="Electronic" style={{ color: 'white', textDecoration: 'none' }}>Electronic</Link>
                <Link to="Jewellery" style={{ color: 'white', textDecoration: 'none' }}>Jewellery</Link>
                <Link to="Mens" style={{ color: 'white', textDecoration: 'none' }}>Men's Clothing</Link>
                <Link to="Womens" style={{ color: 'white', textDecoration: 'none' }}>Women's Clothing</Link>
            </div>
            <div className='right'>
                <Outlet />
                
            </div>
        </div>
    )
}
