import React from 'react'

function home() {
  return (
    <div>
        <div className='main-app-wrapper'>
            <div className='Select-Theme'>
                <button>Numbers</button>
                <button>Icons</button>
            </div>
            <div className='num-players'></div>
            <div className='grid-size'></div>
            <button className='start'>Start Game</button>
        </div>
    </div>
  )
}

export default home