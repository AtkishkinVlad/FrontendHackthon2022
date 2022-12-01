import React from "react";
import TelegramLoginButton from "react-telegram-login"
import style from './SignCard.module.css'

const handleTelegramResponse = (response) => {
  console.log(response);
};

export const SignCard: React.FC = () => {
  console.log('SignCard')
  return (
    <article className={style.SignCard}>
      <h2 className={style.SignCard__header}>Сервис открыток</h2>
      <p className={style.SignCard__text}>
        Создавайте открытки и узнавайте новое о своих коллегах и их{' '}
        <span className={style.SignCard__accent}>увлечениях</span>
      </p>
      <TelegramLoginButton botName="christmas_card_bot" dataOnauth={handleTelegramResponse} />
    </article>
  )
}