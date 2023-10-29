import React from 'react';
import './Game.css';

function Game() {
    const allowDrop = (event) => {
        event.preventDefault();
    };

    const drag = (event) => {
        event.dataTransfer.setData("image", event.target.id);
    };

    const drop = (event) => {
        event.preventDefault();
        var data = event.dataTransfer.getData("image");
        event.target.appendChild(document.getElementById(data));
    };

    
    return (
        <div className='project1'>

            <div className="projectname1">Tic Tac Toe</div>

            <div className="drag">
                <div className="dragbox">
                    <div className="cross" draggable="true" ><img src="./img/cross1.png" alt="" className='wrong' id='cross1' onDragStart={drag} /></div>
                    <div className="cross" draggable="true" ><img src="./img/cross1.png" alt="" className='wrong' id='cross2' onDragStart={drag} /></div>
                    <div className="cross" draggable="true" ><img src="./img/cross1.png" alt="" className='wrong' id='cross3' onDragStart={drag} /></div>
                    <div className="cross" draggable="true" ><img src="./img/cross1.png" alt="" className='wrong' id='cross4' onDragStart={drag} /></div>
                    <div className="cross" draggable="true" ><img src="./img/cross1.png" alt="" className='wrong' id='cross5' onDragStart={drag} /></div>
                </div>
            </div>

            <div className="board">
                <div className="dropbox" onDrop={drop} onDragOver={allowDrop}></div>
                <div className="dropbox" onDrop={drop} onDragOver={allowDrop}></div>
                <div className="dropbox" onDrop={drop} onDragOver={allowDrop}></div>
                <div className="dropbox" onDrop={drop} onDragOver={allowDrop}></div>
                <div className="dropbox" onDrop={drop} onDragOver={allowDrop}></div>
                <div className="dropbox" onDrop={drop} onDragOver={allowDrop}></div>
                <div className="dropbox" onDrop={drop} onDragOver={allowDrop}></div>
                <div className="dropbox" onDrop={drop} onDragOver={allowDrop}></div>
                <div className="dropbox" onDrop={drop} onDragOver={allowDrop}></div>
            </div>

            <div className="drag">
                <div className="dragbox">
                    <div className="circle" draggable="true" ><img src="./img/tick1.png" alt="" className='tick' id='circle1' onDragStart={drag} /></div>
                    <div className="circle" draggable="true" ><img src="./img/tick1.png" alt="" className='tick' id='circle2' onDragStart={drag} /></div>
                    <div className="circle" draggable="true" ><img src="./img/tick1.png" alt="" className='tick' id='circle3' onDragStart={drag} /></div>
                    <div className="circle" draggable="true" ><img src="./img/tick1.png" alt="" className='tick' id='circle4' onDragStart={drag} /></div>
                    <div className="circle" draggable="true" ><img src="./img/tick1.png" alt="" className='tick' id='circle5' onDragStart={drag} /></div>
                </div>
            </div>

            <h3 className='reset'>Press F5 to reset the game</h3>

        </div>
    );
}

export default Game;
