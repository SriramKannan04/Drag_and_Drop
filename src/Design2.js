import React from 'react';
import './Design2.css';

function Design2() {

  const handleDragStart = (e) => {
    e.dataTransfer.setData("image", e.target.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    const id = e.dataTransfer.getData("image");
    const draggableElement = document.getElementById(id);
    e.target.appendChild(draggableElement);
  };

  return (
    <div className='project3'>
      
      <center><h1 className='projectname3'>Swap the Image to different boxes</h1></center>
      
      <center>
        <div className="bigBox">
          
          <div className="topBox">
            <div className="imgBox1" id='ib1'  onDragOver={handleDragOver} onDrop={handleDrop}> <img src="./img/nexevoLogo.png" alt="" srcset="" draggable="true" id='nexevo' className='nexevoLogo' onDragStart={handleDragStart}/> </div>
            <div className="imgBox1" id='ib2'  onDragOver={handleDragOver} onDrop={handleDrop}></div>
          </div>

          <div className="topBox">
            <div className="imgBox1" id='ib3'  onDragOver={handleDragOver} onDrop={handleDrop}></div>
            <div className="imgBox1" id='ib4'  onDragOver={handleDragOver} onDrop={handleDrop}></div>
          </div>
          
        
        </div>
      </center>
    </div>
  )
}

export default Design2;