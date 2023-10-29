import React from 'react'
import './Navbar.css';

import { Link } from 'react-router-dom'; 

function Navbar() {
  return (
    <div className='navbar'>
      
      <Link to="/Homepage" className='projectTitle'>Drag & Drop</Link>
      

      <ul>
        <li> 
          <Link className='navCon' to="/Game"> <span className='model'>Model -</span> 1</Link>
        </li>

        <li> 
          <Link className='navCon' to="/Design"><span className='model'>Model -</span> 2</Link>
        </li>
        
        <li> 
          <Link className='navCon' to="/Design2"><span className='model'>Model -</span> 3</Link>
        </li>       
          
        <li>
          <Link className='navCon' to="/Design3"><span className='model'>Model -</span> 4</Link>
        </li> 

        <li>
          <Link className='navCon' to="/Design5"><span className='model'>Model -</span> 5</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar