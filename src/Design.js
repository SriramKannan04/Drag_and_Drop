import React from 'react';
import './Design.css';

function Design() {

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    const id = e.dataTransfer.getData("text");
    const draggableElement = document.getElementById(id);
    e.target.appendChild(draggableElement);
  };

  return (
    <div className='project2'>
    
      <center><h1 className='projectname2'>Arrange the Skills in order</h1></center>

      <div className="box1">

        <div className="dd1" id='db1' onDragOver={handleDragOver} onDrop={handleDrop}>

          <div className="entity" draggable="true" id='entity1'onDragStart={handleDragStart}>
            <img src="./img/dragIcon.png" alt="" srcset="" className='dragIcon'/>
            <p className='entries'>Third, grasp the intricacies of the React.js framework</p>            
          </div>

          <div className="entity" draggable="true" id='entity2'onDragStart={handleDragStart}>
            <img src="./img/dragIcon.png" alt="" srcset="" className='dragIcon'/>
            <p className='entries'>Initially, start learning HTML and CSS </p>
          </div>

          <div className="entity" draggable="true" id='entity3'onDragStart={handleDragStart}>
            <img src="./img/dragIcon.png" alt="" srcset="" className='dragIcon'/>
            <p className='entries'>Second, develop a solid understanding of JavaScript</p>
          </div>

          <div className="entity" draggable="true" id='entity4'onDragStart={handleDragStart}>
            <img src="./img/dragIcon.png" alt="" srcset="" className='dragIcon'/>
            <p className='entries'>Fifth, acquire expertise in SpringBoot and SQL</p>
          </div>

          <div className="entity" draggable="true" id='entity5'onDragStart={handleDragStart}>
            <img src="./img/dragIcon.png" alt="" srcset="" className='dragIcon'/>
            <p className='entries'>Thus, you have achieved the status of a Java Full Stack Developer</p>
          </div>

          <div className="entity" draggable="true" id='entity6' onDragStart={handleDragStart}>
            <img src="./img/dragIcon.png" alt="" srcset="" className='dragIcon'/>
            <p className='entries'>Forth, attain Knowledge in Core Java, JDBC, and Advanced Java</p>
          </div>

        </div>

        <div className="dd2" id='db2' onDragOver={handleDragOver} onDrop={handleDrop}></div>

      </div>
    </div>
  )
}

export default Design;