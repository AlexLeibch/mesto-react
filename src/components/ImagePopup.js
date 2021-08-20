import React from 'react'

function ImagePopup(props) {
    return (
        <section className="popup popup_type_imagepopup">
            <div className="popup__figure-container">
                <figure className="popup__figure">
                    <img src="#" alt="#" className = "popup__image"/>
                    <figcaption className="popup__caption"></figcaption>
                </figure>
                <button className="popup__button-close" type="button"></button>
            </div>
        </section>
    )
}

export default ImagePopup