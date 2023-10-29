import React from 'react';
import './Design3.css';

function Design3() {

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
    <div className='project4'>

        <center><h1 className='projectname4'>Organize and categorize the entities based on their groups.</h1></center>

        <center><div className="container">
       
            <div className="mainbox">

               <div className="mainrow" onDragOver={handleDragOver} onDrop={handleDrop} id='mr11' draggable="true">
                  <p className='mainlist' id='ma11' onDragStart={handleDragStart} draggable="true" onDragOver={handleDragOver} onDrop={handleDrop}>  Haskell</p>   {/* Functional Programming Language */}
                  <p className='mainlist' id='ma12' onDragStart={handleDragStart} draggable="true" onDragOver={handleDragOver} onDrop={handleDrop}>Python</p>    {/* OOPS */}
                  <p className='mainlist' id='ma13' onDragStart={handleDragStart} draggable="true" onDragOver={handleDragOver} onDrop={handleDrop}>C</p>         {/* Structured programming Language */}
                  <p className='mainlist' id='ma14' onDragStart={handleDragStart} draggable="true" onDragOver={handleDragOver} onDrop={handleDrop}>Ruby</p>      {/* OOPS */}                 
               </div> 

               <div className="mainrow" onDragOver={handleDragOver} onDrop={handleDrop} id='mr21' draggable="true">
                  <p className='mainlist' id='ma21' onDragStart={handleDragStart} draggable="true" onDragOver={handleDragOver} onDrop={handleDrop}>Lisp</p>         {/* Functional Programming Language */}
                  <p className='mainlist' id='ma22' onDragStart={handleDragStart} draggable="true" onDragOver={handleDragOver} onDrop={handleDrop}>JBoss AOP</p>    {/* AOP */}
                  <p className='mainlist' id='ma23' onDragStart={handleDragStart} draggable="true" onDragOver={handleDragOver} onDrop={handleDrop}>Spring AOP</p>   {/* Aspect Oriented Programming Language */}
                  <p className='mainlist' id='ma24' onDragStart={handleDragStart} draggable="true" onDragOver={handleDragOver} onDrop={handleDrop}>Fortran</p>      {/* Structured programming Language */}               
               </div>

               <div className="mainrow" onDragOver={handleDragOver} onDrop={handleDrop} id='mr31' draggable="true">
                  <p className='mainlist' id='ma31' onDragStart={handleDragStart} draggable="true" onDragOver={handleDragOver} onDrop={handleDrop}>AspectJ</p> {/* AOP Language */}
                  <p className='mainlist' id='ma32' onDragStart={handleDragStart} draggable="true" onDragOver={handleDragOver} onDrop={handleDrop}>ALGOL</p>   {/* Structured programming Language */}
                  <p className='mainlist' id='ma33' onDragStart={handleDragStart} draggable="true" onDragOver={handleDragOver} onDrop={handleDrop}>C++</p>     {/* OOPS */}
                  <p className='mainlist' id='ma34' onDragStart={handleDragStart} draggable="true" onDragOver={handleDragOver} onDrop={handleDrop}>Erlang</p>  {/* Functional Programming Language */}                
               </div>

               <div className="mainrow" onDragOver={handleDragOver} onDrop={handleDrop} id='mr41' draggable="true">
                  <p className='mainlist' id='ma41' onDragStart={handleDragStart} draggable="true" onDragOver={handleDragOver} onDrop={handleDrop}>Pascal</p>       {/* Structured programming Language */}
                  <p className='mainlist' id='ma42' onDragStart={handleDragStart} draggable="true" onDragOver={handleDragOver} onDrop={handleDrop}>AspectJ</p>      {/* AOP */}
                  <p className='mainlist' id='ma43' onDragStart={handleDragStart} draggable="true" onDragOver={handleDragOver} onDrop={handleDrop}>Meta Lang.</p>   {/* Functional Programming Language */}
                  <p className='mainlist' id='ma44' onDragStart={handleDragStart} draggable="true" onDragOver={handleDragOver} onDrop={handleDrop}>Java</p>         {/* OOPS */}                
               </div>           

            </div>

            <div className="secbox">

               <div className="row1">
                  <div className="group">
                     <center><h4 className='grouptitle'>OOP Languages</h4></center>
                     <div className="groupitems" onDragOver={handleDragOver} onDrop={handleDrop} id='gt1'></div>
                  </div>

                  <div className="group">
                     <center><h4 className='grouptitle'>FP Languages</h4></center>
                     <div className="groupitems" onDragOver={handleDragOver} onDrop={handleDrop} id='gt2'></div>
                  </div>
               </div>

               <div className="row2">
                  <div className="group">
                     <center><h4 className='grouptitle'>AOP Languages</h4></center>
                     <div className="groupitems" onDragOver={handleDragOver} onDrop={handleDrop} id='gt3'></div>
                  </div>

                  <div className="group">
                     <center><h4 className='grouptitle'>SP Languages</h4></center>
                     <div className="groupitems" onDragOver={handleDragOver} onDrop={handleDrop} id='gt4'></div>
                  </div>
               </div>

               
            </div>

        </div></center>
    
    </div>
  )
}

export default Design3;