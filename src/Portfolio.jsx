import React from 'react'

export default function Portfolio() {
  return (
    <>
    <h2>PORTFOLIO</h2>
    <div className='porto'>
    <div className="star">
            <div className="left"></div>
            <i className="fa-solid fa-star fa-2xl" style={{ color: "#780000" }}></i>
            <div className="right"></div>
          </div>
    </div>
    <div className='father'>
        <img src="./src/assets/cabin.png" alt="" width='400px'/>
        <img src="./src/assets/cake.png" alt=""  width='400px'/>
        <img src="./src/assets/circus.png" alt=""  width='400px'/>
        <img src="./src/assets/game.png" alt=""  width='400px'/>
        <img src="./src/assets/safe.png" alt=""  width='400px'/>
        <img src="./src/assets/submarine.png" alt=""  width='400px'/>
    </div>
    </>
  )
}
