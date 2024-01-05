import './index.css'
import { useState } from 'react'

function Games(props){

    return(
        <div className='game-wrapper'>
            {props.map(
                (game)=>{
                    return(
                        <div className="game-item">
                            <h4>game.maker</h4>
                            <img src={game.url} alt="" />
                            <h4>{game.gameName}</h4>
                            <button className='wishlist-add'>Add to wishlist</button>
                        </div>
                    )
                }
            )}
            
        </div>
    )
}

export default Games