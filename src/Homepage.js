import React from 'react';
import './Homepage.css';

import { Link } from 'react-router-dom'; 

function Homepage() {
  return (
    <div className='home'>

        <center><h1 className='dragdrop'>Drag and Drop Assignment</h1></center>

        <div className="oneline" id='ol1'>
            <div className="cards" id='cd1'>
                <div className="go">
                    <Link className='note' to="/Game"><img src="./img/model1.png" alt="" srcset="" className='mode'/> </Link>
                    <div className='show'>
                        <p className='showcontent'> Model 1 :-  Tic Tac Toe Game</p>
                    </div>
                </div>

                <center><button className='btn'>Click on Icon</button></center>
            </div>

            <div className="cards" id='cd2'>
                <div className="go">
                <Link className='note' to="/Design"><img src="./img/model2.png" alt="" srcset="" className='mode'/> </Link>
                    <div className='show'>
                        <p className='showcontent'> Model 2 :-  Sort  the Full Stack Skills</p>
                    </div>
                </div>

                <center><button className='btn'>Click on Icon</button></center>
            </div>

            <div className="cards" id='cd3'>
                <div className="go">
                   <Link className='note' to="/Design2"><img src="./img/model3.png" alt="" srcset="" className='mode'/> </Link>
                    <div className='show'>
                        <p className='showcontent'> Model 3 :-  Swap the Given Image</p>
                    </div>
                </div>

                <center><button className='btn'>Click on Icon</button></center>
            </div>

        </div>


        <div className="oneline" id='ol2'>
            <div className="cards" id='cd4'>
                <div className="go">
                    <Link className='note' to="/Design3"><img src="./img/model4.png" alt="" srcset="" className='mode'/> </Link>
                    <div className='show'>
                        <p className='showcontent'> Model 4 :-  Catagorize the Programming Language</p>
                    </div>
                </div>

                <center><button className='btn'>Click on Icon</button></center>
            </div>

            <div className="cards" id='cd5'>
                <div className="go">
                    <Link className='note' to="/Design5"><img src="./img/model5.png" alt="" srcset="" className='mode'/> </Link>
                    <div className='show'>
                        <p className='showcontent'> Model 5 :-  Drag and Drop Image File</p>
                    </div>
                </div>

                <center><button className='btn'>Click on Icon</button></center>
            </div>

        </div>

      

    </div>
  )
}

export default Homepage;