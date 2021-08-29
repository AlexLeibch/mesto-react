import React from "react"
import profileAddButton from '../vendor/image/profile__add-button.svg'
import api from "../utils/api"
import Card from "./Card"
import {CurrentUserContext} from '../contexts/CurrentUserContext'

function Main(props)  {
    const [userName, setUserName] = React.useState('')
    const [userDescription, setUserDescription] = React.useState('')
    const [userAvatar, setUserAvatar] = React.useState('')
    const [cards, setCards] = React.useState([])
    const currentUser = React.useContext(CurrentUserContext)

    React.useEffect(() => {
        api.getUserInfo()
        .then((data) => {
            setUserName(data.name)
            setUserDescription(data.about)
            setUserAvatar(data.avatar)  
        })
        .catch((err) => {
            console.log(err)
        })

        api.getInitialCards()
            .then(cardList => {
                setCards(cardList)
            })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const {onEditAvatar,onAddPlace,onEditProfile, onCardClick} = props;

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container">
                    <img src={`${currentUser.userAvatar}`} alt="аватар профиля" className="profile__avatar"/>
                    <button className="profile__avatar-edit" onClick={onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <div className="profile__edit">
                        <h1 className="profile__username">{currentUser.userName}</h1>
                        <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
                    </div>
                    <p className="profile__user-description">{currentUser.userDescription}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={onAddPlace}>
                    <img src={profileAddButton} alt="кнопка добавления карточки" className="profile__add-image" />
                </button>
            </section>
            <section className="elements">
                {cards.map(card => (<Card key={card._id} card={card} onCardClick={onCardClick}/>))}
            </section>
        </main>
    )
}

export default Main