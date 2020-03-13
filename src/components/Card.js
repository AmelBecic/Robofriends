import React from 'react';
import './Card.css'

const Card = (props) => {

    return (

        <div className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${props.id}?100x100`} alt="" />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>



        </div>




    );


}

export default Card;