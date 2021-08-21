import React from 'react'

function Card(props) {
    
    function handleClick() {
        props.onCardClick(props.card);
      }  

    return (
        <div className="elements-template">
            <div className="element card">
            <img src={props.card.link} alt={props.card.name} className="element__image" onClick={handleClick}/>
            <button className="element__delete-button" type="button"></button>
            <h3 className="element__title">{props.card.name}</h3>
            <div className="element__like-button-container">
                <button className="element__like-button" type="button"></button>
                <p className="element__like-counter">{props.card.likes.length}</p>
            </div>
            </div>
        </div>
    )
}

export default Card