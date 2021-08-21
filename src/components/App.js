import logo from './logo.svg';
import '../index.css';
import React from 'react';

import Header  from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWIthForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
    const [selectedCard, setSelectedCards] = React.useState('')

    function handleEditAvatarClick () {
        setIsEditAvatarPopupOpen(true)
    }

    function handleEditProfileClick () {
        setIsEditProfilePopupOpen(true)
    }

    function handleAddPlaceClick () {
        setIsAddPlacePopupOpen(true)
    }

    function HandleCardClick(card) {
        setSelectedCards(card)
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setSelectedCards('')
    }


  return (
        <div className="page">
            <div className="page__root">
                <Header/>
                <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick} onCardClick={HandleCardClick}/>
                <Footer/>
                <PopupWIthForm
                    title = "Редактировать профиль"
                    name = "profile"
                    buttonText = "Сохранить"
                    isOpen = {isEditProfilePopupOpen}
                    onClose = {closeAllPopups}>
                    <input id="form-name-input" type="text" name="name"  placeholder="Имя" 
                            required minLength="2" maxLength="40" className="popup__field popup__field_type_name"/>
                    <span  className="form-name-input-error"></span>
                    <input id="form-description-input" type="text" name="description"  placeholder="описание" 
                            required minLength="2" maxLength="200" className="popup__field popup__field_type_description"/>
                    <span  className="form-description-input-error"></span>
                </PopupWIthForm>

                <PopupWIthForm
                    title = "Новое место"
                    name = "cardpopup"
                    buttonText = "Создать"
                    isOpen = {isAddPlacePopupOpen}
                    onClose = {closeAllPopups}>
                    <input type="text" id="form-place-input"  name="placeName"  placeholder="Название" 
                     minLength="2" maxLength="30" required className="popup__field popup__field_type_place"/>
                     <span className="form-place-input-error"></span>
                    <input type="url" id="form-link-input" name="form-link-input"  placeholder="Ссылка на картинку" 
                    required minLength="2" className="popup__field popup__field_type_imageUrl"/>
                    <span className="form-link-input-error"></span>
                    </PopupWIthForm>
                
                <PopupWIthForm
                    title ="Обновить Аватар"
                    name = "avatarpopup"
                    buttonText = "Сохранить"
                    isOpen = {isEditAvatarPopupOpen}
                    onClose = {closeAllPopups}>
                    <input type="url" id="form-avatar" className="popup__field popup__field_avatar_imageUrl" placeholder="Ссылка на аватар"/>
                    <span className="form-avatar-error" id="form-avatar-error"></span>
                </PopupWIthForm>
                <PopupWIthForm
                    title="Вы уверены?"
                    name="remove-card"
                    buttonText="Да"
                    onClose={closeAllPopups}>
                </PopupWIthForm>
                <ImagePopup
                    card={selectedCard}
                    onClose={closeAllPopups}/>
            </div>
        </div>
  );
}

export default App;



// eslint-disable-next-line no-lone-blocks
{/* <section className="popup popup_type_profile">
            <div className="popup__container">
                <button type="button" className="popup__button-close"></button>
                <h2 className="popup__title">Редактировать профиль</h2>
                <form  name="profilePopup" className="popup__form popup__form-profile" noValidate>
                    <input id="form-name-input" type="text" name="name" defaultValue="Имя" placeholder="Имя" 
                    required minLength="2" maxLength="40" className="popup__field popup__field_type_name"/>
                    <span  className="form-name-input-error"></span>
                    <input id="form-description-input" type="text" name="description" defaultValue="описание" placeholder="описание" 
                    required minLength="2" maxLength="200" className="popup__field popup__field_type_description"/>
                    <span  className="form-description-input-error"></span>

                </form>
            </div>
        </section>
        <section className="popup popup_type_cardpopup">
            <div className="popup__container">
                <button type="button" className="popup__button-close  popup__button-close_card-add"></button>
                <h2 className="popup__title">Новое место</h2>
                <form name="popup-card" className="popup__form popup__form-card" noValidate>
                    <input type="text" id="form-place-input"  name="placeName"  placeholder="Название" 
                     minLength="2" maxLength="30" required className="popup__field popup__field_type_place"/>
                     <span className="form-place-input-error"></span>
                    <input type="url" id="form-link-input" name="form-link-input"  placeholder="Ссылка на картинку" 
                    required minLength="2" className="popup__field popup__field_type_imageUrl"/>
                    <span className="form-link-input-error"></span>
                    <button  type="submit" className="popup__button-save">Создать</button>
                </form> 
            </div>
        </section>

        <section className="popup popup_type_avatarpopup">
            <div className="popup__container">
                <button type="button" className="popup__button-close popup__button-close_edit-avatar"></button>
                <h2 className="popup__title">Обновить аватар</h2>
                <form name="popup-avatar"  className="popup__form popup__form-avatar"  noValidate>
                    <input type="url" id="form-avatar" className="popup__field popup__field_avatar_imageUrl" placeholder="Ссылка на аватар"/>
                    <span className="form-avatar-error" id="form-avatar-error"></span>
                    <button type="submit" className="popup__button-save">Создать</button>
                </form>
            </div>
        </section>
        <section className="popup popup_type_deleteimage">
            <div className="popup__container popup__container_size_small">
                <button className="popup__button-close popup__button-close_delete-profile"></button>
                <h2 className="popup__title">Вы уверены?</h2>
                <form action="" className="popup__form popup__form_edit-margin">
                    <button className="popup__button-save">Да</button>
                </form>
            </div>
        </section>
    </div>
    <template className="elements-template">
        <div className="element card">
          <img src="#" alt="#" className="element__image"/>
          <button className="element__delete-button" type="button"></button>
          <h2 className="element__title"></h2>
          <div className="element__like-button-container">
            <button className="element__like-button" type="button"></button>
            <p className="element__like-counter">0</p>
          </div>
        </div>
      </template> */}