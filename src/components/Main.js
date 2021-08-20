import React from "react"
import profileAddButton from '../components/vendor/image/profile__add-button.svg'
import profileAvatar from '../components/vendor/image/profile__avatar.png'

function Main(props)  {

    const {onEditAvatar,onAddPlace,onEditProfile} = props;

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container">
                    <img src={profileAvatar} alt="аватар профиля" className="profile__avatar"/>
                    <button className="profile__avatar-edit" onClick={onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <div className="profile__edit">
                        <h1 className="profile__username">Жак-Ив Кусто</h1>
                        <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
                    </div>
                    <p className="profile__user-description">Исследователь океана</p>
                </div>
                <button className="profile__add-button" type="button" onClick={onAddPlace}>
                    <img src={profileAddButton} alt="кнопка добавления карточки" className="profile__add-image" />
                </button>
            </section>
            <section className="elements">
            </section>
        </main>
    )
}

export default Main